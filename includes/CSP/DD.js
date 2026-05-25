// includes/CSP/DD.js
// Source : formation-civique.interieur.gouv.fr — liste officielle CSP

export const questionsCSP_DD = [
    {
        id: "CSP-DD-1",
        question: { fr: "Comment s'appelle la Constitution actuelle de la France ?", geo: "რა ჰქვია საფრანგეთის ამჟამინდელ კონსტიტუციას?" },
        options: [
            { text: { fr: "La Constitution de la Ve République, adoptée en 1958", geo: "მე-5 რესპუბლიკის კონსტიტუცია, მიღებული 1958 წელს" }, isCorrect: true },
            { text: { fr: "La Charte des libertés fondamentales de 1946", geo: "1946 წლის ძირითად თავისუფლებათა ქარტია" }, isCorrect: false },
            { text: { fr: "Le Code civil napoléonien de 1804", geo: "1804 წლის ნაპოლეონის სამოქალაქო კოდექსი" }, isCorrect: false },
            { text: { fr: "La Déclaration des droits de l'homme de 1789", geo: "1789 წლის ადამიანის უფლებათა დეკლარაცია" }, isCorrect: false }
        ],
        remark: { fr: "« La Constitution de la Ve République, adoptée par référendum le 4 octobre 1958, est le texte fondamental qui organise les pouvoirs de l'État français et garantit les droits et libertés des citoyens. »", geo: "« მე-5 რესპუბლიკის კონსტიტუცია, მიღებული რეფერენდუმით 1958 წლის 4 ოქტომბერს, არის ფუნდამენტური ტექსტი, რომელიც აწყობს საფრანგეთის სახელმწიფოს უფლებამოსილებებს და იძლევა მოქალაქეთა უფლებებისა და თავისუფლებების გარანტიას. »" }
    },
    {
        id: "CSP-DD-2",
        question: { fr: "Comment s'appelle le texte qui énonce les droits et devoirs des personnes résidant en France ?", geo: "რა ჰქვია ტექსტს, რომელიც განსაზღვრავს საფრანგეთში მცხოვრები ადამიანების უფლებებსა და მოვალეობებს?" },
        options: [
            { text: { fr: "La Déclaration des droits de l'homme et du citoyen", geo: "ადამიანისა და მოქალაქის უფლებათა დეკლარაცია" }, isCorrect: true },
            { text: { fr: "Le traité de l'Union européenne", geo: "ევროკავშირის ხელშეკრულება" }, isCorrect: false },
            { text: { fr: "Le Code pénal français", geo: "საფრანგეთის სისხლის სამართლის კოდექსი" }, isCorrect: false },
            { text: { fr: "La Charte de l'ONU", geo: "გაეროს ქარტია" }, isCorrect: false }
        ],
        remark: { fr: "« La Déclaration des droits de l'homme et du citoyen de 1789, intégrée au bloc de constitutionnalité, proclame les droits naturels et imprescriptibles de tout individu ainsi que ses devoirs envers la société. »", geo: "« ადამიანისა და მოქალაქის უფლებათა დეკლარაცია 1789 წლიდან, კონსტიტუციური ბლოკის ნაწილი, აცხადებს ყველა ადამიანის ბუნებრივ და ხელშეუვალ უფლებებს, ასევე მის ვალდებულებებს საზოგადოების წინაშე. »" }
    },
    {
        id: "CSP-DD-3",
        question: { fr: "Concernant les droits individuels, quelle proposition est correcte ?", geo: "ინდივიდუალურ უფლებებთან დაკავშირებით, რომელი განცხადებაა სწორი?" },
        options: [
            { text: { fr: "Ils sont garantis par la Constitution et la Déclaration des droits de l'homme de 1789", geo: "ისინი გარანტირებულია კონსტიტუციით და 1789 წლის ადამიანის უფლებათა დეკლარაციით" }, isCorrect: true },
            { text: { fr: "Ils ne s'appliquent qu'aux citoyens français de naissance", geo: "ისინი ვრცელდება მხოლოდ დაბადებით საფრანგეთის მოქალაქეებზე" }, isCorrect: false },
            { text: { fr: "Ils peuvent être retirés par décision du gouvernement à tout moment", geo: "მათი გაუქმება შეიძლება ნებისმიერ დროს მთავრობის გადაწყვეტილებით" }, isCorrect: false },
            { text: { fr: "Ils ne concernent que les droits politiques et non les droits sociaux", geo: "ისინი მხოლოდ პოლიტიკურ უფლებებს ეხება და არა სოციალურ უფლებებს" }, isCorrect: false }
        ],
        remark: { fr: "« Les droits individuels, inscrits dans la Constitution de 1958 et la Déclaration de 1789, s'appliquent à toute personne résidant sur le territoire français, quelle que soit sa nationalité. »", geo: "« ინდივიდუალური უფლებები, ჩაწერილი 1958 წლის კონსტიტუციაში და 1789 წლის დეკლარაციაში, ვრცელდება საფრანგეთის ტერიტორიაზე მცხოვრებ ნებისმიერ პირზე, მიუხედავად მისი მოქალაქეობისა. »" }
    },
    {
        id: "CSP-DD-4",
        question: { fr: "De quelle année date la Déclaration des droits de l'homme et du citoyen ?", geo: "რომელ წელს დაიწერა ადამიანისა და მოქალაქის უფლებათა დეკლარაცია?" },
        options: [
            { text: { fr: "De 1789", geo: "1789 წელს" }, isCorrect: true },
            { text: { fr: "De 1793", geo: "1793 წელს" }, isCorrect: false },
            { text: { fr: "De 1804", geo: "1804 წელს" }, isCorrect: false },
            { text: { fr: "De 1848", geo: "1848 წელს" }, isCorrect: false }
        ],
        remark: { fr: "« La Déclaration des droits de l'homme et du citoyen a été adoptée le 26 août 1789 par l'Assemblée nationale constituante, lors de la Révolution française. Elle reste un texte fondateur de la République. »", geo: "« ადამიანისა და მოქალაქის უფლებათა დეკლარაცია მიღებულ იქნა 1789 წლის 26 აგვისტოს საკონსტიტუციო ეროვნული ასამბლეის მიერ, საფრანგეთის რევოლუციის დროს. ის რჩება რესპუბლიკის ფუნდამენტურ ტექსტად. »" }
    },
    {
        id: "CSP-DD-5",
        question: { fr: "Lequel de ces droits est un droit fondamental ?", geo: "ამ უფლებებიდან რომელი არის ფუნდამენტური უფლება?" },
        options: [
            { text: { fr: "La liberté d'expression", geo: "გამოხატვის თავისუფლება" }, isCorrect: true },
            { text: { fr: "Le droit de ne jamais être jugé", geo: "არასოდეს სასამართლოში წარდგენის უფლება" }, isCorrect: false },
            { text: { fr: "Le droit d'entrer dans n'importe quel pays sans visa", geo: "ნებისმიერ ქვეყანაში ვიზის გარეშე შესვლის უფლება" }, isCorrect: false },
            { text: { fr: "Le droit de ne pas payer d'impôts", geo: "გადასახადების გადაუხდელობის უფლება" }, isCorrect: false }
        ],
        remark: { fr: "« La liberté d'expression est un droit fondamental garanti par l'article 11 de la Déclaration de 1789. Elle s'exerce dans le respect de la loi et des droits d'autrui. »", geo: "« გამოხატვის თავისუფლება არის ფუნდამენტური უფლება, გარანტირებული 1789 წლის დეკლარაციის მე-11 მუხლით. ის ხორციელდება კანონის და სხვათა უფლებების დაცვით. »" }
    },
    {
        id: "CSP-DD-6",
        question: { fr: "Parmi ces textes, lequel garantit les droits et libertés en France ?", geo: "ამ ტექსტებიდან რომელი იძლევა უფლებებისა და თავისუფლებების გარანტიას საფრანგეთში?" },
        options: [
            { text: { fr: "La Constitution de 1958 et la Déclaration des droits de l'homme et du citoyen de 1789", geo: "1958 წლის კონსტიტუცია და 1789 წლის ადამიანისა და მოქალაქის უფლებათა დეკლარაცია" }, isCorrect: true },
            { text: { fr: "Le traité de Versailles de 1919", geo: "1919 წლის ვერსალის ხელშეკრულება" }, isCorrect: false },
            { text: { fr: "Le Code civil de 1804 uniquement", geo: "მხოლოდ 1804 წლის სამოქალაქო კოდექსი" }, isCorrect: false },
            { text: { fr: "La Charte de l'ONU de 1945", geo: "1945 წლის გაეროს ქარტია" }, isCorrect: false }
        ],
        remark: { fr: "« Le bloc de constitutionnalité, qui comprend la Constitution de 1958, la Déclaration de 1789 et le Préambule de 1946, forme l'ensemble des textes garantissant les droits et libertés fondamentaux en France. »", geo: "« კონსტიტუციური ბლოკი, რომელიც მოიცავს 1958 წლის კონსტიტუციას, 1789 წლის დეკლარაციას და 1946 წლის პრეამბულას, ქმნის ტექსტების ერთობლიობას, რომელიც საფრანგეთში ფუნდამენტური უფლებებისა და თავისუფლებების გარანტიას იძლევა. »" }
    },
    {
        id: "CSP-DD-7",
        question: { fr: "Qu'est-ce que la liberté d'expression ?", geo: "რა არის გამოხატვის თავისუფლება?" },
        options: [
            { text: { fr: "Le droit d'exprimer ses opinions librement, dans le respect des lois", geo: "საკუთარი შეხედულებების თავისუფლად გამოხატვის უფლება, კანონების დაცვით" }, isCorrect: true },
            { text: { fr: "Le droit de tout dire sans aucune limite légale", geo: "ყველაფრის თქმის უფლება ყოველგვარი სამართლებრივი შეზღუდვის გარეშე" }, isCorrect: false },
            { text: { fr: "Un droit réservé aux journalistes et aux politiciens", geo: "ჟურნალისტებისა და პოლიტიკოსებისთვის დაცული უფლება" }, isCorrect: false },
            { text: { fr: "Le droit de ne parler qu'en français dans les espaces publics", geo: "საჯარო სივრცეში მხოლოდ ფრანგულად საუბრის უფლება" }, isCorrect: false }
        ],
        remark: { fr: "« La liberté d'expression garantit à chacun le droit d'exprimer ses idées et opinions. Elle trouve ses limites dans les lois qui répriment les injures, la diffamation et les propos haineux. »", geo: "« გამოხატვის თავისუფლება ყველას აძლევს თავისი იდეებისა და შეხედულებების გამოხატვის უფლებას. მისი საზღვრები განსაზღვრულია კანონებით, რომლებიც შეურაცხყოფას, ცილისწამებასა და სიძულვილის გამომხატველ სიტყვებს კრძალავს. »" }
    },
    {
        id: "CSP-DD-8",
        question: { fr: "Quel droit permet à une personne de se défendre devant la justice ?", geo: "რომელი უფლება აძლევს ადამიანს სასამართლოში თავის დაცვის საშუალებას?" },
        options: [
            { text: { fr: "Le droit à la défense (droit à un procès équitable)", geo: "დაცვის უფლება (სამართლიანი სასამართლო პროცესის უფლება)" }, isCorrect: true },
            { text: { fr: "Le droit d'asile politique", geo: "პოლიტიკური თავშესაფრის უფლება" }, isCorrect: false },
            { text: { fr: "La liberté de conscience", geo: "სინდისის თავისუფლება" }, isCorrect: false },
            { text: { fr: "Le droit de vote", geo: "ხმის მიცემის უფლება" }, isCorrect: false }
        ],
        remark: { fr: "« Le droit à la défense est un principe fondamental reconnu par les lois de la République. Toute personne mise en cause a le droit d'être entendue, d'être assistée d'un avocat et de bénéficier d'un procès équitable. »", geo: "« დაცვის უფლება არის რესპუბლიკის კანონებით აღიარებული ფუნდამენტური პრინციპი. ნებისმიერ ბრალდებულ პირს უფლება აქვს მოისმინონ, ჰყავდეს ადვოკატი და ისარგებლოს სამართლიანი სასამართლოს პრინციპით. »" }
    },
    {
        id: "CSP-DD-9",
        question: { fr: "Quel est le texte fondateur établissant en France les droits et les devoirs de chaque citoyen ?", geo: "რომელია საფუძვლად მყოფი ტექსტი, რომელიც საფრანგეთში თითოეული მოქალაქის უფლებებსა და მოვალეობებს ადგენს?" },
        options: [
            { text: { fr: "La Déclaration des droits de l'homme et du citoyen de 1789", geo: "1789 წლის ადამიანისა და მოქალაქის უფლებათა დეკლარაცია" }, isCorrect: true },
            { text: { fr: "La Constitution de la IVe République de 1946", geo: "1946 წლის მე-4 რესპუბლიკის კონსტიტუცია" }, isCorrect: false },
            { text: { fr: "Le traité de l'Union européenne de 1992", geo: "1992 წლის ევროკავშირის ხელშეკრულება" }, isCorrect: false },
            { text: { fr: "Le Code Napoléon de 1804", geo: "1804 წლის ნაპოლეონის კოდექსი" }, isCorrect: false }
        ],
        remark: { fr: "« La Déclaration des droits de l'homme et du citoyen de 1789 est le texte fondateur qui énonce les droits naturels et imprescriptibles (liberté, propriété, sûreté) ainsi que les devoirs civiques de chaque citoyen. »", geo: "« 1789 წლის ადამიანისა და მოქალაქის უფლებათა დეკლარაცია არის საფუძვლად მყოფი ტექსტი, რომელიც ადგენს ბუნებრივ და ხელშეუვალ უფლებებს (თავისუფლება, საკუთრება, უსაფრთხოება) და თითოეული მოქალაქის სამოქალაქო მოვალეობებს. »" }
    },
    {
        id: "CSP-DD-10",
        question: { fr: "Quel texte a été adopté pendant la Révolution française ?", geo: "რომელი დოკუმენტი იქნა მიღებული საფრანგეთის რევოლუციის დროს?" },
        options: [
            { text: { fr: "La Déclaration des droits de l'homme et du citoyen (1789)", geo: "ადამიანისა და მოქალაქის უფლებათა დეკლარაცია (1789)" }, isCorrect: true },
            { text: { fr: "Le Code civil (1804)", geo: "სამოქალაქო კოდექსი (1804)" }, isCorrect: false },
            { text: { fr: "La Constitution de la Ve République (1958)", geo: "მე-5 რესპუბლიკის კონსტიტუცია (1958)" }, isCorrect: false },
            { text: { fr: "La loi de séparation des Églises et de l'État (1905)", geo: "ეკლესიებისა და სახელმწიფოს გამიჯვნის კანონი (1905)" }, isCorrect: false }
        ],
        remark: { fr: "« La Révolution française (1789-1799) a produit plusieurs textes fondateurs, dont la Déclaration des droits de l'homme et du citoyen du 26 août 1789, qui proclame pour la première fois les libertés et droits fondamentaux. »", geo: "« საფრანგეთის რევოლუციამ (1789-1799) შეიმუშავა რამდენიმე ფუნდამენტური ტექსტი, მათ შორის 1789 წლის 26 აგვისტოს ადამიანისა და მოქალაქის უფლებათა დეკლარაცია, რომელიც პირველად აცხადებს ძირითად თავისუფლებებსა და უფლებებს. »" }
    },
    {
        id: "CSP-DD-11",
        question: { fr: "Quelle liberté permet à une personne de ne pas avoir de religion ?", geo: "რომელი თავისუფლება აძლევს ადამიანს რელიგიის არქონის უფლებას?" },
        options: [
            { text: { fr: "La liberté de conscience", geo: "სინდისის თავისუფლება" }, isCorrect: true },
            { text: { fr: "La liberté de circulation", geo: "გადაადგილების თავისუფლება" }, isCorrect: false },
            { text: { fr: "La liberté d'entreprendre", geo: "სამეწარმეო თავისუფლება" }, isCorrect: false },
            { text: { fr: "La liberté syndicale", geo: "პროფკავშირული თავისუფლება" }, isCorrect: false }
        ],
        remark: { fr: "« La liberté de conscience, garantie par la loi de 1905 sur la laïcité, signifie que chaque personne est libre d'avoir ou de ne pas avoir de religion, et que l'État ne favorise aucun culte. »", geo: "« სინდისის თავისუფლება, გარანტირებული 1905 წლის საერო სახელმწიფოს შესახებ კანონით, ნიშნავს, რომ თითოეულ ადამიანს შეუძლია ჰქონდეს ან არ ჰქონდეს რელიგია, და სახელმწიფო არცერთ კულტს არ ანიჭებს უპირატესობას. »" }
    },
    {
        id: "CSP-DD-12",
        question: { fr: "Une femme peut avorter :", geo: "ქალს შეუძლია აბორტის გაკეთება:" },
        options: [
            { text: { fr: "Jusqu'à 14 semaines de grossesse, dans le cadre légal français", geo: "ორსულობის 14 კვირამდე, საფრანგეთის სამართლებრივი ჩარჩოს ფარგლებში" }, isCorrect: true },
            { text: { fr: "Sans aucune limite de temps, à sa seule demande", geo: "ყოველგვარი დროის შეზღუდვის გარეშე, მხოლოდ მისი სურვილით" }, isCorrect: false },
            { text: { fr: "Seulement avec l'accord écrit du père de l'enfant", geo: "მხოლოდ ბავშვის მამის წერილობითი თანხმობით" }, isCorrect: false },
            { text: { fr: "Uniquement en cas de danger immédiat pour sa vie", geo: "მხოლოდ მისი სიცოცხლისთვის უშუალო საფრთხის შემთხვევაში" }, isCorrect: false }
        ],
        remark: { fr: "« En France, l'interruption volontaire de grossesse (IVG) est un droit légal garanti jusqu'à 14 semaines d'aménorrhée. Depuis 2024, ce droit est inscrit dans la Constitution française. »", geo: "« საფრანგეთში, ორსულობის ნებაყოფლობითი შეწყვეტა (IVG) არის კანონიერი უფლება, გარანტირებული 14 კვირის არარეგულარობამდე. 2024 წლიდან ეს უფლება ჩაწერილია საფრანგეთის კონსტიტუციაში. »" }
    },
    {
        id: "CSP-DD-13",
        question: { fr: "Est-il toujours possible de divorcer ?", geo: "ყოველთვის არის შესაძლებელი განქორწინება?" },
        options: [
            { text: { fr: "Oui, toute personne peut divorcer en France ; le divorce est un droit", geo: "დიახ, ნებისმიერ ადამიანს შეუძლია განქორწინება საფრანგეთში; განქორწინება არის უფლება" }, isCorrect: true },
            { text: { fr: "Non, le divorce est interdit si l'un des conjoints s'y oppose", geo: "არა, განქორწინება აკრძალულია, თუ ერთ-ერთი მეუღლე ეწინააღმდეგება" }, isCorrect: false },
            { text: { fr: "Non, il faut l'accord de l'Église catholique pour les mariages religieux", geo: "არა, რელიგიური ქორწინებისთვის საჭიროა კათოლიკური ეკლესიის თანხმობა" }, isCorrect: false },
            { text: { fr: "Seulement après 5 ans de mariage minimum", geo: "მხოლოდ ქორწინების მინიმუმ 5 წლის შემდეგ" }, isCorrect: false }
        ],
        remark: { fr: "« En France, le divorce est un droit reconnu par la loi. Plusieurs formes de divorce existent (par consentement mutuel, pour faute, etc.). Aucun accord religieux n'est requis pour un divorce civil. »", geo: "« საფრანგეთში, განქორწინება კანონით აღიარებული უფლებაა. არსებობს განქორწინების რამდენიმე ფორმა (ორმხრივი თანხმობით, ბრალის საფუძველზე და სხვ.). სამოქალაქო განქორწინებისთვის რელიგიური თანხმობა არ არის საჭირო. »" }
    },
    {
        id: "CSP-DD-14",
        question: { fr: "La peine de mort est :", geo: "სიკვდილით სასჯელი არის:" },
        options: [
            { text: { fr: "Abolie en France depuis 1981 (loi Badinter)", geo: "გაუქმებული საფრანგეთში 1981 წლიდან (ბადინტერის კანონი)" }, isCorrect: true },
            { text: { fr: "Maintenue pour les crimes terroristes uniquement", geo: "შენარჩუნებული მხოლოდ ტერორისტული დანაშაულისთვის" }, isCorrect: false },
            { text: { fr: "Abolie uniquement depuis 2004 en Europe", geo: "გაუქმებული მხოლოდ 2004 წლიდან ევროპაში" }, isCorrect: false },
            { text: { fr: "Toujours possible en cas de crime contre des mineurs", geo: "ყოველთვის შესაძლებელია არასრულწლოვნების წინააღმდეგ ჩადენილი დანაშაულის შემთხვევაში" }, isCorrect: false }
        ],
        remark: { fr: "« La peine de mort a été abolie en France par la loi du 9 octobre 1981, portée par le garde des Sceaux Robert Badinter. Cette abolition est désormais inscrite dans la Constitution française depuis 2007. »", geo: "« სიკვდილით სასჯელი საფრანგეთში გაუქმდა 1981 წლის 9 ოქტომბრის კანონით, სამართლის მინისტრ რობერ ბადინტერის ინიციატივით. ეს გაუქმება 2007 წლიდან ჩაწერილია საფრანგეთის კონსტიტუციაში. »" }
    },
    {
        id: "CSP-DD-15",
        question: { fr: "Concernant les limites aux libertés individuelles, quelle proposition est correcte ?", geo: "ინდივიდუალური თავისუფლებების შეზღუდვებთან დაკავშირებით, რომელი წინადადებაა სწორი?" },
        options: [
            { text: { fr: "Les libertés peuvent être limitées pour protéger les droits d'autrui et l'ordre public", geo: "თავისუფლებები შეიძლება შეიზღუდოს სხვათა უფლებებისა და საზოგადოებრივი წესრიგის დასაცავად" }, isCorrect: true },
            { text: { fr: "Les libertés individuelles sont absolues et ne peuvent jamais être limitées", geo: "ინდივიდუალური თავისუფლებები აბსოლუტურია და არასოდეს შეიძლება შეიზღუდოს" }, isCorrect: false },
            { text: { fr: "Seul le président de la République peut décider de limiter les libertés", geo: "მხოლოდ რესპუბლიკის პრეზიდენტს შეუძლია გადაწყვიტოს თავისუფლებების შეზღუდვა" }, isCorrect: false },
            { text: { fr: "Les libertés ne peuvent être limitées qu'en période de guerre", geo: "თავისუფლებები შეიძლება შეიზღუდოს მხოლოდ ომის პერიოდში" }, isCorrect: false }
        ],
        remark: { fr: "« L'article 4 de la Déclaration de 1789 pose que la liberté consiste à faire tout ce qui ne nuit pas à autrui. Les libertés individuelles s'exercent donc dans les limites fixées par la loi pour protéger l'ordre public et les droits d'autrui. »", geo: "« 1789 წლის დეკლარაციის მე-4 მუხლი ადგენს, რომ თავისუფლება მდგომარეობს იმის კეთებაში, რაც სხვას არ ავნებს. ინდივიდუალური თავისუფლებები ხორციელდება კანონით დადგენილ ფარგლებში საზოგადოებრივი წესრიგისა და სხვათა უფლებების დასაცავად. »" }
    },
    {
        id: "CSP-DD-16",
        question: { fr: "En France, est-ce légal d'être marié à plusieurs personnes en même temps ?", geo: "საფრანგეთში, კანონიერია თუ არა ერთდროულად რამდენიმე ადამიანზე დაქორწინება?" },
        options: [
            { text: { fr: "Non, la polygamie est strictement interdite en France", geo: "არა, პოლიგამია საფრანგეთში მკაცრად აკრძალულია" }, isCorrect: true },
            { text: { fr: "Oui, si tous les époux donnent leur consentement écrit", geo: "დიახ, თუ ყველა მეუღლე წერილობით თანხმობას იძლევა" }, isCorrect: false },
            { text: { fr: "Oui, si le mariage a été célébré légalement dans un autre pays", geo: "დიახ, თუ ქორწინება კანონიერად შედგა სხვა ქვეყანაში" }, isCorrect: false },
            { text: { fr: "Oui, pour les ressortissants de pays où la polygamie est autorisée", geo: "დიახ, იმ ქვეყნების მოქალაქეებისთვის, სადაც პოლიგამია ნებადართულია" }, isCorrect: false }
        ],
        remark: { fr: "« La polygamie est strictement interdite en France. Toute personne déjà mariée qui contracte un nouveau mariage commet le crime de bigamie, puni d'un an d'emprisonnement et de 45 000 euros d'amende. »", geo: "« პოლიგამია საფრანგეთში მკაცრად აკრძალულია. ნებისმიერი უკვე დაქორწინებული პირი, რომელიც ახალ ქორწინებას დებს, ჩადის ბიგამიის დანაშაულს, რომლისთვისაც სასჯელია ერთი წლის პატიმრობა და 45 000 ევროს ჯარიმა. »" }
    },
    {
        id: "CSP-DD-17",
        question: { fr: "Faut-il réduire ses déchets ?", geo: "უნდა შევამციროთ ნარჩენები?" },
        options: [
            { text: { fr: "Oui, c'est une obligation légale et un devoir civique pour préserver l'environnement", geo: "დიახ, ეს სამართლებრივი ვალდებულება და სამოქალაქო მოვალეობაა გარემოს დასაცავად" }, isCorrect: true },
            { text: { fr: "Non, la gestion des déchets est uniquement la responsabilité des communes", geo: "არა, ნარჩენების მართვა მხოლოდ მუნიციპალიტეტების პასუხისმგებლობაა" }, isCorrect: false },
            { text: { fr: "Seulement pour les entreprises ; les particuliers ne sont pas concernés", geo: "მხოლოდ საწარმოებისთვის; კერძო პირები ამას არ ეხება" }, isCorrect: false },
            { text: { fr: "Non, il suffit de payer sa taxe d'ordures ménagères", geo: "არა, საკმარისია საყოფაცხოვრებო ნარჩენების გადასახადის გადახდა" }, isCorrect: false }
        ],
        remark: { fr: "« La loi française impose à chaque citoyen de contribuer à la réduction des déchets, au tri sélectif et à la protection de l'environnement. Le respect de l'environnement est un devoir constitutionnel depuis la Charte de l'environnement de 2004. »", geo: "« საფრანგეთის კანონი ავალდებულებს ყველა მოქალაქეს წვლილი შეიტანოს ნარჩენების შემცირებაში, სახეობების მიხედვით დახარისხებასა და გარემოს დაცვაში. გარემოს დაცვა კონსტიტუციური მოვალეობაა 2004 წლის გარემოს ქარტიის მიღებიდან. »" }
    },
    {
        id: "CSP-DD-18",
        question: { fr: "Jeter une bouteille dans la rue est :", geo: "ქუჩაში ბოთლის გადაყრა არის:" },
        options: [
            { text: { fr: "Interdit et passible d'une amende pour dépôt sauvage", geo: "აკრძალული და დასჯადი ჯარიმით უნებართვო ნარჩენების დაყრისთვის" }, isCorrect: true },
            { text: { fr: "Autorisé si aucune poubelle n'est disponible à proximité", geo: "ნებადართული, თუ ახლოს გამანაგვიანებელი ყუთი არ არის" }, isCorrect: false },
            { text: { fr: "Toléré dans les zones touristiques et les centres-villes", geo: "ტოლერირებული ტურისტულ ზონებში და ქალაქის ცენტრებში" }, isCorrect: false },
            { text: { fr: "Interdit seulement dans les parcs et espaces verts classés", geo: "აკრძალული მხოლოდ კლასიფიცირებულ პარკებსა და მწვანე სივრცეებში" }, isCorrect: false }
        ],
        remark: { fr: "« Jeter des déchets dans la voie publique est une infraction punie par une amende pouvant atteindre 450 euros. Chacun est responsable de ses déchets et doit les déposer dans les conteneurs prévus à cet effet. »", geo: "« საჯარო გზაზე ნარჩენების გადაყრა სამართალდარღვევაა, რომლისთვისაც ჯარიმა 450 ევრომდე შეიძლება იყოს. ყველა პასუხისმგებელია საკუთარ ნარჩენებზე და ვალდებულია ისინი განკუთვნილ კონტეინერებში ჩაყაროს. »" }
    },
    {
        id: "CSP-DD-19",
        question: { fr: "Pourquoi les libertés individuelles peuvent-elles être limitées ?", geo: "რატომ შეიძლება ინდივიდუალური თავისუფლებების შეზღუდვა?" },
        options: [
            { text: { fr: "Pour protéger les droits d'autrui, l'ordre public et la sécurité de tous", geo: "სხვათა უფლებების, საზოგადოებრივი წესრიგისა და ყველას უსაფრთხოების დასაცავად" }, isCorrect: true },
            { text: { fr: "Parce que l'État a toujours la priorité absolue sur les individus", geo: "იმიტომ, რომ სახელმწიფოს ყოველთვის აქვს აბსოლუტური პრიორიტეტი ინდივიდებზე" }, isCorrect: false },
            { text: { fr: "Uniquement pour des raisons économiques décidées par le gouvernement", geo: "მხოლოდ მთავრობის მიერ გადაწყვეტილი ეკონომიკური მიზეზების გამო" }, isCorrect: false },
            { text: { fr: "Pour favoriser une religion ou une culture particulière", geo: "კონკრეტული რელიგიის ან კულტურის წასახალისებლად" }, isCorrect: false }
        ],
        remark: { fr: "« Les libertés individuelles ne sont pas absolues. Elles peuvent être encadrées par la loi lorsque leur exercice porte atteinte aux droits d'autrui, à l'ordre public ou à la sécurité nationale. »", geo: "« ინდივიდუალური თავისუფლებები აბსოლუტური არ არის. მათი მოწესრიგება კანონით შეიძლება, როდესაც მათი განხორციელება ლახავს სხვათა უფლებებს, საზოგადოებრივ წესრიგს ან ეროვნულ უსაფრთხოებას. »" }
    },
    {
        id: "CSP-DD-20",
        question: { fr: "Que doit faire une personne en cas d'accident ?", geo: "რა უნდა გააკეთოს ადამიანმა უბედური შემთხვევის დროს?" },
        options: [
            { text: { fr: "Porter secours aux victimes et appeler les services de secours (15, 18 ou 112)", geo: "დაეხმაროს დაზარალებულებს და დაუკავშირდეს სამაშველო სამსახურებს (15, 18 ან 112)" }, isCorrect: true },
            { text: { fr: "Quitter rapidement les lieux pour ne pas gêner la circulation", geo: "სწრაფად დატოვოს ადგილი, რათა ტრაფიკი არ დაბლოკოს" }, isCorrect: false },
            { text: { fr: "Attendre qu'un passant prenne en charge la situation à sa place", geo: "დაელოდოს, სანამ გამვლელი მის მაგიერ სიტუაციას მოაგვარებს" }, isCorrect: false },
            { text: { fr: "Prévenir uniquement sa compagnie d'assurance avant tout", geo: "უპირველეს ყოვლისა, მხოლოდ სადაზღვევო კომპანიას შეატყობინოს" }, isCorrect: false }
        ],
        remark: { fr: "« La non-assistance à personne en danger est un délit puni par la loi (jusqu'à 5 ans d'emprisonnement). En cas d'accident, tout citoyen est tenu d'alerter les secours (15-SAMU, 18-pompiers, 112) et de porter assistance aux victimes. »", geo: "« საფრთხეში მყოფ პირს დახმარების გაუწევლობა კანონით დასჯადი სამართალდარღვევაა (5 წლამდე პატიმრობა). უბედური შემთხვევის დროს, ყველა მოქალაქე ვალდებულია გამოიძახოს სამაშველო სამსახურები (15-SAMU, 18-მეხანძრეები, 112) და დახმარება გაუწიოს დაზარალებულებს. »" }
    },
    {
        id: "CSP-DD-21",
        question: { fr: "Que permet la citoyenneté française ?", geo: "რას იძლევა საფრანგეთის მოქალაქეობა?" },
        options: [
            { text: { fr: "Voter, être élu et bénéficier de la pleine protection de l'État français", geo: "ხმის მიცემა, არჩეული გახდომა და საფრანგეთის სახელმწიფოს სრული დაცვით სარგებლობა" }, isCorrect: true },
            { text: { fr: "Travailler sans aucune condition dans tous les pays du monde", geo: "ყველა ქვეყანაში ყოველგვარი პირობის გარეშე მუშაობა" }, isCorrect: false },
            { text: { fr: "Ne plus avoir à respecter les lois des pays étrangers lors de voyages", geo: "მოგზაურობის დროს უცხო ქვეყნების კანონების პატივისცემის ვალდებულებისგან გათავისუფლება" }, isCorrect: false },
            { text: { fr: "Obtenir automatiquement la nationalité de tous les pays francophones", geo: "ყველა ფრანგულენოვანი ქვეყნის მოქალაქეობის ავტომატურად მიღება" }, isCorrect: false }
        ],
        remark: { fr: "« La nationalité française confère des droits civiques et politiques : le droit de vote, le droit d'être élu, la protection consulaire à l'étranger, et l'accès à certaines fonctions publiques réservées aux citoyens français. »", geo: "« საფრანგეთის მოქალაქეობა ანიჭებს სამოქალაქო და პოლიტიკურ უფლებებს: ხმის მიცემის უფლებას, არჩეული გახდომის უფლებას, საკონსულო დაცვას საზღვარგარეთ და ფრანგი მოქალაქეებისთვის დაცულ გარკვეულ სახელმწიფო თანამდებობებზე წვდომას. »" }
    },
    {
        id: "CSP-DD-22",
        question: { fr: "Que risque une personne qui ne respecte pas la loi ?", geo: "რა რისკის წინაშე დგას ადამიანი, რომელიც კანონს არ იცავს?" },
        options: [
            { text: { fr: "Des sanctions pénales : amende, travail d'intérêt général ou emprisonnement", geo: "სისხლისსამართლებრივი სანქციები: ჯარიმა, საზოგადოებრივი სამუშაო ან პატიმრობა" }, isCorrect: true },
            { text: { fr: "Uniquement un avertissement oral de la part des forces de l'ordre", geo: "მხოლოდ სამართალდამცველი ორგანოების ზეპირი გაფრთხილება" }, isCorrect: false },
            { text: { fr: "La perte automatique de sa nationalité ou de son titre de séjour", geo: "მოქალაქეობის ან ბინადრობის ნებართვის ავტომატური დაკარგვა" }, isCorrect: false },
            { text: { fr: "Rien si la violation de la loi est jugée mineure par la police", geo: "არაფერი, თუ პოლიცია კანონის დარღვევას მცირე მნიშვნელობის სახით შეაფასებს" }, isCorrect: false }
        ],
        remark: { fr: "« Tout manquement à la loi expose son auteur à des sanctions proportionnelles à la gravité de l'infraction : contravention (amende), délit (emprisonnement jusqu'à 10 ans) ou crime (réclusion criminelle). »", geo: "« ნებისმიერი კანონის დარღვევა ავლადებს მის ავტორს სამართალდარღვევის სიმძიმის პროპორციულ სანქციებს: სამართალდარღვევა (ჯარიმა), დანაშაული (10 წლამდე პატიმრობა) ან სისხლის სამართლის დანაშაული (სისხლისსამართლებრივი პატიმრობა). »" }
    },
    {
        id: "CSP-DD-23",
        question: { fr: "Quel est le rôle de la gendarmerie ?", geo: "რა როლი აქვს ჟანდარმერიას?" },
        options: [
            { text: { fr: "Maintenir l'ordre et assurer la sécurité principalement dans les zones rurales et péri-urbaines", geo: "წესრიგის შენარჩუნება და უსაფრთხოების უზრუნველყოფა, უპირველეს ყოვლისა, სოფლად და საგარეუბნო ზონებში" }, isCorrect: true },
            { text: { fr: "Gérer les établissements pénitentiaires et surveiller les détenus", geo: "სასჯელაღსრულების დაწესებულებების მართვა და პატიმრების ზედამხედველობა" }, isCorrect: false },
            { text: { fr: "Contrôler les frontières et les aéroports uniquement", geo: "მხოლოდ საზღვრებისა და აეროპორტების კონტროლი" }, isCorrect: false },
            { text: { fr: "Protéger exclusivement les bâtiments et personnalités de l'État", geo: "მხოლოდ სახელმწიფო შენობებისა და პიროვნებების დაცვა" }, isCorrect: false }
        ],
        remark: { fr: "« La gendarmerie nationale est une force de sécurité intérieure à statut militaire, compétente principalement dans les zones rurales, les petites communes et sur les routes nationales. Elle dépend du ministère de l'Intérieur. »", geo: "« ეროვნული ჟანდარმერია სამხედრო სტატუსის შინაგანი უსაფრთხოების ძალაა, რომელიც ძირითადად კომპეტენტურია სოფლად, მცირე ქალაქებში და ეროვნულ გზებზე. ის შინაგან საქმეთა სამინისტროს ექვემდებარება. »" }
    },
    {
        id: "CSP-DD-24",
        question: { fr: "Quel est le rôle de la police ?", geo: "რა როლი აქვს პოლიციას?" },
        options: [
            { text: { fr: "Maintenir l'ordre, assurer la sécurité des personnes et faire respecter la loi", geo: "წესრიგის შენარჩუნება, პირთა უსაფრთხოების უზრუნველყოფა და კანონის დაცვის ზედამხედველობა" }, isCorrect: true },
            { text: { fr: "Juger les auteurs d'infractions et prononcer les condamnations", geo: "სამართალდამრღვევების განსჯა და მსჯავრის გამოტანა" }, isCorrect: false },
            { text: { fr: "Percevoir les amendes et les impôts pour le compte de l'État", geo: "სახელმწიფოს სახელით ჯარიმებისა და გადასახადების ამოღება" }, isCorrect: false },
            { text: { fr: "Gérer les services sociaux et l'aide aux personnes vulnérables", geo: "სოციალური სამსახურების მართვა და მოწყვლადი პირების დახმარება" }, isCorrect: false }
        ],
        remark: { fr: "« La police nationale est chargée d'assurer la sécurité des personnes et des biens, de maintenir l'ordre public et de constater les infractions dans les zones urbaines. Elle est placée sous l'autorité du ministère de l'Intérieur. »", geo: "« ეროვნული პოლიცია პასუხისმგებელია პირთა და ქონების უსაფრთხოების, საზოგადოებრივი წესრიგის შენარჩუნებაზე და სამართალდარღვევების აღმოჩენაზე ურბანულ ზონებში. ის შინაგან საქმეთა სამინისტროს ხელქვეითია. »" }
    },
    {
        id: "CSP-DD-25",
        question: { fr: "Qu'est-ce qu'une infraction ?", geo: "რა არის სამართალდარღვევა?" },
        options: [
            { text: { fr: "Un acte interdit par la loi, passible d'une sanction pénale (contravention, délit ou crime)", geo: "კანონით აკრძალული ქმედება, დასჯადი სისხლისსამართლებრივი სანქციით (სამართალდარღვევა, დანაშაული ან სისხლის სამართლის დანაშაული)" }, isCorrect: true },
            { text: { fr: "Une simple erreur administrative sans conséquence légale", geo: "მარტივი ადმინისტრაციული შეცდომა სამართლებრივი შედეგების გარეშე" }, isCorrect: false },
            { text: { fr: "Un conflit entre voisins réglé à l'amiable sans intervention de la justice", geo: "მეზობლებს შორის კონფლიქტი, მოგვარებული სასამართლოს ჩაურევლად" }, isCorrect: false },
            { text: { fr: "Un manquement aux règles internes d'une association privée", geo: "კერძო ასოციაციის შიდა წესების დარღვევა" }, isCorrect: false }
        ],
        remark: { fr: "« Le droit pénal français distingue trois catégories d'infractions selon leur gravité : la contravention (punie par une amende), le délit (puni de prison jusqu'à 10 ans) et le crime (puni de réclusion criminelle, jugé en cour d'assises). »", geo: "« საფრანგეთის სისხლის სამართალი განასხვავებს სამართალდარღვევის სამ კატეგორიას სიმძიმის მიხედვით: სამართალდარღვევა (ჯარიმით დასჯადი), დანაშაული (10 წლამდე პატიმრობით დასჯადი) და სისხლის სამართლის დანაშაული (სისხლისსამართლებრივი პატიმრობით დასჯადი, განიხილება ნაფიც მსაჯულთა სასამართლოში). »" }
    },
    {
        id: "CSP-DD-26",
        question: { fr: "Comment peut-on réduire ses déchets ?", geo: "როგორ შეგვიძლია ნარჩენების შემცირება?" },
        options: [
            { text: { fr: "En triant ses déchets, en recyclant et en réduisant sa consommation", geo: "ნარჩენების დახარისხებით, გადამუშავებით და მოხმარების შემცირებით" }, isCorrect: true },
            { text: { fr: "En jetant tout dans la même poubelle pour simplifier le tri collectif", geo: "ყველაფრის ერთ ნაგავყუთში გადაყრით კოლექტიური დახარისხების გამარტივებისთვის" }, isCorrect: false },
            { text: { fr: "En brûlant ses déchets dans son jardin ou sur son balcon", geo: "ნარჩენების გადაწვით ბაღში ან აივანზე" }, isCorrect: false },
            { text: { fr: "En déposant tout dans les espaces verts de la commune", geo: "ყველაფრის მუნიციპალიტეტის მწვანე სივრცეებში დაყრით" }, isCorrect: false }
        ],
        remark: { fr: "« Le tri sélectif, le compostage, la réduction des emballages et le recours aux ressourceries sont des gestes civiques essentiels. La loi française fixe des objectifs de réduction des déchets ménagers de 15 % d'ici 2030. »", geo: "« სახეობების მიხედვით დახარისხება, კომპოსტირება, შეფუთვების შემცირება და გადამუშავების ცენტრების გამოყენება არის აუცილებელი სამოქალაქო ქმედებები. საფრანგეთის კანონი ადგენს საყოფაცხოვრებო ნარჩენების 15%-ით შემცირების მიზნებს 2030 წლამდე. »" }
    },
    {
        id: "CSP-DD-27",
        question: { fr: "Déposer une machine à laver cassée sur le trottoir est :", geo: "გატეხილი სარეცხი მანქანის ტროტუარზე დატოვება არის:" },
        options: [
            { text: { fr: "Interdit ; il faut la déposer en déchetterie ou contacter la mairie pour une collecte d'encombrants", geo: "აკრძალული; ის უნდა მიაქციოს ნარჩენების მიღების პუნქტში ან დაუკავშირდეს მერიას მოცულობითი ნარჩენების შეგროვებისთვის" }, isCorrect: true },
            { text: { fr: "Autorisé une fois par mois avec l'accord préalable de la mairie", geo: "ნებადართული თვეში ერთხელ მერიის წინასწარი თანხმობით" }, isCorrect: false },
            { text: { fr: "Toléré si l'appareil est clairement étiqueté et visible pour les collecteurs", geo: "ტოლერირებული, თუ მოწყობილობა ნათლად მოხატული და შემმგროვებლებისთვის ხილვადია" }, isCorrect: false },
            { text: { fr: "Autorisé le jour des collectes d'encombrants sans demande préalable", geo: "ნებადართული მოცულობითი ნარჩენების შეგროვების დღეს წინასწარი მოთხოვნის გარეშე" }, isCorrect: false }
        ],
        remark: { fr: "« Le dépôt sauvage d'encombrants sur la voie publique est une infraction punie d'une amende pouvant atteindre 1 500 euros. Les déchets encombrants doivent être apportés en déchetterie ou signalés à la mairie pour collecte. »", geo: "« მოცულობითი ნარჩენების უნებართვო დაყრა საჯარო გზაზე სამართალდარღვევაა, რომლისთვისაც ჯარიმა 1 500 ევრომდე შეიძლება იყოს. მოცულობითი ნარჩენები უნდა მიეტანოს ნარჩენების მიღების პუნქტში ან მოხდეს მათი შეგროვების შესახებ მერიის შეტყობინება. »" }
    },
    {
        id: "CSP-DD-28",
        question: { fr: "En quoi consiste la traite des êtres humains ?", geo: "რას ნიშნავს ადამიანებით ვაჭრობა?" },
        options: [
            { text: { fr: "L'exploitation illégale de personnes à des fins sexuelles ou de travail forcé ; c'est un crime sévèrement puni", geo: "პირთა უკანონო ექსპლუატაცია სექსუალური ან იძულებითი შრომის მიზნით; ეს არის მკაცრად დასჯადი დანაშაული" }, isCorrect: true },
            { text: { fr: "Un type de commerce international réglementé par des conventions de l'ONU", geo: "გაეროს კონვენციებით მოწესრიგებული საერთაშორისო ვაჭრობის სახეობა" }, isCorrect: false },
            { text: { fr: "Une forme d'immigration irrégulière punie uniquement d'une amende administrative", geo: "არეგულარული იმიგრაციის ფორმა, დასჯადი მხოლოდ ადმინისტრაციული ჯარიმით" }, isCorrect: false },
            { text: { fr: "Une pratique tolérée dans les pays qui n'ont pas signé les conventions internationales", geo: "ქვეყნებში ტოლერირებული პრაქტიკა, რომლებმაც არ მოაწერეს ხელი საერთაშორისო კონვენციებს" }, isCorrect: false }
        ],
        remark: { fr: "« La traite des êtres humains est un crime contre la dignité humaine, puni en France de jusqu'à 20 ans de réclusion criminelle. Elle inclut toute forme d'exploitation : sexuelle, travail forcé, mendicité forcée ou trafic d'organes. »", geo: "« ადამიანებით ვაჭრობა ადამიანის ღირსების წინააღმდეგ ჩადენილი დანაშაულია, საფრანგეთში დასჯადი 20 წლამდე სისხლისსამართლებრივი პატიმრობით. ის მოიცავს ექსპლუატაციის ნებისმიერ ფორმას: სექსუალური, იძულებითი შრომა, იძულებითი მათხოვრობა ან ორგანოებით ვაჭრობა. »" }
    },
    {
        id: "CSP-DD-29",
        question: { fr: "Que doit faire une victime de violences ?", geo: "რა უნდა გააკეთოს ძალადობის მსხვერპლმა?" },
        options: [
            { text: { fr: "Porter plainte auprès de la police ou de la gendarmerie et se faire accompagner si besoin", geo: "საჩივარი შეიტანოს პოლიციაში ან ჟანდარმერიაში და საჭიროების შემთხვევაში თანმხლები ჰყავდეს" }, isCorrect: true },
            { text: { fr: "Régler le problème directement avec l'auteur des violences sans impliquer la justice", geo: "პრობლემა პირდაპირ ძალადობის ჩამდენ პირთან გადაჭრას სასამართლოს ჩართვის გარეშე" }, isCorrect: false },
            { text: { fr: "Contacter uniquement son médecin, qui est tenu au secret médical", geo: "მხოლოდ საკუთარ ექიმთან დაკავშირება, რომელიც სამედიცინო საიდუმლოებაზე ვალდებულია" }, isCorrect: false },
            { text: { fr: "Attendre que la situation se règle d'elle-même avec le temps", geo: "დაელოდოს, სანამ სიტუაცია თავისთავად მოგვარდება დროთა განმავლობაში" }, isCorrect: false }
        ],
        remark: { fr: "« Toute victime de violence a le droit de porter plainte auprès des forces de l'ordre. En cas de violences conjugales, le numéro d'urgence est le 3919. Les victimes peuvent également être accompagnées par des associations spécialisées. »", geo: "« ნებისმიერ ძალადობის მსხვერპლს უფლება აქვს სამართალდამცველ ორგანოებში საჩივარი შეიტანოს. საოჯახო ძალადობის შემთხვევაში, სასწრაფო დახმარების ნომერია 3919. მსხვერპლს ასევე შეუძლია სპეციალიზებული ასოციაციების დახმარებით ისარგებლოს. »" }
    },
    {
        id: "CSP-DD-30",
        question: { fr: "Quelle est l'infraction la plus grave ?", geo: "რომელია ყველაზე მძიმე სამართალდარღვევა?" },
        options: [
            { text: { fr: "Le crime, jugé devant la cour d'assises (ex : meurtre, viol)", geo: "სისხლის სამართლის დანაშაული, განხილული ნაფიც მსაჯულთა სასამართლოში (მაგ.: მკვლელობა, გაუპატიურება)" }, isCorrect: true },
            { text: { fr: "La contravention, comme une amende pour stationnement interdit", geo: "სამართალდარღვევა, მაგალითად ჯარიმა დაუშვებელ ადგილას პარკინგისთვის" }, isCorrect: false },
            { text: { fr: "Le délit, comme le vol simple ou l'escroquerie", geo: "დანაშაული, მაგალითად მარტივი ქურდობა ან თაღლითობა" }, isCorrect: false },
            { text: { fr: "L'incivilité, comme faire du bruit la nuit dans un immeuble", geo: "სამოქალაქო ნორმების დარღვევა, მაგალითად ღამით ხმაური შენობაში" }, isCorrect: false }
        ],
        remark: { fr: "« En droit pénal français, les infractions sont classées par ordre croissant de gravité : contravention, délit, crime. Les crimes (meurtre, viol, terrorisme…) sont jugés devant la cour d'assises et peuvent être punis de la réclusion criminelle à perpétuité. »", geo: "« საფრანგეთის სისხლის სამართალში, სამართალდარღვევები კლასიფიცირებულია სიმძიმის მზარდი რიგით: სამართალდარღვევა, დანაშაული, სისხლის სამართლის დანაშაული. სისხლის სამართლის დანაშაულები (მკვლელობა, გაუპატიურება, ტერორიზმი…) განიხილება ნაფიც მსაჯულთა სასამართლოში და შეიძლება დაისაჯოს სამუდამო სისხლისსამართლებრივი პატიმრობით. »" }
    }
];
