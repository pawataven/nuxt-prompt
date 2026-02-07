<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-[Prompt]">
    <!-- Page Header -->
    <div class="mx-auto max-w-6xl px-8 py-6">
      <div class="flex items-center gap-2">
        <span class="cursor-pointer text-xl">←</span>
        <h2 class="text-lg font-semibold">แพ็กเกจสมาชิก</h2>
      </div>
    </div>

    <!-- Pricing -->
    <section class="mx-auto max-w-6xl px-8 pb-12 text-center">
      <h1 class="text-3xl font-bold">
        เลือกแพ็กเกจที่เหมาะกับ<br />
        การใช้งานของคุณ
      </h1>

      <p class="mt-4 text-gray-500">
        ใช้ฟรีได้เต็มที่ หรือเลือก Premium เพื่อประสบการณ์ที่ลื่นไหลกว่า<br />
        <span class="text-blue-600">
          ไม่มีการล็อกเนื้อหา Prompt ใด ๆ ทั้งสิ้น
        </span>
      </p>

      <!-- Cards -->
      <div class="mt-12 flex flex-wrap justify-center gap-8">
        <!-- Starter -->
        <div
          class="relative w-[320px] rounded-2xl border border-gray-200 bg-white p-6 text-left"
        >
          <span class="text-xs text-gray-500">STARTER</span>
          <h3 class="mt-2 text-lg font-semibold">เริ่มต้นใช้งาน</h3>

          <ul class="mt-4 space-y-2 text-sm">
            <li>✓ คัดลอก Prompt ได้ไม่จำกัด</li>
            <li>✓ บันทึก Prompt</li>
            <li class="text-gray-400">– ไม่มี Collection</li>
            <li class="text-gray-400">– Bookmark 10 รายการ</li>
          </ul>

          <button
            class="mt-6 w-full rounded-lg border border-gray-300 py-2 text-sm hover:bg-gray-50"
          >
            เริ่มใช้งานฟรี
          </button>
        </div>

        <!-- Pro -->
        <div
          class="relative w-[320px] rounded-2xl border-2 border-blue-600 bg-white p-6 text-left"
        >
          <span
            class="absolute -top-3 right-4 rounded-full bg-blue-600 px-3 py-1 text-xs text-white"
          >
            แนะนำ
          </span>

          <span class="text-xs font-semibold text-blue-600">
            PRO WORKFLOW
          </span>

          <div class="mt-3 flex items-end gap-1">
            <strong class="text-3xl">฿129</strong>
            <span class="text-sm text-gray-500">/ เดือน</span>
          </div>

          <ul class="mt-4 space-y-2 text-sm">
            <li class="text-blue-600">✓ ใช้งานไม่จำกัด</li>
            <li class="text-blue-600">✓ Bookmark ไม่จำกัด</li>
            <li class="text-blue-600">✓ สร้าง Collection</li>
            <li class="text-blue-600">✓ ดูประวัติการใช้งาน</li>
          </ul>

          <button
            class="mt-6 w-full rounded-lg bg-blue-600 py-2 text-sm text-white hover:bg-blue-700"
          >
            อัปเกรดแพ็กเกจ
          </button>
        </div>
      </div>

      <!-- Compare table -->
      <div
        class="mx-auto mt-16 max-w-3xl rounded-xl border bg-white"
      >
        <div class="border-b p-4 text-sm font-semibold text-gray-800">
          เปรียบเทียบคุณสมบัติ
        </div>

        <div class="grid grid-cols-3 text-sm">
          <div class="border-b p-4">ค้นหา Prompt</div>
          <div class="border-b p-4 text-center text-green-500">✓</div>
          <div class="border-b p-4 text-center text-blue-500">✓</div>

          <div class="border-b p-4">สร้าง Collection</div>
          <div class="border-b p-4 text-center text-gray-400">–</div>
          <div class="border-b p-4 text-center text-blue-500">✓</div>

          <div class="p-4">Bookmark</div>
          <div class="p-4 text-center text-gray-500">10 รายการ</div>
          <div class="p-4 text-center text-blue-500">ไม่จำกัด</div>
        </div>
      </div>

      <!-- Footer note -->
      <div class="mt-8 text-xs text-gray-400">
        สามารถยกเลิกแพ็กเกจได้ทุกเมื่อ · ไม่มีค่าใช้จ่ายแอบแฝง
      </div>
    </section>
  </div>
</template>
