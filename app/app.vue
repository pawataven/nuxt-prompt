<template>
  <div>
    <NuxtRouteAnnouncer />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* ปรับขนาด Scrollbar ให้กว้างขึ้น */
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background: transparent; 
}
::-webkit-scrollbar-thumb {
  background-color: #cbd5e1; 
  border-radius: 20px;

  border: 3px solid transparent; 
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #94a3b8;
}
</style>
