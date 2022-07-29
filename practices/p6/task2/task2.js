function createAndAppendTag(node, tag) {
    let sub = document.createElement(tag)
    node.append(sub)
    return sub
}

function renderArrayAsList(node, arr) {
    if (!arr.length) Error("Empty array")
    if (!node) throw Error("Empty node")

    let ul = createAndAppendTag(node, "ul")
    let li = null

    arr.forEach(elem => {
        if (typeof elem == "string") {
            li = createAndAppendTag(ul, "li")
            li.textContent = elem
        }
        else {
            if (!li) li = createAndAppendTag(ul, "li")
            renderArrayAsList(li, elem)
        }
    })
}

const nestedList = ["Item", ["Item2", ["Item3"]]];
const rootNode = document.querySelector("div.array")

renderArrayAsList(rootNode, nestedList)





// < ul >
// < li > Item < /li>
// <ul>
//     <li>Item2</li>
//     <ul>
//         <li>Item3</li>
//     </ul>
// </ul>
// </ul>