import Popup from "reactjs-popup";
import contact from '../media/contact.svg';
import { GrMailOption, GrLocation } from "react-icons/gr";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export default function Home () {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
           window.removeEventListener("scroll", listenToScroll);
      }, [])

      const listenToScroll = () => {
        let heightToHideFrom = 1;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;
      
        if (winScroll > heightToHideFrom) {
           isVisible &&      // to limit setting state only the first time
             setIsVisible(false);
        } else {
             setIsVisible(true);
        }
      };

    return(
        <>
        <div className='Content'>
          <span style={{color: "#11009E", fontSize: "50px"}}>Hier entsteht eine neue Webseite!</span>
          {/* <nav className="sidebar">
          <ul>
            <li>
              <Popup trigger={<img src={contact} alt="contact" style={{ height: "30px", cursor: "pointer" }} />} position="left center">
                <div>Rotondo Consulting <br></br> Richard-Strauss-Ring 30A, 94060 Pocking <br></br> <a href="tel:085137934170">0151 24295945</a> <br></br> <a href="mailto:mail@rotondo-consulting.de">mail@rotondo-consulting.de</a></div>
              </Popup>
            </li>
          </ul>
            </nav> */}
        </div>
        {/* <div className={`${isDesktopOrLaptop ? 'container' : 'container-mobile'}`}>
          {isDesktopOrLaptop && <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <div style={{display: "block"}}>
            <h1>Professionelle Baubetreuung von A-Z</h1></div>
          </div>}
          {isTabletOrMobile && <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <div style={{display: "block"}}>
            <h1>Professionelle Baubetreuung <br></br>von A-Z</h1></div>
          </div>}
          <div className="content">
            {isDesktopOrLaptop && <p id="picSection">
            </p>}
            {isTabletOrMobile && <p id="picSection">
            </p>}
            <p id={`${isDesktopOrLaptop ? 'leftSection' : 'mobileSection'}`}>
                <h3>Projektmanagement</h3>
                <hr style={{ border: "1px solid #A89870"}}></hr>
                Wir sind ein erfahrener Projektsteuerer und Baumanager, der komplexe Immobilien- und Bauvorhaben erfolgreich und termingerecht abschließt. 
                Unsere bewährte Vorgehensweise beinhaltet eine strukturierte Dokumenten- und Informationsverwaltung, eine integrierte Projektkommunikation, 
                lückenlose Protokollierung und zentrale Dokumentation aller Aktivitäten sowie effizientes Baucontrolling. Durch diese Maßnahmen erreichen 
                wir eine hohe Transparenz und Entscheidungsqualität.
            </p>
            <p id={`${isDesktopOrLaptop ? 'rightSection' : 'mobileSection'}`}>
                <h3>Projektentwicklung</h3>
                <hr style={{ border: "1px solid #A89870"}}></hr>
                Wir entwickeln Ideen für Ihre Grundstücke und Bauvorhaben, die sich an den möglichen Markt- und Nutzungsverhältnissen orientieren - 
                unabhängig davon, ob es sich um brachliegende Bahn- oder Industrieareale oder städtische Quartiere handelt. 
                Anschließend erarbeiten wir eine marktgerechte Standortentwicklung und unterstützen bei der Investorenansprache. 
                Wir stimmen die ausgearbeiteten Konzepte mit den Zielen und Vorgaben der Interessenten ab und realisieren das erforderliche Baurecht für Sie.
            </p>
            <p id={`${isDesktopOrLaptop ? 'leftSection' : 'mobileSection'}`}>
                <h3>Bauüberwachung</h3>
                <hr style={{ border: "1px solid #A89870"}}></hr>
                Wir unterstützen Sie bei Ihrem Bau- oder Sanierungsvorhaben von der Planung bis zur Abnahme des Objekts mit einem 5-Phasen-Check. 
                Unsere Stichproben-Prüfungen spüren Mängel auf, um eine hohe Bauqualität zu sichern und Kosten durch sofortiges Beseitigen zu vermeiden. 
                Wir dokumentieren einheitlich während jeder Bauphase und verwenden dabei neueste Technik. Vertrauen Sie auf unsere langjährige Erfahrung 
                und die Sicherung Ihres Bauvorhabens durch ein geprüftes Nachunternehmensverfahren.
            </p>
            <p id={`${isDesktopOrLaptop ? 'rightSection' : 'mobileSection'}`}>
                <h3>Controlling Plus</h3>
                <hr style={{ border: "1px solid #A89870"}}></hr>
                Wir bieten professionelle Unterstützung beim Controlling von Terminen und Kosten für Ihr Bauvorhaben. Mit dem Controlling PLUS erstellen 
                wir Kontrollberichte des tatsächlichen Verlaufs im Vergleich zu den Vorgaben der Projektleitung und übernehmen die Bauüberwachung vor Ort 
                für Sie. So begleiten Sie als Bauherr das Projekt intensiv in der Leitungsfunktion.
            </p>
            <p id={`${isDesktopOrLaptop ? 'leftSection' : 'mobileSection'}`}>
                <h3>Wertermittlung</h3>
                <hr style={{ border: "1px solid #A89870"}}></hr>
                Wir analysieren Ihre Immobilie und erstellen einen detaillierten Fehlerbericht. Anschließend entwickeln wir einen Maßnahmenkatalog, 
                der den Umfang notwendiger Renovierungen aufzeigt. So können wir Ihnen schon vorab die Umbaukosten benennen. Wenn Sie planen Ihr Haus zu 
                verkaufen, erstellen wir Ihnen gerne ein Gutachten zur Gebäudebewertung mit dem aktuellen Verkehrswert und einem Überblick der Marktsituation.
            </p>
          </div> */}
          
          {/* </div> */}
        </>
    )
}