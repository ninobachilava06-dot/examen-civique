// includes/CSP/VSF.js
// Source : formation-civique.interieur.gouv.fr — liste officielle CSP

export const questionsCSP_VSF = [
    {
        id: "CSP-VSF-1",
        question: { fr: "Quel numéro d'urgence permet d'appeler le SAMU ?", geo: "გადაუდებელი დახმარების სამსახურის (SAMU) გამოძახების რა ნომრით არის შესაძლებელი?" },
        options: [
            { text: { fr: "Le 15", geo: "15" }, isCorrect: true },
            { text: { fr: "Le 18", geo: "18" }, isCorrect: false },
            { text: { fr: "Le 17", geo: "17" }, isCorrect: false },
            { text: { fr: "Le 112 uniquement depuis l'étranger", geo: "112, მხოლოდ საზღვარგარეთიდან" }, isCorrect: false }
        ],
        remark: { fr: "« Le 15 est le numéro national d'aide médicale urgente, disponible 24h/24 et 7j/7, géré par le SAMU. »", geo: "« 15 არის სამედიცინო გადაუდებელი დახმარების ეროვნული ნომერი, ხელმისაწვდომი 24/7, SAMU-ს მიერ მართული. »" }
    },
    {
        id: "CSP-VSF-2",
        question: { fr: "Quel numéro d'urgence permet d'appeler les pompiers ?", geo: "საგანგებო სიტუაციების რომელი ნომრით შეგიძლიათ დაურეკოთ მეხანძრეებს?" },
        options: [
            { text: { fr: "Le 18 (ou le 112)", geo: "18 (ან 112)" }, isCorrect: true },
            { text: { fr: "Le 15", geo: "15" }, isCorrect: false },
            { text: { fr: "Le 17", geo: "17" }, isCorrect: false },
            { text: { fr: "Le 115", geo: "115" }, isCorrect: false }
        ],
        remark: { fr: "« Le 18 est le numéro des sapeurs-pompiers ; le 112 est le numéro d'urgence européen joignable depuis n'importe quel pays de l'UE. »", geo: "« 18 არის მეხანძრეების ნომერი; 112 არის ევროპული საგანგებო ნომერი, ხელმისაწვდომი ევროკავშირის ნებისმიერი ქვეყნიდან. »" }
    },
    {
        id: "CSP-VSF-3",
        question: { fr: "Après avoir obtenu le permis de conduire, que faut-il faire pour pouvoir conduire sa voiture ?", geo: "მართვის მოწმობის მიღების შემდეგ, რა უნდა გააკეთოთ, რომ მანქანა მართოთ?" },
        options: [
            { text: { fr: "Assurer obligatoirement son véhicule (assurance responsabilité civile au minimum)", geo: "სავალდებულოდ დააზღვიოთ მანქანა (სამოქალაქო პასუხისმგებლობის დაზღვევა მინიმუმ)" }, isCorrect: true },
            { text: { fr: "S'inscrire au registre des conducteurs en préfecture", geo: "პრეფექტურაში მძღოლთა რეესტრში დარეგისტრირება" }, isCorrect: false },
            { text: { fr: "Passer un test médical annuel pour confirmer son aptitude à conduire", geo: "ყოველწლიური სამედიცინო ტესტის გავლა სამართავი უნარის დასადასტურებლად" }, isCorrect: false },
            { text: { fr: "Obtenir une vignette de sécurité délivrée par la mairie", geo: "მერიის მიერ გაცემული უსაფრთხოების ვინიეტის მიღება" }, isCorrect: false }
        ],
        remark: { fr: "« L'assurance responsabilité civile est obligatoire pour tout véhicule terrestre à moteur ; conduire sans assurance est une infraction pénale. »", geo: "« სამოქალაქო პასუხისმგებლობის დაზღვევა სავალდებულოა ყველა ძრავიანი სახმელეთო სატრანსპორტო საშუალებისთვის; დაუზღვეველი მანქანით მართვა სისხლისსამართლებრივი დარღვევაა. »" }
    },
    {
        id: "CSP-VSF-4",
        question: { fr: "À quelles conditions un mariage est-il reconnu juridiquement ?", geo: "რა პირობებში არის ქორწინება იურიდიულად აღიარებული?" },
        options: [
            { text: { fr: "Le mariage doit être célébré civilement en mairie ; seul le mariage civil a une valeur juridique en France", geo: "ქორწინება უნდა გაიმართოს სამოქალაქო სახით მერიაში; მხოლოდ სამოქალაქო ქორწინებას აქვს იურიდიული ძალა საფრანგეთში" }, isCorrect: true },
            { text: { fr: "Le mariage religieux suffit s'il est célébré par un prêtre ou un imam reconnu", geo: "რელიგიური ქორწინება საკმარისია, თუ იგი ოფიციალურად აღიარებული მღვდლის ან იმამის მიერ ტარდება" }, isCorrect: false },
            { text: { fr: "Un simple acte notarié signé par les deux époux suffit", geo: "ნოტარიულად დამოწმებული აქტი, რომელზეც ორივე მეუღლეა ხელმოწერილი, საკმარისია" }, isCorrect: false },
            { text: { fr: "Le mariage est reconnu si les deux époux sont de nationalité française", geo: "ქორწინება აღიარებულია, თუ ორივე მეუღლეს ფრანგული მოქალაქეობა აქვს" }, isCorrect: false }
        ],
        remark: { fr: "« En France, seul le mariage civil célébré devant l'officier d'état civil produit des effets juridiques ; le mariage religieux est une démarche personnelle. »", geo: "« საფრანგეთში მხოლოდ სამოქალაქო მდგომარეობის ოფიცრის წინაშე გამართული სამოქალაქო ქორწინება წარმოშობს სამართლებრივ შედეგებს; რელიგიური ქორწინება პირადი საქმეა. »" }
    },
    {
        id: "CSP-VSF-5",
        question: { fr: "Quand faut-il déclarer son enfant au service d'état civil de la mairie ?", geo: "როდის უნდა განაცხადოთ თქვენი შვილი მერიის სამოქალაქო სტატუსის სამსახურში?" },
        options: [
            { text: { fr: "Dans les 5 jours suivant la naissance", geo: "დაბადებიდან 5 დღის განმავლობაში" }, isCorrect: true },
            { text: { fr: "Dans les 30 jours suivant la naissance", geo: "დაბადებიდან 30 დღის განმავლობაში" }, isCorrect: false },
            { text: { fr: "Avant la fin du premier mois de vie de l'enfant", geo: "ბავშვის სიცოცხლის პირველი თვის ბოლომდე" }, isCorrect: false },
            { text: { fr: "Dans l'année suivant la naissance", geo: "დაბადების შემდეგ ერთი წლის განმავლობაში" }, isCorrect: false }
        ],
        remark: { fr: "« Tout parent est tenu de déclarer la naissance de son enfant à la mairie du lieu de naissance dans un délai de cinq jours. »", geo: "« ყველა მშობელი ვალდებულია ბავშვის დაბადება განაცხადოს დაბადების ადგილის მერიაში ხუთი დღის ვადაში. »" }
    },
    {
        id: "CSP-VSF-6",
        question: { fr: "Le travail non déclaré est :", geo: "დაურეგისტრირებელი სამუშაო არის:" },
        options: [
            { text: { fr: "Illégal et passible de sanctions pour l'employeur et l'employé (travail au noir)", geo: "უკანონო და დასჯადი როგორც დამსაქმებლისთვის, ასევე დასაქმებულისთვის (შავი სამუშაო)" }, isCorrect: true },
            { text: { fr: "Toléré pour les petits travaux entre particuliers d'une valeur inférieure à 500 €", geo: "დასაშვები კერძო პირებს შორის 500 ევროს ქვემოთ მცირე სამუშაოებისთვის" }, isCorrect: false },
            { text: { fr: "Légal dans le secteur agricole pour les travailleurs saisonniers étrangers", geo: "კანონიერი სასოფლო-სამეურნეო სექტორში უცხოელი სეზონური მუშებისთვის" }, isCorrect: false },
            { text: { fr: "Autorisé si les deux parties signent un accord écrit informel", geo: "ნებადართული, თუ ორივე მხარე ხელს აწერს არაფორმალურ წერილობით შეთანხმებას" }, isCorrect: false }
        ],
        remark: { fr: "« Le travail dissimulé est une fraude grave punie par la loi ; il prive le salarié de ses droits sociaux et expose l'employeur à de lourdes sanctions. »", geo: "« დამალული სამუშაო სერიოზული თაღლითობაა, რომელიც კანონით ისჯება; იგი ართმევს მუშაკს სოციალურ უფლებებს და დამსაქმებელს მძიმე სანქციებს უქვემდებარებს. »" }
    },
    {
        id: "CSP-VSF-7",
        question: { fr: "Que doit faire un employeur pour fixer un salaire ?", geo: "რა უნდა გააკეთოს დამსაქმებელმა ხელფასის დასადგენად?" },
        options: [
            { text: { fr: "Respecter au minimum le SMIC et les dispositions de la convention collective applicable", geo: "დაიცვას მინიმუმ SMIC და გამოსაყენებელი კოლექტიური ხელშეკრულების დებულებები" }, isCorrect: true },
            { text: { fr: "Fixer librement le salaire selon les résultats de l'entreprise sans aucune contrainte légale", geo: "თავისუფლად დაადგინოს ხელფასი კომპანიის შედეგების მიხედვით ყოველგვარი სამართლებრივი შეზღუდვის გარეშე" }, isCorrect: false },
            { text: { fr: "Demander l'autorisation de la préfecture avant toute embauche", geo: "ნებისმიერ დასაქმებამდე პრეფექტურის ნებართვის მოთხოვნა" }, isCorrect: false },
            { text: { fr: "Appliquer uniquement le salaire moyen du secteur publié par l'INSEE", geo: "გამოიყენოს მხოლოდ INSEE-ის მიერ გამოქვეყნებული სექტორის საშუალო ხელფასი" }, isCorrect: false }
        ],
        remark: { fr: "« Aucun salarié ne peut percevoir une rémunération inférieure au SMIC, qui est revalorisé chaque année en fonction de l'inflation. »", geo: "« არცერთ დასაქმებულს არ შეიძლება მიეცეს SMIC-ზე ნაკლები ანაზღაურება, რომელიც ყოველწლიურად ინფლაციის გათვალისწინებით გადაიხედება. »" }
    },
    {
        id: "CSP-VSF-8",
        question: { fr: "Qu'est-ce que le SMIC ?", geo: "რა არის მინიმალური ხელფასი (SMIC)?" },
        options: [
            { text: { fr: "Le salaire minimum interprofessionnel de croissance : le salaire horaire minimum légal en France", geo: "სავაჭრო-სამრეწველო მინიმალური ხელფასი: საფრანგეთში კანონიერი საათობრივი მინიმალური ხელფასი" }, isCorrect: true },
            { text: { fr: "Le salaire moyen versé dans la fonction publique française", geo: "საფრანგეთის საჯარო სამსახურში გადახდილი საშუალო ხელფასი" }, isCorrect: false },
            { text: { fr: "Une prime versée aux travailleurs à temps partiel uniquement", geo: "პრემია, რომელიც გადაეხდება მხოლოდ ნახევარ განაკვეთზე მომუშავეებს" }, isCorrect: false },
            { text: { fr: "Une allocation chômage versée par France Travail aux demandeurs d'emploi", geo: "France Travail-ის მიერ სამსახურის მაძიებლებზე გადახდილი უმუშევრობის შემწეობა" }, isCorrect: false }
        ],
        remark: { fr: "« Le SMIC garantit à tous les salariés un pouvoir d'achat minimum ; son montant est fixé par décret et revalorisé au moins une fois par an. »", geo: "« SMIC უზრუნველყოფს ყველა დასაქმებულისთვის მინიმალური შემოსავლის ძალას; მისი ოდენობა დგინდება დეკრეტით და ყოველწლიურად გადაიხედება. »" }
    },
    {
        id: "CSP-VSF-9",
        question: { fr: "Quelle est la première démarche à réaliser pour chercher un emploi ?", geo: "რა არის პირველი ნაბიჯი სამუშაოს საძიებლად?" },
        options: [
            { text: { fr: "S'inscrire à France Travail (anciennement Pôle emploi) pour être accompagné dans sa recherche d'emploi", geo: "France Travail-ში (ყოფილი Pôle emploi) დარეგისტრირება სამუშაოს ძიებაში დახმარების მისაღებად" }, isCorrect: true },
            { text: { fr: "Déposer directement son dossier à la préfecture pour obtenir une autorisation de travail", geo: "პირდაპირ პრეფექტურაში დოსიეს წარდგენა სამუშაო ნებართვის მისაღებად" }, isCorrect: false },
            { text: { fr: "Contacter la mairie de sa commune pour une aide à l'insertion professionnelle", geo: "თქვენი კომუნის მერიასთან დაკავშირება პროფესიული ინტეგრაციის დახმარებისთვის" }, isCorrect: false },
            { text: { fr: "S'inscrire à la Sécurité sociale avant de commencer toute recherche d'emploi", geo: "სოციალური დაზღვევაში დარეგისტრირება სამუშაოს ძიების დაწყებამდე" }, isCorrect: false }
        ],
        remark: { fr: "« France Travail accompagne les demandeurs d'emploi dans leurs démarches et peut verser des allocations chômage aux personnes éligibles. »", geo: "« France Travail ეხმარება სამსახურის მაძიებლებს მათ ქმედებებში და შეიძლება გადაუხადოს უმუშევრობის შემწეობა უფლებამოსილ პირებს. »" }
    },
    {
        id: "CSP-VSF-10",
        question: { fr: "Quelle est la durée légale du temps de travail par semaine ?", geo: "რა არის სამუშაო დროის კანონით დადგენილი ხანგრძლივობა კვირაში?" },
        options: [
            { text: { fr: "35 heures par semaine", geo: "35 საათი კვირაში" }, isCorrect: true },
            { text: { fr: "39 heures par semaine", geo: "39 საათი კვირაში" }, isCorrect: false },
            { text: { fr: "40 heures par semaine", geo: "40 საათი კვირაში" }, isCorrect: false },
            { text: { fr: "32 heures par semaine", geo: "32 საათი კვირაში" }, isCorrect: false }
        ],
        remark: { fr: "« La durée légale du travail est fixée à 35 heures par semaine depuis la loi Aubry de 2000 ; les heures supplémentaires font l'objet d'une majoration de salaire. »", geo: "« სამუშაო დროის კანონიერი ხანგრძლივობა 35 საათად კვირაში დადგენილია 2000 წლის Aubry კანონიდან; ზეგანაკვეთური საათები დამატებითი ანაზღაურებით სარგებლობს. »" }
    },
    {
        id: "CSP-VSF-11",
        question: { fr: "Qui est aidé par France Travail ?", geo: "ვის ეხმარება France Travail?" },
        options: [
            { text: { fr: "Les personnes à la recherche d'un emploi (demandeurs d'emploi) et les employeurs qui recrutent", geo: "სამუშაოს მაძიებელი პირები (სამსახურის მაძიებლები) და დამსაქმებლები, რომლებიც ამ დროს ახლად ქირაობენ" }, isCorrect: true },
            { text: { fr: "Uniquement les jeunes de moins de 26 ans en difficulté d'insertion", geo: "მხოლოდ 26 წელზე ახალგაზრდა ინტეგრაციაში გაჭირვებული ახალგაზრდები" }, isCorrect: false },
            { text: { fr: "Les personnes en situation de handicap uniquement", geo: "მხოლოდ შეზღუდული შესაძლებლობის მქონე პირები" }, isCorrect: false },
            { text: { fr: "Seulement les fonctionnaires en reconversion professionnelle", geo: "მხოლოდ პროფესიული გადამზადების პროცესში მყოფი მოხელეები" }, isCorrect: false }
        ],
        remark: { fr: "« France Travail a pour mission de faciliter la rencontre entre offres et demandes d'emploi, et d'indemniser les chômeurs éligibles à l'allocation de retour à l'emploi. »", geo: "« France Travail-ის მიზანია შეამსუბუქოს სამუშაო ვაკანსიებსა და მაძიებლებს შორის კონტაქტი და უმუშევრობის შემწეობა გადაუხადოს უფლებამოსილ უმუშევრებს. »" }
    },
    {
        id: "CSP-VSF-12",
        question: { fr: "Une personne étrangère en situation régulière peut créer son entreprise :", geo: "ლეგალურად მყოფ უცხოელ პირს შეუძლია საკუთარი ბიზნესის შექმნა:" },
        options: [
            { text: { fr: "Dans les mêmes conditions qu'un citoyen français, sous réserve de remplir les conditions légales", geo: "ფრანგი მოქალაქის მსგავს პირობებში, იმ პირობით, რომ შეასრულებს კანონით დადგენილ პირობებს" }, isCorrect: true },
            { text: { fr: "Seulement après 10 ans de résidence légale en France", geo: "მხოლოდ საფრანგეთში 10 წლიანი კანონიერი ცხოვრების შემდეგ" }, isCorrect: false },
            { text: { fr: "Uniquement dans les secteurs non réservés aux ressortissants de l'UE", geo: "მხოლოდ ევროკავშირის მოქალაქეებისთვის არ დაცულ სექტორებში" }, isCorrect: false },
            { text: { fr: "Après obtention d'une autorisation spéciale du ministère de l'Économie", geo: "ეკონომიკის სამინისტროს სპეციალური ნებართვის მიღების შემდეგ" }, isCorrect: false }
        ],
        remark: { fr: "« Toute personne étrangère titulaire d'un titre de séjour l'autorisant à exercer une activité professionnelle peut créer une entreprise en France. »", geo: "« ნებისმიერ უცხოელ პირს, რომელსაც გააჩნია პროფესიული საქმიანობის განხორციელების ამკრძალავი ბინადრობის ნებართვა, შეუძლია შექმნას კომპანია საფრანგეთში. »" }
    },
    {
        id: "CSP-VSF-13",
        question: { fr: "Une femme peut-elle créer son entreprise ?", geo: "შეუძლია თუ არა ქალს საკუთარი ბიზნესის შექმნა?" },
        options: [
            { text: { fr: "Oui, une femme a exactement les mêmes droits qu'un homme pour créer et gérer une entreprise", geo: "დიახ, ქალს ზუსტად იგივე უფლებები აქვს, რაც კაცს კომპანიის შექმნისა და მართვისთვის" }, isCorrect: true },
            { text: { fr: "Oui, mais elle doit obtenir l'accord de son conjoint si elle est mariée", geo: "დიახ, მაგრამ მან უნდა მიიღოს მეუღლის თანხმობა, თუ გათხოვილია" }, isCorrect: false },
            { text: { fr: "Non, certains secteurs économiques sont réservés aux hommes par la loi", geo: "არა, გარკვეული ეკონომიკური სექტორები კანონით კაცებისთვის არის დაცული" }, isCorrect: false },
            { text: { fr: "Oui, mais avec des conditions supplémentaires pour les entreprises de plus de 5 salariés", geo: "დიახ, მაგრამ დამატებითი პირობებით 5-ზე მეტი თანამშრომლის კომპანიებისთვის" }, isCorrect: false }
        ],
        remark: { fr: "« Le principe d'égalité entre les femmes et les hommes est inscrit dans la Constitution française ; aucune discrimination fondée sur le sexe n'est tolérée dans l'accès à l'entreprise. »", geo: "« ქალებსა და კაცებს შორის თანასწორობის პრინციპი ფრანგეთის კონსტიტუციაშია ჩაწერილი; სქესის ნიშნით არავითარი დისკრიმინაცია ბიზნესში წვდომაში არ არის დასაშვები. »" }
    },
    {
        id: "CSP-VSF-14",
        question: { fr: "À partir de quel âge un mineur peut-il travailler ?", geo: "რა ასაკიდან შეუძლია არასრულწლოვანს მუშაობა?" },
        options: [
            { text: { fr: "À partir de 16 ans en général, avec des conditions strictes (accord parental, durée limitée)", geo: "ზოგადად 16 წლიდან, მკაცრი პირობებით (მშობლის თანხმობა, შეზღუდული ხანგრძლივობა)" }, isCorrect: true },
            { text: { fr: "À partir de 14 ans dans tous les secteurs professionnels", geo: "14 წლიდან ყველა პროფესიულ სექტორში" }, isCorrect: false },
            { text: { fr: "À partir de 18 ans uniquement, l'âge de la majorité légale", geo: "მხოლოდ 18 წლიდან, სამართლებრივი სრულწლოვანების ასაკი" }, isCorrect: false },
            { text: { fr: "À partir de 15 ans sans aucune restriction", geo: "15 წლიდან ყოველგვარი შეზღუდვის გარეშე" }, isCorrect: false }
        ],
        remark: { fr: "« Le travail des mineurs est strictement encadré par le Code du travail afin de protéger leur santé, leur sécurité et leur scolarité. »", geo: "« არასრულწლოვანთა სამუშაო მკაცრად არის მოწესრიგებული შრომის კოდექსით მათი ჯანმრთელობის, უსაფრთხოებისა და სწავლის დასაცავად. »" }
    },
    {
        id: "CSP-VSF-15",
        question: { fr: "Auprès de quel organisme faut-il demander le remboursement des frais de santé ?", geo: "რომელ ორგანიზაციას უნდა მიმართოთ სამედიცინო ხარჯების ანაზღაურების მოთხოვნით?" },
        options: [
            { text: { fr: "L'Assurance maladie (Sécurité sociale / CPAM)", geo: "სავადმყოფო დაზღვევა (სოციალური დაზღვევა / CPAM)" }, isCorrect: true },
            { text: { fr: "La mutuelle santé, qui rembourse directement tous les frais médicaux", geo: "ჯანმრთელობის დამატებითი დაზღვევა, რომელიც პირდაპირ ანაზღაურებს ყველა სამედიცინო ხარჯს" }, isCorrect: false },
            { text: { fr: "La mairie, via le service d'aide sociale communal", geo: "მერია, კომუნალური სოციალური დახმარების სამსახურის მეშვეობით" }, isCorrect: false },
            { text: { fr: "France Travail, qui gère l'ensemble des prestations sociales", geo: "France Travail, რომელიც მართავს ყველა სოციალურ შეღავათს" }, isCorrect: false }
        ],
        remark: { fr: "« La Caisse primaire d'assurance maladie (CPAM) est l'organisme de base chargé du remboursement des soins médicaux dans le cadre de la Sécurité sociale. »", geo: "« სავადმყოფო დაზღვევის პირველადი სალარო (CPAM) არის ძირითადი ორგანიზაცია, რომელიც პასუხისმგებელია სოციალური დაზღვევის ფარგლებში სამედიცინო ხარჯების ანაზღაურებაზე. »" }
    },
    {
        id: "CSP-VSF-16",
        question: { fr: "Qu'est-ce qu'un numéro d'urgence ?", geo: "რა არის გადაუდებელი დახმარების ნომერი?" },
        options: [
            { text: { fr: "Un numéro de téléphone gratuit, disponible 24h/24, à appeler en cas de danger immédiat ou d'urgence", geo: "უფასო სატელეფონო ნომერი, ხელმისაწვდომი 24/7, რომელსაც ზვარ საფრთხის ან გადაუდებელი სიტუაციის შემთხვევაში ურეკავთ" }, isCorrect: true },
            { text: { fr: "Un numéro payant réservé aux abonnés disposant d'une assurance santé", geo: "ფასიანი ნომერი, რომელიც დაჯავშნილია ჯანმრთელობის დაზღვევის მქონე აბონენტებისთვის" }, isCorrect: false },
            { text: { fr: "Le numéro personnel d'un médecin de garde à contacter en cas de maladie bénigne", geo: "მორიგე ექიმის პირადი ნომერი, რომელსაც მსუბუქი ავადმყოფობის შემთხვევაში უკავშირდებიან" }, isCorrect: false },
            { text: { fr: "Un service téléphonique réservé aux étrangers en situation irrégulière", geo: "სატელეფონო სერვისი, რომელიც დაჯავშნილია უკანონო მდგომარეობაში მყოფი უცხოელებისთვის" }, isCorrect: false }
        ],
        remark: { fr: "« Les numéros d'urgence (15, 17, 18, 112, 115) sont accessibles gratuitement depuis n'importe quel téléphone, même sans crédit ni carte SIM. »", geo: "« საგანგებო ნომრები (15, 17, 18, 112, 115) ხელმისაწვდომია უფასოდ ნებისმიერი ტელეფონიდან, თუნდაც ბალანსის ან SIM ბარათის გარეშე. »" }
    },
    {
        id: "CSP-VSF-17",
        question: { fr: "Concernant l'accès aux soins, quelle proposition est correcte ?", geo: "მკურნალობაზე წვდომასთან დაკავშირებით, რომელი წინადადებაა სწორი?" },
        options: [
            { text: { fr: "Toute personne résidant en France peut accéder aux soins, quels que soient ses revenus ou sa situation", geo: "საფრანგეთში მცხოვრებ ნებისმიერ პირს შეუძლია მიიღოს სამედიცინო დახმარება, მიუხედავად შემოსავლისა ან მდგომარეობისა" }, isCorrect: true },
            { text: { fr: "Seuls les citoyens français ont accès au système de santé public", geo: "მხოლოდ ფრანგ მოქალაქეებს აქვთ წვდომა საჯარო ჯანდაცვის სისტემაზე" }, isCorrect: false },
            { text: { fr: "L'accès aux soins est conditionné à la possession d'une mutuelle privée", geo: "სამედიცინო მომსახურებაზე წვდომა განპირობებულია კერძო ჯანმრთელობის დაზღვევის ფლობით" }, isCorrect: false },
            { text: { fr: "Les soins d'urgence sont gratuits, mais les consultations médicales sont entièrement à la charge du patient", geo: "საგანგებო მკურნალობა უფასოა, მაგრამ ექიმთან ვიზიტები სრულად პაციენტის ხარჯზეა" }, isCorrect: false }
        ],
        remark: { fr: "« La couverture maladie universelle garantit à toute personne résidant en France l'accès à la protection maladie, quelle que soit sa situation administrative. »", geo: "« უნივერსალური სამედიცინო დაფარვა უზრუნველყოფს საფრანგეთში მცხოვრებ ყველა პირს დაავადებისგან დაცვაზე წვდომას, მიუხედავად ადმინისტრაციული მდგომარეობისა. »" }
    },
    {
        id: "CSP-VSF-18",
        question: { fr: "En cas de problème de santé non urgent, à qui faut-il s'adresser en premier ?", geo: "არასასწრაფო ჯანმრთელობის პრობლემის შემთხვევაში, ვის უნდა მიმართოთ პირველ რიგში?" },
        options: [
            { text: { fr: "Au médecin traitant (médecin généraliste choisi et déclaré à l'Assurance maladie)", geo: "მკურნალ ექიმს (სავადმყოფო დაზღვევაში არჩეული და რეგისტრირებული ზოგადი პრაქტიკოსი)" }, isCorrect: true },
            { text: { fr: "Directement aux urgences de l'hôpital le plus proche", geo: "პირდაპირ უახლოესი საავადმყოფოს სასწრაფო დახმარებაში" }, isCorrect: false },
            { text: { fr: "À un médecin spécialiste sans passer par un généraliste", geo: "სპეციალისტ ექიმთან ზოგადი პრაქტიკოსის გვერდის ავლით" }, isCorrect: false },
            { text: { fr: "À la pharmacie, qui peut prescrire tous les traitements nécessaires", geo: "აფთიაქში, სადაც შეუძლიათ დანიშნონ ყველა საჭირო მკურნალობა" }, isCorrect: false }
        ],
        remark: { fr: "« Le médecin traitant est le pivot du parcours de soins coordonnés ; le consulter en premier permet une meilleure prise en charge et un remboursement optimal. »", geo: "« მკურნალი ექიმი კოორდინირებული სამედიცინო მომსახურების ღერძია; პირველ რიგში მასთან მიმართვა უზრუნველყოფს უკეთეს მოვლას და ოპტიმალურ ანაზღაურებას. »" }
    },
    {
        id: "CSP-VSF-19",
        question: { fr: "Quel est le rôle du médecin traitant ?", geo: "რა როლი აქვს მკურნალ ექიმს?" },
        options: [
            { text: { fr: "Assurer le suivi médical régulier du patient, le soigner et l'orienter vers des spécialistes si nécessaire", geo: "პაციენტის რეგულარული სამედიცინო თვალთვალის, მისი მკურნალობის და საჭიროების შემთხვევაში სპეციალისტებთან მიმართვის უზრუნველყოფა" }, isCorrect: true },
            { text: { fr: "Effectuer uniquement des opérations chirurgicales en milieu hospitalier", geo: "მხოლოდ ქირურგიული ოპერაციების ჩატარება საავადმყოფოში" }, isCorrect: false },
            { text: { fr: "Délivrer des médicaments sans ordonnance comme une pharmacie", geo: "მედიკამენტების გაცემა რეცეპტის გარეშე, აფთიაქის მსგავსად" }, isCorrect: false },
            { text: { fr: "Gérer les remboursements de l'Assurance maladie à la place de la CPAM", geo: "CPAM-ის ნაცვლად სავადმყოფო დაზღვევის ანაზღაურებების მართვა" }, isCorrect: false }
        ],
        remark: { fr: "« Le médecin traitant coordonne le parcours de santé de son patient et garantit la continuité des soins tout au long de sa vie. »", geo: "« მკურნალი ექიმი კოორდინაციას უწევს პაციენტის ჯანმრთელობის გზას და უზრუნველყოფს სამედიცინო მომსახურების უწყვეტობას მთელი სიცოცხლის განმავლობაში. »" }
    },
    {
        id: "CSP-VSF-20",
        question: { fr: "Dans quelles situations doit-on se rendre aux urgences de l'hôpital ?", geo: "რა სიტუაციებში უნდა მივიდეთ საავადმყოფოს რეანიმაციაში?" },
        options: [
            { text: { fr: "En cas de danger vital, de blessure grave ou de situation médicale qui ne peut pas attendre", geo: "სიცოცხლისთვის საფრთხის, სერიოზული დაზიანების ან სამედიცინო სიტუაციის შემთხვევაში, რომელიც ლოდინს ვერ ითმენს" }, isCorrect: true },
            { text: { fr: "Pour tout problème de santé, même non urgent, afin d'éviter d'attendre chez le médecin traitant", geo: "ნებისმიერი ჯანმრთელობის პრობლემისთვის, თუნდაც არასასწრაფოსთვის, მკურნალ ექიმთან ლოდინის თავიდან ასაცილებლად" }, isCorrect: false },
            { text: { fr: "Pour obtenir un arrêt de travail sans passer par le médecin traitant", geo: "სამსახურიდან გათავისუფლების მოწმობის მისაღებად მკურნალ ექიმთან გვერდის ავლით" }, isCorrect: false },
            { text: { fr: "Pour renouveler ses ordonnances médicales plus rapidement qu'en cabinet", geo: "სამედიცინო რეცეპტების კაბინეტზე სწრაფად განახლებისთვის" }, isCorrect: false }
        ],
        remark: { fr: "« Les services d'urgences hospitalières sont destinés aux situations graves et imprévues ; les utiliser pour des cas non urgents surcharge le système de santé. »", geo: "« საავადმყოფოს სასწრაფო სამსახურები განკუთვნილია სერიოზული და გაუთვალისწინებელი სიტუაციებისთვის; მათი გამოყენება არასასწრაფო შემთხვევებისთვის ჯანდაცვის სისტემას ტვირთავს. »" }
    },
    {
        id: "CSP-VSF-21",
        question: { fr: "Quel est l'objectif des vaccinations obligatoires ?", geo: "რა არის სავალდებულო ვაქცინაციის მიზანი?" },
        options: [
            { text: { fr: "Protéger la population contre les maladies contagieuses et prévenir les épidémies", geo: "მოსახლეობის დაცვა გადამდები დაავადებებისგან და ეპიდემიების პრევენცია" }, isCorrect: true },
            { text: { fr: "Générer des revenus pour les laboratoires pharmaceutiques nationaux", geo: "ეროვნული ფარმაცევტული ლაბორატორიებისთვის შემოსავლის გამომუშავება" }, isCorrect: false },
            { text: { fr: "Remplacer les traitements médicaux en cas de maladie grave", geo: "სერიოზული ავადმყოფობის შემთხვევაში სამედიცინო მკურნალობის ჩანაცვლება" }, isCorrect: false },
            { text: { fr: "Contrôler la démographie en réduisant les maladies infantiles uniquement", geo: "დემოგრაფიის კონტროლი მხოლოდ ბავშვთა დაავადებების შემცირებით" }, isCorrect: false }
        ],
        remark: { fr: "« En France, 11 vaccins sont obligatoires pour les enfants nés depuis 2018, dans le but d'atteindre une immunité collective protégeant toute la population. »", geo: "« საფრანგეთში 2018 წლიდან დაბადებული ბავშვებისთვის სავალდებულოა 11 ვაქცინა, კოლექტიური იმუნიტეტის მისაღწევად, რომელიც მთელ მოსახლეობას იცავს. »" }
    },
    {
        id: "CSP-VSF-22",
        question: { fr: "À quoi sert la carte Vitale ?", geo: "რა არის Vitale ბარათის დანიშნულება?" },
        options: [
            { text: { fr: "À faciliter le remboursement des soins médicaux par l'Assurance maladie sans avance de frais", geo: "სავადმყოფო დაზღვევის მიერ სამედიცინო ხარჯების ანაზღაურების გამარტივება წინასწარი გადახდის გარეშე" }, isCorrect: true },
            { text: { fr: "À payer directement les médicaments prescrits en pharmacie", geo: "აფთიაქში დანიშნული მედიკამენტების პირდაპირ გადახდა" }, isCorrect: false },
            { text: { fr: "À accéder gratuitement à tous les services hospitaliers sans restriction", geo: "ყველა საავადმყოფო სერვისზე შეუზღუდავ უფასო წვდომა" }, isCorrect: false },
            { text: { fr: "À prouver son identité dans les administrations françaises", geo: "ფრანგ ადმინისტრაციებში ვინაობის დამტკიცება" }, isCorrect: false }
        ],
        remark: { fr: "« La carte Vitale contient les informations administratives de l'assuré et permet le traitement rapide des remboursements de soins par la CPAM. »", geo: "« Vitale ბარათი შეიცავს დაზღვეულის ადმინისტრაციულ ინფორმაციას და CPAM-ის მიერ სამედიცინო ხარჯების ანაზღაურების სწრაფ დამუშავებას შესაძლებელს ხდის. »" }
    },
    {
        id: "CSP-VSF-23",
        question: { fr: "À quoi sert une mutuelle santé ?", geo: "რა არის ჯანმრთელობის დაზღვევის მიზანი?" },
        options: [
            { text: { fr: "À rembourser tout ou partie des frais de santé non pris en charge par l'Assurance maladie (ticket modérateur)", geo: "სავადმყოფო დაზღვევის მიერ დაუფარავი სამედიცინო ხარჯების სრული ან ნაწილობრივი ანაზღაურება (მოზომილი გადახდა)" }, isCorrect: true },
            { text: { fr: "À remplacer entièrement l'Assurance maladie pour les personnes qui le souhaitent", geo: "სავადმყოფო დაზღვევის სრულად ჩანაცვლება მსურველი პირებისთვის" }, isCorrect: false },
            { text: { fr: "À accéder à des soins dans les pays étrangers membres de l'UE", geo: "ევროკავშირის წევრ უცხო ქვეყნებში სამედიცინო მომსახურებაზე წვდომა" }, isCorrect: false },
            { text: { fr: "À financer les arrêts maladie et les indemnités journalières", geo: "ავადმყოფობის შვებულებისა და დღიური კომპენსაციის დაფინანსება" }, isCorrect: false }
        ],
        remark: { fr: "« La mutuelle complète le remboursement de la Sécurité sociale en prenant en charge le ticket modérateur et, selon le contrat, d'autres frais comme l'optique ou le dentaire. »", geo: "« დამატებითი დაზღვევა ავსებს სოციალური დაზღვევის ანაზღაურებას მოზომილი გადახდის დაფარვით და, კონტრაქტის მიხედვით, სხვა ხარჯებით, როგორიცაა ოპტიკა ან სტომატოლოგია. »" }
    },
    {
        id: "CSP-VSF-24",
        question: { fr: "Jusqu'à quel âge l'école est-elle obligatoire ?", geo: "რომელ წლამდეა სავალდებულო სკოლა?" },
        options: [
            { text: { fr: "Jusqu'à 16 ans révolus", geo: "16 სრული წლამდე" }, isCorrect: true },
            { text: { fr: "Jusqu'à 14 ans", geo: "14 წლამდე" }, isCorrect: false },
            { text: { fr: "Jusqu'à 18 ans", geo: "18 წლამდე" }, isCorrect: false },
            { text: { fr: "Jusqu'à 15 ans", geo: "15 წლამდე" }, isCorrect: false }
        ],
        remark: { fr: "« L'instruction est obligatoire pour tout enfant résidant sur le territoire français dès l'âge de 3 ans jusqu'à l'âge de 16 ans révolus. »", geo: "« სწავლება სავალდებულოა ფრანგეთის ტერიტორიაზე მცხოვრები ყველა ბავშვისთვის 3 წლიდან 16 სრული წლამდე. »" }
    },
    {
        id: "CSP-VSF-25",
        question: { fr: "L'autorité parentale prévoit l'obligation :", geo: "მშობლის უფლებამოსილება ითვალისწინებს ვალდებულებას:" },
        options: [
            { text: { fr: "D'assurer la sécurité, la santé, l'éducation et le développement de l'enfant", geo: "ბავშვის უსაფრთხოების, ჯანმრთელობის, განათლებისა და განვითარების უზრუნველყოფა" }, isCorrect: true },
            { text: { fr: "De choisir la religion de l'enfant jusqu'à sa majorité", geo: "ბავშვის სრულწლოვანებამდე მისი რელიგიის არჩევა" }, isCorrect: false },
            { text: { fr: "De prendre toutes les décisions à la place de l'enfant jusqu'à ses 21 ans", geo: "21 წლამდე ბავშვის ნაცვლად ყველა გადაწყვეტილების მიღება" }, isCorrect: false },
            { text: { fr: "D'interdire à l'enfant de travailler jusqu'à l'âge de 21 ans", geo: "ბავშვს 21 წლამდე მუშაობის აკრძალვა" }, isCorrect: false }
        ],
        remark: { fr: "« L'autorité parentale est un ensemble de droits et de devoirs ayant pour finalité l'intérêt de l'enfant ; elle appartient aux deux parents conjointement. »", geo: "« მშობლის უფლებამოსილება არის უფლება-მოვალეობების ერთობლიობა, რომელსაც ბავშვის ინტერესი ამოძრავებს; იგი ეკუთვნის ორივე მშობელს ერთობლივად. »" }
    },
    {
        id: "CSP-VSF-26",
        question: { fr: "Pour qui l'école est-elle obligatoire ?", geo: "ვისთვის არის სავალდებულო სკოლა?" },
        options: [
            { text: { fr: "Pour tous les enfants de 3 à 16 ans résidant en France, quelle que soit leur nationalité", geo: "საფრანგეთში მცხოვრები ყველა 3-დან 16 წლამდე ბავშვისთვის, მიუხედავად მოქალაქეობისა" }, isCorrect: true },
            { text: { fr: "Uniquement pour les enfants de nationalité française", geo: "მხოლოდ ფრანგული მოქალაქეობის მქონე ბავშვებისთვის" }, isCorrect: false },
            { text: { fr: "Pour les enfants de 6 à 14 ans uniquement", geo: "მხოლოდ 6-დან 14 წლამდე ბავშვებისთვის" }, isCorrect: false },
            { text: { fr: "Pour les enfants dont les parents sont en situation régulière uniquement", geo: "მხოლოდ იმ ბავშვებისთვის, რომელთა მშობლები კანონიერ მდგომარეობაში არიან" }, isCorrect: false }
        ],
        remark: { fr: "« Le droit à l'éducation est universel en France ; tout enfant présent sur le territoire a le droit d'être scolarisé, sans considération de nationalité ni de situation administrative. »", geo: "« განათლების უფლება საფრანგეთში უნივერსალურია; ტერიტორიაზე ყოფნილ ყველა ბავშვს უფლება აქვს სწავლაზე, მოქალაქეობის ან ადმინისტრაციული მდგომარეობის მიუხედავად. »" }
    },
    {
        id: "CSP-VSF-27",
        question: { fr: "Quel diplôme obtient-on à la fin du lycée ?", geo: "რა დიპლომს იღებთ საშუალო სკოლის დასრულების შემდეგ?" },
        options: [
            { text: { fr: "Le baccalauréat (le bac)", geo: "ბაკალავრეატი (le bac)" }, isCorrect: true },
            { text: { fr: "Le brevet des collèges (DNB)", geo: "კოლეჟის დიპლომი (DNB)" }, isCorrect: false },
            { text: { fr: "Le certificat d'aptitude professionnelle (CAP)", geo: "პროფესიული გამოცდილების სერტიფიკატი (CAP)" }, isCorrect: false },
            { text: { fr: "La licence universitaire (Bac+3)", geo: "უნივერსიტეტის ლიცენზია (Bac+3)" }, isCorrect: false }
        ],
        remark: { fr: "« Le baccalauréat, créé par Napoléon en 1808, est le premier grade universitaire et ouvre la voie aux études supérieures. »", geo: "« ბაკალავრეატი, ნაპოლეონის მიერ 1808 წელს შექმნილი, პირველი უნივერსიტეტური წოდებაა და უმაღლეს განათლებაზე კარს ხსნის. »" }
    },
    {
        id: "CSP-VSF-28",
        question: { fr: "Dans quels établissements scolaires vont les élèves après l'école élémentaire ?", geo: "რა სასწავლებლებში მიდიან მოსწავლეები დაწყებითი სკოლის შემდეგ?" },
        options: [
            { text: { fr: "Au collège (de la 6e à la 3e), puis au lycée (de la 2de à la terminale)", geo: "კოლეჟში (მე-6-დან მე-3 კლასამდე), შემდეგ ლიცეუმში (მე-2-დან სასრულო კლასამდე)" }, isCorrect: true },
            { text: { fr: "Directement au lycée dès l'âge de 11 ans", geo: "პირდაპირ ლიცეუმში 11 წლიდანვე" }, isCorrect: false },
            { text: { fr: "À l'université dès la fin de l'école primaire", geo: "უნივერსიტეტში დაწყებითი სკოლის დამთავრებისთანავე" }, isCorrect: false },
            { text: { fr: "Dans des instituts professionnels dès la 6e", geo: "პროფესიულ ინსტიტუტებში მე-6 კლასიდანვე" }, isCorrect: false }
        ],
        remark: { fr: "« Le système éducatif français comprend l'école maternelle, l'école élémentaire, le collège, le lycée et l'enseignement supérieur. »", geo: "« ფრანგული საგანმანათლებლო სისტემა მოიცავს საბავშვო ბაღს, დაწყებით სკოლას, კოლეჟს, ლიცეუმს და უმაღლეს განათლებას. »" }
    },
    {
        id: "CSP-VSF-29",
        question: { fr: "Pour qui l'école est elle obligatoire ?", geo: "ვისთვის არის სკოლა სავალდებულო?" },
        options: [
            { text: { fr: "Pour tous les enfants résidant sur le territoire français, de 3 à 16 ans, sans distinction de nationalité", geo: "ფრანგეთის ტერიტორიაზე მცხოვრები ყველა ბავშვისთვის, 3-დან 16 წლამდე, მოქალაქეობის განსხვავების გარეშე" }, isCorrect: true },
            { text: { fr: "Seulement pour les enfants de parents français ou européens", geo: "მხოლოდ ფრანგი ან ევროპელი მშობლების ბავშვებისთვის" }, isCorrect: false },
            { text: { fr: "Pour tous les enfants à partir de 6 ans jusqu'à l'obtention du baccalauréat", geo: "ყველა ბავშვისთვის 6 წლიდან ბაკალავრეატის მიღებამდე" }, isCorrect: false },
            { text: { fr: "Uniquement pour les enfants scolarisés dans le public ; le privé est facultatif", geo: "მხოლოდ საჯარო სკოლებში სწავლებული ბავშვებისთვის; კერძო სკოლა ნებაყოფლობითია" }, isCorrect: false }
        ],
        remark: { fr: "« L'obligation scolaire s'applique à tous les enfants présents sur le sol français, indépendamment de leur nationalité ou de celle de leurs parents. »", geo: "« სავალდებულო სწავლება ვრცელდება ფრანგეთის ნიადაგზე ყოფნილ ყველა ბავშვზე, მიუხედავად მათი ან მათი მშობლების მოქალაქეობისა. »" }
    },
    {
        id: "CSP-VSF-30",
        question: { fr: "Un enfant inscrit à l'école :", geo: "სკოლაში ჩაწერილი ბავშვი:" },
        options: [
            { text: { fr: "Doit y assister régulièrement ; toute absence doit être justifiée par les parents", geo: "ვალდებულია რეგულარულად დაესწროს; ყველა გაცდენა მშობლებმა უნდა გაამართლონ" }, isCorrect: true },
            { text: { fr: "Peut s'absenter librement tant que ses résultats scolaires sont satisfaisants", geo: "შეუძლია თავისუფლად გაიცდინოს, სანამ მისი სასკოლო შედეგები დამაკმაყოფილებელია" }, isCorrect: false },
            { text: { fr: "N'est obligé d'assister qu'aux cours jugés essentiels par ses parents", geo: "ვალდებულია დაესწროს მხოლოდ მშობლების მიერ აუცილებელ გაკვეთილებს" }, isCorrect: false },
            { text: { fr: "Peut être retiré de l'école à tout moment par ses parents sans justification", geo: "შეიძლება ნებისმიერ დროს მოიხსნას სკოლიდან მშობლების მიერ გამართლების გარეშე" }, isCorrect: false }
        ],
        remark: { fr: "« L'assiduité scolaire est obligatoire ; en cas d'absences répétées non justifiées, les parents peuvent être convoqués et des sanctions peuvent être engagées. »", geo: "« სკოლაში დასწრება სავალდებულოა; განმეორებადი გამამართლებელი გაცდენების შემთხვევაში, მშობლებს შეიძლება გამოიძახონ და სანქციები გამოყენებულ იქნეს. »" }
    },
    {
        id: "CSP-VSF-31",
        question: { fr: "Les enfants qui ne parlent pas français :", geo: "ბავშვები, რომლებიც ფრანგულს არ საუბრობენ:" },
        options: [
            { text: { fr: "Ont accès à l'école publique et peuvent bénéficier de dispositifs d'apprentissage du français (UPE2A)", geo: "წვდომა აქვთ საჯარო სკოლებზე და შეუძლიათ ისარგებლონ ფრანგული ენის სწავლის პროგრამებით (UPE2A)" }, isCorrect: true },
            { text: { fr: "Doivent d'abord apprendre le français dans des cours privés avant d'intégrer l'école publique", geo: "პირველ რიგში კერძო კურსებზე უნდა ისწავლონ ფრანგული საჯარო სკოლაში ჩარიცხვამდე" }, isCorrect: false },
            { text: { fr: "Ne peuvent pas être scolarisés tant qu'ils ne maîtrisent pas un niveau A2 en français", geo: "ვერ ისწავლებიან, სანამ ფრანგულში A2 დონეს არ დაეუფლებიან" }, isCorrect: false },
            { text: { fr: "Sont orientés uniquement vers des filières professionnelles adaptées à leur situation", geo: "მხოლოდ მათ მდგომარეობასთან ადაპტირებულ პროფესიულ მიმართულებებში ირიცხებიან" }, isCorrect: false }
        ],
        remark: { fr: "« Les UPE2A (Unités pédagogiques pour élèves allophones arrivants) accueillent les élèves non francophones nouvellement arrivés et les accompagnent dans l'apprentissage du français. »", geo: "« UPE2A (ახლად ჩამოსული არაფრანგულენოვანი მოსწავლეების პედაგოგიური ერთეულები) იღებს ახლად ჩამოსულ არაფრანგულენოვან მოსწავლეებს და ეხმარება მათ ფრანგული ენის სწავლაში. »" }
    },
];
