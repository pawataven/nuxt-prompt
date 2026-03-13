<script setup lang="ts">
// สามารถ import useRouter เพื่อใช้สำหรับเปลี่ยนหน้าได้
// import { useRouter } from 'vue-router'
// const router = useRouter()

const startFreePlan = () => {
  // ใส่ Action ที่ต้องการเมื่อคลิกปุ่มเริ่มใช้งานฟรี
}

const upgradePlan = () => {
  // ใส่ Action ที่ต้องการเมื่อคลิกปุ่มอัปเกรดแพ็กเกจ
}
</script>

<template>
  <div class="min-h-screen bg-background-primary">
    <div class="mx-auto max-w-6xl px-8 py-8">
      <div class="flex items-center gap-2">
      </div>
    </div>

    <section class="mx-auto max-w-7xl px-8 pb-16 text-center">
      <h1 class="text-5xl font-bold text-text-primary md:text-6xl md:leading-tight">
        เลือกแพ็กเกจที่เหมาะกับ<br />
        การใช้งานของคุณ
      </h1>

      <p class="mt-6 text-lg text-text-secondary">
        ใช้ฟรีได้เต็มที่ หรือเลือก Premium เพื่อประสบการณ์ที่ลื่นไหลกว่า<br />
        <span class="text-primary font-medium">
          ไม่มีการล็อกเนื้อหา Prompt ใด ๆ ทั้งสิ้น
        </span>
      </p>

      <div class="mt-16 flex flex-wrap justify-center items-stretch gap-10">
        
        <div class="relative flex flex-col w-[380px] rounded-3xl border border-border-primary bg-background-secondary p-8 text-left shadow-sm">
          <span class="text-sm font-semibold tracking-wider text-text-secondary">STARTER</span>
          <h3 class="mt-3 text-2xl font-bold text-text-primary">เริ่มต้นใช้งาน</h3>

          <ul class="mt-8 space-y-4 text-base font-medium text-text-primary">
            <li class="flex items-start gap-3">
              <svg class="h-6 w-6 shrink-0 text-success" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>คัดลอก Prompt ได้ไม่จำกัด</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="h-6 w-6 shrink-0 text-success" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>เข้าถึงทุกหมวดในชุมชน</span>
            </li>
            
            <li class="flex items-start gap-3 text-text-muted">
              <svg class="h-6 w-6 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>มีโฆษณาสนับสนุน (แบบไม่กวนใจ)</span>
            </li>
            <li class="flex items-start gap-3 text-text-muted">
              <svg class="h-6 w-6 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>บันทึกรายการโปรด (Bookmark) ได้ 10 รายการ</span>
            </li>
            <li class="flex items-start gap-3 text-text-muted">
              <svg class="h-6 w-6 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>ค้นหาไอเดียพื้นฐาน</span>
            </li>
          </ul>

          <div class="mt-auto pt-10">
            <button @click="startFreePlan" class="w-full cursor-pointer rounded-xl border border-border-primary py-3 text-base font-semibold text-text-primary transition-colors hover:bg-background-hover">
              เริ่มใช้งานฟรี
            </button>
            <div class="mt-4 text-center text-sm font-medium text-text-muted">
              ใช้งานได้จริง ไม่บังคับอัปเกรด
            </div>
          </div>
        </div>

        <div class="relative flex flex-col w-[380px] rounded-3xl border-2 border-primary bg-background-secondary p-8 text-left shadow-md">
          <span class="absolute -top-4 right-6 rounded-full bg-primary px-5 py-1.5 text-sm font-bold tracking-wide text-white">
            แนะนำ
          </span>

          <span class="text-sm font-bold uppercase tracking-wider text-primary">
            PRO WORKFLOW
          </span>

          <div class="mt-3 flex items-baseline gap-2 text-text-primary">
            <strong class="text-5xl font-bold">฿129</strong>
            <span class="text-base font-semibold text-text-secondary">/ เดือน</span>
          </div>

          <ul class="mt-8 space-y-4 text-base font-medium text-primary">
            <li class="flex items-start gap-3">
              <svg class="h-6 w-6 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>ใช้งานไม่จำกัด</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="h-6 w-6 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Bookmark ไม่จำกัด</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="h-6 w-6 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>สร้าง Collection</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="h-6 w-6 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>ดูประวัติการใช้งาน</span>
            </li>
          </ul>

          <div class="mt-auto pt-10">
            <button @click="upgradePlan" class="w-full cursor-pointer rounded-xl bg-primary py-3 text-base font-bold text-white transition-colors hover:bg-primary-hover shadow-sm hover:shadow">
              อัปเกรดแพ็กเกจ
            </button>
            <div class="mt-4 h-[20px]"></div>
          </div>
        </div>
      </div>

      <div class="mx-auto mt-20 max-w-4xl overflow-hidden rounded-2xl border border-border-primary bg-background-secondary shadow-sm">
        <div class="border-b border-border-primary bg-background-primary p-5 text-center text-base font-bold text-text-primary">
          เปรียบเทียบคุณสมบัติ
        </div>

        <table class="w-full text-base">
          <tbody>
            <tr class="border-b border-border-secondary transition-colors hover:bg-background-hover">
              <td class="w-1/3 p-6 pl-10 text-left font-medium text-text-primary">ค้นหาและคัดลอก Prompt</td>
              <td class="w-1/3 p-6 text-center text-lg font-bold text-success">✓</td>
              <td class="w-1/3 p-6 text-center text-lg font-bold text-primary">✓</td>
            </tr>

            <tr class="border-b border-border-secondary transition-colors hover:bg-background-hover">
              <td class="w-1/3 p-6 pl-10 text-left font-medium text-text-primary">การเข้าถึงหมวดหมู่ชุมชน</td>
              <td class="w-1/3 p-6 text-center text-lg font-bold text-success">✓</td>
              <td class="w-1/3 p-6 text-center text-lg font-bold text-primary">✓</td>
            </tr>

            <tr class="border-b border-border-secondary transition-colors hover:bg-background-hover">
              <td class="w-1/3 p-6 pl-10 text-left font-medium text-text-primary">บันทึกรายการโปรด (Bookmark)</td>
              <td class="w-1/3 p-6 text-center font-medium text-text-secondary">10 รายการ</td>
              <td class="w-1/3 p-6 text-center font-bold text-primary">ไม่จำกัด</td>
            </tr>

            <tr class="border-b border-border-secondary transition-colors hover:bg-background-hover">
              <td class="w-1/3 p-6 pl-10 text-left font-medium text-text-primary">สร้าง Collection ส่วนตัว</td>
              <td class="w-1/3 p-6 text-center text-lg font-bold text-text-muted">–</td>
              <td class="w-1/3 p-6 text-center text-lg font-bold text-primary">✓</td>
            </tr>

            <tr class="border-b border-border-secondary transition-colors hover:bg-background-hover">
              <td class="w-1/3 p-6 pl-10 text-left font-medium text-text-primary">ดูประวัติการใช้งาน</td>
              <td class="w-1/3 p-6 text-center text-lg font-bold text-text-muted">–</td>
              <td class="w-1/3 p-6 text-center text-lg font-bold text-primary">✓</td>
            </tr>

            <tr class="border-b border-border-secondary transition-colors hover:bg-background-hover">
              <td class="w-1/3 p-6 pl-10 text-left font-medium text-text-primary">ประสบการณ์ใช้งาน</td>
              <td class="w-1/3 p-6 text-center font-medium text-text-secondary">มีโฆษณาสนับสนุน</td>
              <td class="w-1/3 p-6 text-center font-bold text-primary">ไม่มีโฆษณา 100%</td>
            </tr>

          </tbody>
        </table>
      </div>

      <div class="mt-10 text-sm font-medium text-text-muted">
        สามารถยกเลิกแพ็กเกจได้ทุกเมื่อ · ไม่มีค่าใช้จ่ายแอบแฝง
      </div>
    </section>
  </div>
</template>