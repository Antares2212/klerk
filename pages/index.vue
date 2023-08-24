<template>
  <div class="lg:container mx-auto">
    <div class="header mt-12 flex flex-col items-center text-center mb-6">
      <div class="logo mb-6">
        <img src="images/logo.png" alt="logo" />
      </div>
      <div class="nav">
        <BreadMenu :breadcrumbs="breadcrumbs" />
      </div>
    </div>
    <div class="title md:max-lg:text-6xl font-medium text-center mb-6 sm:text-[32px]">Подписки "Клерка"</div>
    <div class="main">
      <div class="tabs">
        <TabsMenu :tabs="tabs">
          <template v-for="tab in tabs" :slot="tab.name" :key="tab.name">
            <div>{{ tab.content }}</div>
          </template>
        </TabsMenu>
      </div>
      <div class="content w-full bg-bg-fade rounded-2xl py-12">
        <div class="title text-center text-2xl font-medium mb-6">
          Выберите рассылки, которые подходят именно вам
        </div>
        <form class="mx-auto w-11/12 mb-4">
          <div class="flex relative">
            <input class="flex w-full mx-auto mb-6 p-4 rounded-l-[8px] rounded-r-[100px]" type="email" name="email" v-model="formData.email" placeholder="Электронная почта">
            <button class="absolute right-0 px-8 py-4 bg-primary rounded-full text-bg-lihgt" type="submit">Подписаться</button>
          </div>
          <label for="toggle" class="flex items-center cursor-pointer">
            <div class="relative">
              <input v-model="formData.subscribe" type="checkbox" id="toggle" class="sr-only toggle-checkbox">
              <div class="block bg-stroke w-8 h-4 rounded-full"></div>
              <div class="dot absolute left-px top-px bg-bg-lihgt w-3.5 h-3.5 rounded-full transition"></div>
            </div>
            <div class="ml-3 font-normal">Подписаться на все рассылки</div>
          </label>
        </form>
        <div class="plans flex flex-wrap justify-center gap-6 p-6">
          <PlanCard :cards="cards"/>
        </div>
      </div>
    </div>
    <div class="footer ">
      <img class="mx-auto p-12" src="images/footer.png" alt="">
    </div>
  </div>
</template>
<script setup>
const formData = ref({
  email: '',
  subscribe: false
})
const breadcrumbs = [
  { text: "Главная", to: "/" },
  { text: "Рассылки", to: "/" },
  { text: "Хлебные крошки", to: "/" },
];

const tabs = [
  { name: "tab1", label: "Рассылки", content: "Рассылки" },
  { name: "tab2", label: "Соцсети", content: "This is tab 2 content" },
  { name: "tab3", label: "Мессенджеры", content: "This is tab 3 content" },
];

const cards = [
  { 
    name: 'Перед рассветом', 
    title: 'Утренний бухгалтер', 
    description: 'Самые важные новости и события за день. Кратко, по делу, структурировано.',
    options: [
      'Новости для бухгалтеров, ИП и директора',
      'Подборка статей за день'
    ],
    switch: 'Уже получает 59 342 человек',
    image: 'images/card1.png'
  },
  { 
    name: 'После заката', 
    title: 'Ночной бухгалтер', 
    description: 'Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.',
    options: [
      'Анализ, оценка и только самое главное',
      'Лучшие комменты юзеров в обзоре'
    ],
    switch: 'Уже получает 37 480 человек',
    image: 'images/card2.png'
  },
  { 
    name: 'Раз в две недели', 
    title: 'Ножницы скидок', 
    description: 'Подборка самых выгодных и полезных спецпредложений от надежных компаний.',
    options: [
      'Акции и скидки от лидеров рынка',
      'Те, кто подписался – экономят много денег '
    ],
    switch: 'Уже получает 92 118 человек',
    image: 'images/card3.png'
  },
  { 
    name: 'По мере появления анонсов', 
    title: 'Чемодан вебинаров', 
    description: 'Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.',
    options: [
      'Никогда не пришлем платные вебинары',
      'Подборка топовых тем для вебинаров'
    ],
    switch: 'Уже получает 92 082 человек',
    image: 'images/card4.png'
  },
]
</script>
<style scoped>
  .toggle-checkbox:checked + .dot {
    transform: translateX(6px);
    background-color: #48bb78;
  }
</style>
