<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue';
import type { CategoryItem, CategoryPayload } from '~/composables/useApi';

const api = useApi();

const categories = ref<CategoryItem[]>([]);
const categoryTotal = ref(0);
const loading = ref(true);
const saving = ref(false);
const deletingId = ref<string | null>(null);
const errorMessage = ref('');
const successMessage = ref('');
const editingId = ref<string | null>(null);

const form = reactive<CategoryPayload>({
  name: '',
  slug: '',
  color: '#3B82F6',
});

const formTitle = computed(() =>
  editingId.value ? 'Edit category' : 'Create category',
);

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function resetForm() {
  form.name = '';
  form.slug = '';
  form.color = '#3B82F6';
  editingId.value = null;
}

function setMessage(type: 'success' | 'error', message: string) {
  if (type === 'success') {
    successMessage.value = message;
    errorMessage.value = '';
    return;
  }

  errorMessage.value = message;
  successMessage.value = '';
}

async function loadCategories() {
  loading.value = true;

  try {
    const response = await api.listCategories();
    categories.value = response.data;
    categoryTotal.value = response.meta.total;
  } catch {
    setMessage('error', 'Unable to load categories from the API.');
  } finally {
    loading.value = false;
  }
}

function startEdit(item: CategoryItem) {
  editingId.value = item.id;
  form.name = item.name;
  form.slug = item.slug;
  form.color = item.color ?? '#3B82F6';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cancelEdit() {
  resetForm();
  successMessage.value = '';
  errorMessage.value = '';
}

async function submitForm() {
  saving.value = true;
  setMessage('success', '');

  const payload: CategoryPayload = {
    name: form.name.trim(),
    slug: form.slug.trim() || slugify(form.name),
    color: form.color?.trim() || null,
  };

  try {
    if (editingId.value) {
      await api.updateCategory(editingId.value, payload);
      setMessage('success', 'Category updated.');
    } else {
      await api.createCategory(payload);
      setMessage('success', 'Category created.');
    }

    resetForm();
    await loadCategories();
  } catch (error: any) {
    setMessage(
      'error',
      error?.data?.message || 'Unable to save the category.',
    );
  } finally {
    saving.value = false;
  }
}

async function deleteCategory(id: string) {
  deletingId.value = id;
  setMessage('success', '');

  try {
    await api.deleteCategory(id);
    setMessage('success', 'Category deleted.');

    if (editingId.value === id) {
      resetForm();
    }

    await loadCategories();
  } catch (error: any) {
    setMessage(
      'error',
      error?.data?.message || 'Unable to delete the category.',
    );
  } finally {
    deletingId.value = null;
  }
}

watch(
  () => form.name,
  (value) => {
    if (!editingId.value || !form.slug) {
      form.slug = slugify(value);
    }
  },
);

onMounted(() => {
  void loadCategories();
});
</script>

<template>
  <div class="min-h-screen bg-background-primary">
    <section class="border-b border-border-primary bg-white">
      <div class="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 xl:px-10">
        <div class="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div class="space-y-2">
            <p class="text-sm font-semibold uppercase tracking-wide text-blue-600">Frontend CRUD Test</p>
            <h1 class="text-3xl font-bold text-slate-900">Category Manager</h1>
            <p class="max-w-2xl text-sm leading-6 text-slate-500">
              Use this page to create, edit, and delete category records through the Nest API and
              confirm the changes land in PostgreSQL immediately.
            </p>
          </div>

          <div class="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div class="h-2.5 w-2.5 rounded-full" :class="loading ? 'bg-amber-400' : 'bg-emerald-500'" />
            <span class="text-sm text-slate-600">
              {{ loading ? 'Refreshing records...' : `${categoryTotal} categories loaded` }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto grid w-full max-w-6xl gap-8 px-6 py-8 xl:grid-cols-[360px_minmax(0,1fr)] xl:px-10">
      <div class="space-y-4">
        <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div class="mb-5 flex items-center justify-between">
            <div>
              <h2 class="text-lg font-bold text-slate-900">{{ formTitle }}</h2>
              <p class="mt-1 text-sm text-slate-500">Fill the form and save it to PostgreSQL.</p>
            </div>

            <button
              v-if="editingId"
              type="button"
              class="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50"
              @click="cancelEdit"
            >
              Cancel
            </button>
          </div>

          <form class="space-y-4" @submit.prevent="submitForm">
            <label class="block space-y-2">
              <span class="text-sm font-medium text-slate-700">Name</span>
              <input
                v-model="form.name"
                type="text"
                class="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="Marketing"
                required
              />
            </label>

            <label class="block space-y-2">
              <span class="text-sm font-medium text-slate-700">Slug</span>
              <input
                v-model="form.slug"
                type="text"
                class="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="marketing"
                required
              />
            </label>

            <label class="block space-y-2">
              <span class="text-sm font-medium text-slate-700">Color</span>
              <div class="flex items-center gap-3">
                <input
                  v-model="form.color"
                  type="color"
                  class="h-11 w-14 rounded-lg border border-slate-200 bg-white p-1"
                />
                <input
                  v-model="form.color"
                  type="text"
                  class="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="#3B82F6"
                />
              </div>
            </label>

            <button
              type="submit"
              class="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
              :disabled="saving"
            >
              {{ saving ? 'Saving...' : editingId ? 'Update category' : 'Create category' }}
            </button>
          </form>
        </div>

        <div v-if="successMessage" class="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {{ successMessage }}
        </div>

        <div v-if="errorMessage" class="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {{ errorMessage }}
        </div>
      </div>

      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-lg font-bold text-slate-900">Live database records</h2>
            <p class="mt-1 text-sm text-slate-500">Each row comes from the backend API.</p>
          </div>

          <button
            type="button"
            class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50"
            @click="loadCategories"
          >
            Refresh
          </button>
        </div>

        <div class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div v-if="loading" class="px-5 py-10 text-center text-sm text-slate-500">
            Loading categories...
          </div>

          <div v-else-if="!categories.length" class="px-5 py-10 text-center text-sm text-slate-500">
            No categories yet. Create the first one from the form.
          </div>

          <div v-else class="divide-y divide-slate-100">
            <article
              v-for="item in categories"
              :key="item.id"
              class="grid gap-4 px-5 py-4 lg:grid-cols-[minmax(0,1fr)_auto]"
            >
              <div class="space-y-3">
                <div class="flex flex-wrap items-center gap-3">
                  <div class="h-3 w-3 rounded-full border border-white shadow-sm" :style="{ backgroundColor: item.color || '#CBD5E1' }" />
                  <h3 class="text-base font-semibold text-slate-900">{{ item.name }}</h3>
                  <code class="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">{{ item.slug }}</code>
                </div>

                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                  <span>ID: {{ item.id }}</span>
                  <span>Prompts: {{ item._count?.prompts ?? 0 }}</span>
                  <span>Updated: {{ new Date(item.updatedAt).toLocaleString() }}</span>
                </div>
              </div>

              <div class="flex items-center gap-2">
                <button
                  type="button"
                  class="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  @click="startEdit(item)"
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="rounded-lg bg-rose-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:bg-rose-300"
                  :disabled="deletingId === item.id"
                  @click="deleteCategory(item.id)"
                >
                  {{ deletingId === item.id ? 'Deleting...' : 'Delete' }}
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
