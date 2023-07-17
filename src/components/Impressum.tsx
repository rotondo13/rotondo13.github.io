import { useMediaQuery } from "react-responsive"

export default function Impressum () {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })

    return(
        <>
            <div className={`${isDesktopOrLaptop ? 'impressum' : 'impressum-mobile'}`}>
                <div style={{width: "70vw", textAlign: "left"}}>
                    <h1>Impressum</h1>
                    <p>
                        <b>Anbieterinformationen</b> <br />
                        <b>ha-consult - Helmut Antesberger</b> <br />
                        Bahnhofstr. 40 <br />
                        94032 Passau <br />
                        +49 (0) 851 / 37 93 41 70 <br />
                        +49 (0) 851 / 37 93 40 03 <br />
                        Email: office@ha-consult.de <br />
                        <b>Rechtliche Angaben:</b> <br />
                        Vertretungsberechtigt: Helmut Antesberger <br />
                        Inhaltlich Verantwortlicher gemäß TMG: Helmut Antesberger
                    </p>
                    <p>
                        <b>Bildquellen</b> <br />
                        130556812 - Construction. - © BillionPhotos.com <br />
                        96852855 - Scrivania d'ufficio con elaborati di progetto - © matteogirelli <br />
                        99648142 - Home project - © alphaspirit
                    </p>
                    <p>
                        <b>USt.ID.Nr.</b> gemäß § 27 a Umsatzsteuergesetz: DE250006034
                    </p>
                    <p>
                        Gewerbeerlaubnis gem. §34 c GewO wurde erteilt durch Stadt Passau <br />
                        Aufsichtsbehörde: IHK für München und Oberbayern, Max-Joseph-Straße 2, 80333 München
                    </p>
                    <p>
                        <b>Hinweis auf EU-Streitschlichtung</b> <br />
                        Zur außergerichtlichen Beilegung von verbraucherrechtlichen Streitigkeiten hat die Europäische Union eine Online-Plattform 
                        (“OS-Plattform”) eingerichtet, an die Sie sich wenden können. Die Plattform finden Sie unter http://ec.europa.eu/consumers/odr/. 
                        Unsere Emailadresse lautet: office@ha-consult.de
                    </p>
                    <p>
                        <b>Disclaimer – rechtliche Hinweise</b> <br />
                        <b>§ 1 Warnhinweis zu Inhalten</b> <br />
                        Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser 
                        Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen 
                        journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht 
                        immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei 
                        Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters. <br />
                        <b>§ 2 Externe Links</b> <br />
                        Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen 
                        Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige 
                        Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die 
                        aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, 
                        dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen 
                        Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden 
                        jedoch derartige externe Links unverzüglich gelöscht. <br />
                        <b>§ 3 Urheber- und Leistungsschutzrechte</b> <br />
                        Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen 
                        Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder 
                        jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. 
                        Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als 
                        solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet 
                        und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch 
                        ist erlaubt. <br />
                        Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig. <br />
                        <b>§ 4 Besondere Nutzungsbedingungen</b> <br />
                        Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender 
                        Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
                    </p>
                </div>
            </div>
        </>
    )
}