<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-[Prompt]">
    <!-- Page Header -->
    <div class="mx-auto max-w-6xl px-8 py-6">
      <div class="flex items-center gap-2">


      </div>
    </div>

    <!-- Pricing -->
    <section class="mx-auto max-w-6xl px-8 pb-12 text-center">
      <h1 class="text-5xl font-bold">
        เลือกแพ็กเกจที่เหมาะกับ<br />
        การใช้งานของคุณ
      </h1>

      <p class="mt-5 text-gray-500">
        ใช้ฟรีได้เต็มที่ หรือเลือก Premium เพื่อประสบการณ์ที่ลื่นไหลกว่า<br />
        <span class="text-blue-600">
          ไม่มีการล็อกเนื้อหา Prompt ใด ๆ ทั้งสิ้น
        </span>
      </p>

      <!-- Cards -->
      <div class="mt-12 flex flex-wrap justify-center gap-8">
        <!-- Starter -->
        <div class="relative w-[320px] rounded-2xl border border-gray-200 bg-white p-6 text-left">
          <span class="text-xs text-gray-500">STARTER</span>
          <h3 class="mt-2 text-lg font-semibold">เริ่มต้นใช้งาน</h3>

          <ul class="mt-4 space-y-2 text-sm">
            <!--แถว1-->
            <li class="flex items-center gap-3">
              <span class="h-6 w-6 text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
                  <path
                    d="M480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96L480 96zM160 144C151.2 144 144 151.2 144 160L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 160C496 151.2 488.8 144 480 144L160 144zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z" />
                </svg>
              </span>
              <span>คัดลอก Prompt ได้ไม่จำกัด</span>
            </li>

            <!--แถว2-->
            <li class="flex items-center gap-3">
              <span class="h-6 w-6 text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
                  <path
                    d="M480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96L480 96zM160 144C151.2 144 144 151.2 144 160L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 160C496 151.2 488.8 144 480 144L160 144zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z" />
                </svg>
              </span>
              <span>เข้าถึงทุกหมวดในชุมชน</span>
            </li>
            
            <!--แถว3-->
            <li class="flex items-center gap-3">
              <span class="h-6 w-6 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
                  <path
                    d="M480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96L480 96zM160 144C151.2 144 144 151.2 144 160L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 160C496 151.2 488.8 144 480 144L160 144zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z" />
                </svg>
              </span>
              <span>มีโฆษณาสนับสนุน (แบบไม่กวนใจ)</span>
            </li>
           
            <!--แถว4-->
            <li class="flex items-center gap-3">
              <span class="h-7 w-7 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
                  <path
                    d="M480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96L480 96zM160 144C151.2 144 144 151.2 144 160L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 160C496 151.2 488.8 144 480 144L160 144zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z" />
                </svg>
              </span>
              <span>บันทึกรายการโปรด (Bookmark) ได้ 10 รายการ</span>
            </li>

            <!--แถว5-->
            <li class="flex items-center gap-3">
              <span class="h-6 w-6 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
                  <path
                    d="M480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96L480 96zM160 144C151.2 144 144 151.2 144 160L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 160C496 151.2 488.8 144 480 144L160 144zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z" />
                </svg>
              </span>
              <span>ค้นหาไอเดียพื้นฐาน</span>
            </li>
          </ul>

          <button class="mt-6 w-full rounded-lg border border-gray-300 py-2 text-sm hover:bg-gray-50">
            เริ่มใช้งานฟรี
          </button>
          <span class="text-gray-400 flex justify-center pt-2 gap-3 text-xs">
          ใช้งานได้จริง ไม่บังคับอัปเกรด
        </span>
        </div>

        <!-- Pro -->
        <div class="relative w-[320px] rounded-2xl border-2 border-blue-600 bg-white p-6 text-left">
          <span class="absolute -top-3 right-4 rounded-full bg-blue-600 px-3 py-1 text-xs text-white">
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

          <button class="mt-6 w-full rounded-lg bg-blue-600 py-2 text-sm text-white hover:bg-blue-700">
            อัปเกรดแพ็กเกจ
          </button>
        </div>
      </div>

      <!-- Compare table -->
      <div class="mx-auto mt-16 max-w-3xl rounded-xl border bg-white">
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
