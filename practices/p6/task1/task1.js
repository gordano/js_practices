const parseTemplate = function (element, contextData) {
    Object.entries(contextData).forEach(([key, value]) => {
        let rootTag = element.querySelectorAll(`[data-field=${key}]`)
        rootTag.forEach(function(e){
            e.innerText = value
        });
    });
}


parseTemplate(
    document.getElementById('item1'),
    {
        title: 'Hello world',
        description: 'The first program'
    }
);
