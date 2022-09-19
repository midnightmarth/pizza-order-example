import React from "react";

export default (props) => {
    console.log(props)

    let checkboxRefs = {};
    const setRef = (node) => {
        checkboxRefs[node.value] = node;
    }

    return (<div className="order-panel">
        <h2 className="order-title">Customize Pizza</h2>
        <div className="pizza-type">
            <label className="label-type">Pizza Types</label>
            <select onChange={i => {
                i.preventDefault();
                console.log("Type Changed!", i.target.value)
                for (let ing of props.ingredients.Ingredients) {
                    if (i.target.value == -1) {
                        checkboxRefs[ing.Value].checked = false;
                        continue;
                    }
                    if (props.types[i.target.value].Ingredients.indexOf(ing.Value) !== -1) {
                        checkboxRefs[ing.Value].checked = true;
                    } else {
                        checkboxRefs[ing.Value].checked = false;
                    }
                }
                for (let t of props.toppings) {
                    if (i.target.value == -1) {
                        checkboxRefs[t.Value].checked = false;
                        continue;
                    }
                    if (props.types[i.target.value].Toppings.indexOf(t.Value) !== -1) {
                        checkboxRefs[t.Value].checked = true;
                    } else {
                        checkboxRefs[t.Value].checked = false;
                    }
                }

            }}>
                <option value={-1} key={-1}>Select Pizza Type</option>
                {props.types?.map((i, x) => {
                    return (<option value={x} key={i.Value}>{i.Name}</option>)
                })}
            </select>
        </div>
        <div className="pizza-type">
            <label className="label-type">Dough Types</label>
            <select>
                {props.ingredients?.DoughTypes?.map((i, x) => {
                    return (<option value={i.Value} key={i.Value}>{i.Name}</option>)
                })}
            </select>
        </div>
        <div className="pizza-customization">
            <div className="card">
                <label className="label-type">Ingredients</label>
                {props.ingredients?.Ingredients?.map(i => {
                    return (<label key={i.Value}>
                        <input ref={setRef} type="checkbox" value={i.Value} key={i.Value} />
                        {i.Name}
                    </label>)
                })}
            </div>
            <div className="card">
                <label className="label-type">Toppings</label>
                {props.toppings?.map(i => {
                    return (<label key={i.Value}>
                        <input ref={setRef} type="checkbox" value={i.Value} key={i.Value} />
                        {i.Name}
                    </label>)
                })}
            </div>
        </div>
    </div>)
}
