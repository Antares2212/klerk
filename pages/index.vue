<template>
  <div class="lg:container mx-auto">
    <header>
      <div class="logo mb-6">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div class="nav">
        <BreadMenu :breadcrumbs="breadcrumbs" />
      </div>
    </header>
    <div class="h1">
      Подписки "Клерка"
    </div>
    <div class="main">
      <div class="tabs">
        <TabsMenu :tabs="tabs"/>
      </div>
      <div class="content w-full bg-fade-1 rounded-2xl py-12">
        <div class="title">
          Выберите рассылки, которые подходят именно вам
        </div>
        <SubscribeForm 
          :formData="formData" 
          :hadlerSubmite="hadlerSubmite"/>
        <div class="plans flex flex-wrap justify-center gap-6 p-6">
          <PlanCard 
            :cards="cards.data" 
            :subscribes="formData.subscribes"/>
        </div>
      </div>
    </div>
    <div class="footer ">
      <img class="mx-auto p-12" src="/images/footer.png" alt="">
    </div>
  </div>
</template>
<script setup>
  const formData = ref({
    email: '',
    subscribes: [
      {id: 1, status: false},
      {id: 2, status: false},
      {id: 3, status: false},
      {id: 4, status: false}
    ]
  })

  const hadlerSubmite = async (data) => {
    await $fetch('/api/subscribe', {
      method: 'post',
      body: data
    })
  }

  const breadcrumbs = [
    { text: "Главная", to: "/" },
    { text: "Рассылки", to: "/" },
    { text: "Хлебные крошки", to: "/" },
  ];

  const tabs = [
    { name: "tab1", label: "Рассылки" },
    { name: "tab2", label: "Соцсети" },
    { name: "tab3", label: "Мессенджеры" },
  ];

  const { data: cards } = await useFetch('/api/cards')
</script>
<style scoped>
  
</style>
