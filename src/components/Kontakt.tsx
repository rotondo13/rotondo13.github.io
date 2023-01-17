import '../App.css';
import MyComponent from './Map'


export default function Kontakt() {
    return (
        <div className="Kontakt">
            <p> Sie erreichen uns telefonisch unter <b>00000000</b> oder schicken Sie uns eine Mail an <b>00000000</b> </p>
            <p> Name <br />
                Straße. Nr. <br />
                PLZ Ort
            </p>
            <MyComponent />
        </div>
    )
}