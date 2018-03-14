export default {
  header: 'Select',
  headerText: 'Поля компонента _Select_ используются для сбора предоставленной пользователем информации из списка параметров.',
  components: ['v-select'],
  supplemental: ['MaskTable'],
  examples: [{
    light: {
      header: 'Светлая тема',
      desc: 'Стандартный одиночный _select_ имеет множество параметров конфигурации.'
    },
    icons: {
      header: 'Иконки',
      desc: 'Используйте свою или добавленную иконку.'
    },
    multiple: {
      header: 'Множественный select',
      desc: 'Multi-select может использовать `v-chip` для отображения выбранных элементов.'
    },
    autocomplete: {
      header: 'Автозаполнение',
      desc: 'Обеспечивает функциональность автозаполнения при наборе символов.'
    },
    customFilter: {
      header: 'Пользовательский фильтр на автозаполнении',
      desc: 'свойство `filter` используется для фильтрации каждого отдельного элемента с пользовательской логикой, в этом примере мы фильтруем элементы по имени'
    },
    scopedSlots: {
      header: 'Слоты с расширенными возможностями',
      desc: 'С мощью слотов с областью действия вы можете настроить визуальный вывод _select_. В этом примере мы добавляем изображение профиля как для chips, так и для элементов списка.'
    },
    customTextAndValue: {
      header: 'Настроенный текст и значение элемента',
      desc: 'Вы можете указать конкретные свойства в вашем массиве элементов, соответствующие полям текста и значения. По умолчанию это **текст** и **значение**. В этом примере мы также используем свойство `return-object`, которое вернет весь объект выбранного элемента при выборе.'
    },
    tags: {
      header: 'Теги',
      desc: 'С помощью тегов вы можете разрешить пользователю создавать новые значения, которые могут отсутствовать в списке предоставленных элементов. Имейте в виду, что теги поддерживают только массивы **примитивных** элементов и не могут использоваться с реквизитами, такими как `item-text`, `item-value` например.'
    },
    asynchronous: {
      header: 'Асинхронные элементы',
      desc: 'Иногда вам приходится загружать данные извне на основе поискового запроса. Используйте опцию `search-input` с модификатором **.sync** при использовании `autocomplete`. Мы также используем новую опцию `cache-items`. Это сохранит уникальный список всех элементов, которые были переданы в `items`, и **НЕОБХОДИМЫ** при использовании асинхронных элементов и **multiple**.'
    }
  }],
  props: {
    attach: 'Mixins.Detachable.props.attach',
    autocomplete: 'Фильтрация элементов в списке на основе ввода пользователем',
    browserAutocomplete: 'Установите свойство автозаполнения для поискового ввода при использовании свойства **autocomplete**',
    cacheItems: ' Сохраняет локальную копию всех элементов, прошедших через свойство **items**.',
    chips: 'Изменяет отображение выбранных _chips_',
    combobox: 'Единственный вариант выбора **tags**',
    contentClass: 'Mixins.Detachable.props.contentClass',
    debounceSearch: 'Дескриптор выбранного входного значения поиска',
    deletableChips: 'Добавляет значок удаления в выбранный _chips_',
    dense: 'Уменьшает максимальную высоту элементов списка',
    disabled: 'Отключает ввод',
    editable: 'Создает редактируемую кнопку - [спецификация](https://material.io/guidelines/components/buttons.html#buttons-dropdown-buttons)',
    filter: 'Функция, используемая для фильтрации элементов',
    hideSelected: 'Не отображать в элементах _select_ , которые уже выбраны',
    itemAvatar: 'Установить свойству **items** значение аватара',
    itemDisabled: 'Установить свойству **items** отключено',
    itemText: 'Установить свойству **items** значение text',
    itemValue: 'Установить свойству **items** значение',
    items: 'Может быть массив объектов или массив строк. При использовании объектов будет искать поле текста и значения. Это можно изменить с помощью **item-text** и **item-value** свойств.',
    minWidth: 'Mixins.Menuable.props.minWidth',
    multiple: 'Множественные изменения _select_. Принимает массив для значения',
    multiLine: 'Заставляет ярлык плавать, когда выбранный компонент сфокусирован или нет',
    noDataText: 'Отображать текст, когда нет данных',
    openOnClear: 'При использовании свойства **clearable** , после очистки, меню выбора будет либо открыто, либо оставаться открытым, в зависимости от текущего состояния',
    overflow: 'Создает кнопку переполнения - [спец.](https://material.io/guidelines/components/buttons.html#buttons-dropdown-buttons)',
    returnObject: 'Изменяет поведение выбора, чтобы вернуть объект напрямую, а не значение, указанное с помощью значения **item-value**',
    searchInput: 'При использовании свойства автозаполнения. Используйте модификатор **.sync**, чтобы отлавить пользовательский ввод из ввода автозаполнения',
    segmented: 'Создает сегментированную кнопку - [спец.](https://material.io/guidelines/components/buttons.html#buttons-dropdown-buttons)',
    tags: 'Функция тегов позволяет пользователю создавать новые значения, недоступные из **items**',
    valueComparator: ''
  },
  slots: {
    item: 'Область видимости для обозначения разметки для list-tile',
    'no-data': 'Mixins.Filterable.slots.noData',
    selection: 'Область видимости для обозначения разметки для выбранных элементов'
  },
  scopedSlots: {
    item: 'Определить внешний вид элемента',
    selection: 'Определить внешний вид пользовательского выбора'
  },
  events: {
    change: 'Mixins.Input.events.change',
    'update:error': 'Mixins.Input.events.update:error',
    'update:searchInput': '`search-input.sync` событие'
  }
}
