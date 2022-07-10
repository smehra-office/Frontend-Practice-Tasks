
const input = {
    taxi: "a car licensed to transport passengers in return for payment of a fare",
    food: {
        sushi:
            "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
        apple: {
            Honeycrisp:
                "an apple cultivar developed at the MAES Horticultural Research Center",
            Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
        },
    },
}

const ParseObjectToText = () => {
    const displayContent = parseObject(input);
    return (<div dangerouslySetInnerHTML={{ __html: displayContent }}></div>)
};

const parseObject = obj => {
    let result = '<ul style="list-style-type: none">';
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let item = `<li>${key}: ${typeof obj[key] == 'object' ? parseObject(obj[key]) : obj[key]} </li>`;

            result += item;
        }
    }
    result += '</ul>';
    return result;
};

export default ParseObjectToText;