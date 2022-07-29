const setContentForDataField = function (element, contentData) {
    Object.entries(contentData).forEach(([key, value]) => {
        let rootTag = element.querySelectorAll(`[data-field=${key}]`)
        rootTag.forEach(function(e){
            e.innerText = value
        });
    });
}


setContentForDataField(
    document.getElementById('item1'),
    {
        title: 'Hello world',
        description: 'The first program'
    }
);
