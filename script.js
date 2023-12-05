let tags = {
    'doctype': '<!DOCTYPE> - Объявляет тип документа и предоставляет основную информацию для браузера — его язык и версия.',
    'a': '<a> - Создаёт гипертекстовые ссылки.',
    'abbr': '<abbr> - Определяет текст как аббревиатуру или акроним. Поясняющий текст задаётся с помощью атрибута title.',
    'address': '<address> - Задает контактные данные автора/владельца документа или статьи. Отображается в браузере курсивом.',
    'area': '<area> - Представляет собой гиперссылку с текстом, соответствующей определенной области на карте-изображении или активную область внутри карты-изображения. Всегда вложен внутрь элемента <map>.',
    'article': '<article> - Раздел контента, который образует независимую часть документа или сайта, например, статья в журнале, запись в блоге, комментарий.',
    'aside': '<aside> - Представляет контент страницы, который имеет косвенное отношение к основному контенту страницы/сайта.',
    'audio': '<audio> - Загружает звуковой контент на веб-страницу.',
    'b': '<b> - Задает полужирное начертание отрывка текста, не придавая акцент или важность выделенному.',
    'base': '<base> - Задает базовый адрес (URL), относительно которого вычисляются все относительные адреса. Это поможет избежать проблем при переносе страницы в другое место, так как все ссылки будут работать, как и прежде.',
    'bdi': '<bdi> - Изолирует отрывок текста, написанный на языке, в котором чтение текста происходит справа налево, от остального текста.',
    'bdo': '<bdo> - Отображает текст в направлении, указанном в атрибуте dir, переопределяя текущее направление написания текста.',
    'blockquote:': '<blockquote> - Выделяет текст как цитату, применяется для описания больших цитат.',
    'body': '<body> - Представляет тело документа (содержимое, не относящееся к метаданным документа).',
    'br': '<br> - Перенос текста на новую строку.',
    'button': '<button> - Создает интерактивную кнопку. Элемент может содержать текст или изображение.',
    'canvas': '<canvas> - Холст-контейнер для динамического отображения изображений, таких как простые изображения, диаграммы, графики и т.п. Для рисования используется скриптовый язык JavaScript.',
    'caption:': '<caption> - Добавляет подпись к таблице. Вставляется сразу после открывающего тега <table>.',
    'cite': '<cite> - Используется для указания источника цитирования. Отображается курсивом.',
    'del': '<del> - Помечает текст как удаленный, перечёркивая его.',
    'div': '<div> - Элемент-контейнер для разделов HTML-документа. Используется для группировки блочных элементов с целью форматирования стилями.',
    'footer': '<footer> - Определяет завершающую область (нижний колонтитул) документа или раздела.',
    'form': '<form> - Форма для сбора и отправки на сервер информации от пользователей. Не работает без атрибута action.',
    'h1': '<h1-h6> - Создают заголовки шести уровней для связанных с ними разделов.',
    'h2': '<h1-h6> - Создают заголовки шести уровней для связанных с ними разделов.',
    'h3': '<h1-h6> - Создают заголовки шести уровней для связанных с ними разделов.',
    'h4': '<h1-h6> - Создают заголовки шести уровней для связанных с ними разделов.',
    'h5': '<h1-h6> - Создают заголовки шести уровней для связанных с ними разделов.',
    'h6': '<h1-h6> - Создают заголовки шести уровней для связанных с ними разделов.',
    'head': '<head> - Элемент-контейнер для метаданных HTML-документа, таких как <title>, <meta>, <script>, <link>, <style>.',
    'header': '<header> -	Секция для вводной информации сайта или группы навигационных ссылок. Может содержать один или несколько заголовков, логотип, информацию об авторе.',
    'hr': '<hr> - Горизонтальная линия для тематического разделения параграфов.',
    'html': '<html> - Корневой элемент HTML-документа. Сообщает браузеру, что это HTML-документ. Является контейнером для всех остальных html-элементов.',
    'i': '<i> - Выделяет отрывок текста курсивом, не придавая ему дополнительный акцент.',
    'iframe': '<iframe> - Создает встроенный фрейм, загружая в текущий HTML-документ другой документ.',
    'img': '<img> - Встраивает изображения в HTML-документ с помощью атрибута src, значением которого является адрес встраиваемого изображения.',
    'input': '<input> - Создает многофункциональные поля формы, в которые пользователь может вводить данные.',
    'label': '<label> - Добавляет текстовую метку для элемента <input>.',
    'legend': '<legend> - Заголовок элементов формы, сгруппированных с помощью элемента <fieldset>.',
    'li': '<li> - Элемент маркированного или нумерованного списка.',
    'link': '<link> - Определяет отношения между документом и внешним ресурсом. Также используется для подключения внешних таблиц стилей.',
    'main': '<main> - Контейнер для основного уникального содержимого документа. На одной странице должно быть не более одного элемента <main>.',
    'nav': '<nav> - Раздел документа, содержащий навигационные ссылки по сайту.',
    'noscript': '<noscript> - Определяет секцию, не поддерживающую сценарий (скрипт).',
    'ol': '<ol> - Упорядоченный нумерованный список. Нумерация может быть числовая или алфавитная.',
    'option': '<option> - Определяет вариант/опцию для выбора в раскрывающемся списке <select>, <optgroup> или <datalist>.',
    'p': '<p> - Параграфы в тексте.',
    'q': '<q> - Определяет краткую цитату.',
    'script': '<script> - Используется для определения сценария на стороне клиента (обычно JavaScript). Содержит либо текст скрипта, либо указывает на внешний файл сценария с помощью атрибута src.',
    'section': '<section> - Определяет логическую область (раздел) страницы, обычно с заголовком.',
    'span': '<span> - Контейнер для строчных элементов. Можно использовать для форматирования отрывков текста, например, выделения цветом отдельных слов.',
    'style': '<style> - Подключает встраиваемые таблицы стилей.',
    'table': '<table> - Элемент для создания таблицы.',
    'tbody': '<tbody> - Определяет тело таблицы.',
    'td': '<td> - Создает ячейку таблицы.',
    'textarea': '<textarea> - Создает большие поля для ввода текста.',
    'tfoot': '<tfoot> - Определяет нижний колонтитул таблицы.',
    'th': '<th> - Создает заголовок ячейки таблицы.',
    'thead': '<thead> - Определяет заголовок таблицы.',
    'time': '<time> - Определяет дату/время.',
    'title': '<title> - Заголовок HTML-документа, отображаемый в верхней части строки заголовка браузера. Также может отображаться в результатах поиска, поэтому это следует принимать во внимание предоставление названия.',
    'tr': '<tr> - Создает строку таблицы.',
    'ul': '<ul> - Создает маркированный список.'
}

let input = document.querySelector('.block input');
let p = document.querySelector('.block p');

input.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
        let tagName = input.value.trim().toLowerCase();
        if (tags.hasOwnProperty(tagName)) {
            p.textContent = tags[tagName];
        }
    }
})

