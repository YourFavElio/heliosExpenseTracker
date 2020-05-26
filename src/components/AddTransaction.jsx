import React, {useState} from 'react'

function AddTransaction() {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    return (
        <div>
            <h3>Aggiungi Transazioni</h3>
            <form id="form">
            <div className="form-control">
                <label htmlFor="text">Nota</label>
                {/* onChange funzione che prende in input event ed aggiorna il valore di text, tramite funzione setText*/}
                <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder="Inserisci una nota..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Spesa <br />
                (negative - expense, positive - income)</label>

                <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn">Aggiungi transazione</button>
            </form>
        </div>
    )
}

export default AddTransaction;
