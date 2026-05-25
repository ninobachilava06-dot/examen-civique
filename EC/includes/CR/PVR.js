// includes/CR/PVR.js

export const questionsCR_PVR = [
    {
        id: "CR-PVR-1",
        question: {
            fr: "Parmi les propositions suivantes, laquelle constitue une participation citoyenne ?",
            geo: "შემდეგი წინადადებებიდან რომელი წარმოადგენს მოქალაქეობრივ მონაწილეობას?"
        },
        options: [
            { text: { fr: "Voter aux élections et s'engager dans une association", geo: "არჩევნებში ხმის მიცემა და ასოციაციაში გაწევრიანება" }, isCorrect: true },
            { text: { fr: "Regarder les informations à la télévision", geo: "ტელევიზიით ახალი ამბების ყურება" }, isCorrect: false },
            { text: { fr: "Payer ses factures d'électricité", geo: "ელექტროენერგიის გადასახადების გადახდა" }, isCorrect: false },
            { text: { fr: "Faire ses courses au marché", geo: "ბაზარში საყიდლებზე წასვლა" }, isCorrect: false }
        ],
        remark: {
            fr: "« La participation des citoyens à la vie de la cité est au cœur de la démocratie (vote, vie associative, bénévolat). »",
            geo: "«მოქალაქეების მონაწილეობა საზოგადოებრივ ცხოვრებაში დემოკრატიის საფუძველია (ხმის მიცემა, ასოციაციური ცხოვრება, მოხალისეობა).»"
        }
    },
    {
        id: "CR-PVR-2",
        question: {
            fr: "Que garantit la liberté d’expression ?",
            geo: "რას უზრუნველყოფს სიტყვის თავისუფლება?"
        },
        options: [
            { text: { fr: "Le droit de diffuser ses opinions, sous réserve de respecter la loi", geo: "საკუთარი აზრის გავრცელების უფლებას, კანონის დაცვის პირობით" }, isCorrect: true },
            { text: { fr: "Le droit d'insulter n'importe qui anonymement", geo: "ნებისმიერი ადამიანის ანონიმურად შეურაცხყოფის უფლებას" }, isCorrect: false },
            { text: { fr: "Le droit de divulguer des secrets d'État", geo: "სახელმწიფო საიდუმლოების გამჟღავნების უფლებას" }, isCorrect: false },
            { text: { fr: "Le droit de mentir devant un tribunal", geo: "სასამართლოში ტყუილის თქმის უფლებას" }, isCorrect: false }
        ],
        remark: {
            fr: "« La liberté d’expression est le droit pour toute personne de penser librement et d’exprimer ses opinions. Elle est limitée par l'injure et la diffamation. »",
            geo: "«სიტყვის თავისუფლება არის ნებისმიერი ადამიანის უფლება თავისუფლად იაზროვნოს და გამოხატოს თავისი აზრი. იგი შეზღუდულია შეურაცხყოფითა და ცილისწამებით.»"
        }
    },
    {
        id: "CR-PVR-3",
        question: {
            fr: "À quoi sert un titre de séjour ?",
            geo: "რისთვის არის საჭირო ბინადრობის მოწმობა (titre de séjour)?"
        },
        options: [
            { text: { fr: "À séjourner légalement sur le territoire français", geo: "საფრანგეთის ტერიტორიაზე ლეგალურად ყოფნისთვის" }, isCorrect: true },
            { text: { fr: "À voyager gratuitement dans toute l'Europe", geo: "მთელ ევროპაში უფასოდ მოგზაურობისთვის" }, isCorrect: false },
            { text: { fr: "À être dispensé de payer des impôts", geo: "გადასახადების გადახდისგან გათავისუფლებისთვის" }, isCorrect: false },
            { text: { fr: "À obtenir automatiquement la nationalité française", geo: "საფრანგეთის მოქალაქეობის ავტომატურად მიღებისთვის" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le titre de séjour est le document qui permet à un étranger de résider légalement en France. »",
            geo: "«ბინადრობის მოწმობა არის დოკუმენტი, რომელიც უცხოელს საფრანგეთში ლეგალურად ცხოვრების საშუალებას აძლევს.»"
        }
    },
    {
        id: "CR-PVR-4",
        question: {
            fr: "La liberté de circulation permet à toute personne de :",
            geo: "გადაადგილების თავისუფლება ნებას რთავს ნებისმიერ პირს:"
        },
        options: [
            { text: { fr: "Se déplacer librement et s'installer sur le territoire français", geo: "თავისუფლად გადაადგილდეს და დასახლდეს საფრანგეთის ტერიტორიაზე" }, isCorrect: true },
            { text: { fr: "Entrer dans n'importe quel domicile privé sans autorisation", geo: "ნებართვის გარეშე შევიდეს ნებისმიერ კერძო საცხოვრებელში" }, isCorrect: false },
            { text: { fr: "Conduire sans permis de conduire", geo: "მართოს ავტომობილი მართვის მოწმობის გარეშე" }, isCorrect: false },
            { text: { fr: "Ignorer les barrages de police", geo: "უგულებელყოს პოლიციის ბარიერები" }, isCorrect: false }
        ],
        remark: {
            fr: "« La liberté d'aller et venir est une liberté fondamentale qui permet de circuler librement sur le territoire national. »",
            geo: "«გადაადგილების თავისუფლება არის ფუნდამენტური თავისუფლება, რომელიც ნაციონალურ ტერიტორიაზე თავისუფლად გადაადგილების საშუალებას იძლევა.»"
        }
    },
    {
        id: "CR-PVR-5",
        question: {
            fr: "Sur quel site internet peut-on retrouver le symbole de la République française ?",
            geo: "რომელ ვებ-გვერდზე შეიძლება საფრანგეთის რესპუბლიკის სიმბოლოს ნახვა?"
        },
        options: [
            { text: { fr: "Sur les sites officiels de l'administration (elysee.fr, gouvernement.fr...)", geo: "ადმინისტრაციის ოფიციალურ საიტებზე (elysee.fr, gouvernement.fr...)" }, isCorrect: true },
            { text: { fr: "Uniquement sur les sites de réseaux sociaux", geo: "მხოლოდ სოციალური ქსელების საიტებზე" }, isCorrect: false },
            { text: { fr: "Sur les sites de vente en ligne", geo: "ონლაინ გაყიდვების საიტებზე" }, isCorrect: false },
            { text: { fr: "Sur les sites de jeux vidéo", geo: "ვიდეო თამაშების საიტებზე" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le logo officiel de la République (bleu, blanc, rouge avec Marianne) figure sur tous les documents de l'État. »",
            geo: "«რესპუბლიკის ოფიციალური ლოგო (ლურჯი, თეთრი, წითელი მარიანასთან ერთად) დატანილია სახელმწიფოს ყველა დოკუმენტზე.»"
        }
    },
    {
        id: "CR-PVR-6",
        question: {
            fr: "Complétez ces paroles de la Marseillaise : \"Aux armes […] ! Formez vos bataillons\"",
            geo: "შეავსეთ მარსელიოზას სიტყვები: \"Aux armes […] ! Formez vos bataillons\""
        },
        options: [
            { text: { fr: "citoyens", geo: "მოქალაქეებო (citoyens)" }, isCorrect: true },
            { text: { fr: "soldats", geo: "ჯარისკაცებო" }, isCorrect: false },
            { text: { fr: "enfants", geo: "შვილებო" }, isCorrect: false },
            { text: { fr: "amis", geo: "მეგობრებო" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le refrain de l'hymne national est : \"Aux armes, citoyens ! Formez vos bataillons ! Marchons, marchons !\" »",
            geo: "«ეროვნული ჰიმნის მისამღერია: \"იარაღისკენ, მოქალაქეებო! შექმენით თქვენი ბატალიონები! ვიაროთ, ვიაროთ!\"»"
        }
    },
    {
        id: "CR-PVR-7",
        question: {
            fr: "Complétez les paroles de la Marseillaise : \"Allons enfants de la patrie […]\"",
            geo: "შეავსეთ მარსელიოზას სიტყვები: \"Allons enfants de la patrie […]\""
        },
        options: [
            { text: { fr: "Le jour de gloire est arrivé", geo: "დიდების დღე დადგა (Le jour de gloire est arrivé)" }, isCorrect: true },
            { text: { fr: "La liberté est notre guide", geo: "თავისუფლება ჩვენი მეგზურია" }, isCorrect: false },
            { text: { fr: "Chantons pour la France", geo: "ვიმღეროთ საფრანგეთისთვის" }, isCorrect: false },
            { text: { fr: "Vive la République", geo: "გაუმარჯოს რესპუბლიკას" }, isCorrect: false }
        ],
        remark: {
            fr: "« La Marseillaise commence par : \"Allons enfants de la Patrie, Le jour de gloire est arrivé !\" »",
            geo: "«მარსელიოზა იწყება სიტყვებით: \"წავედით სამშობლოს შვილებო, დიდების დღე დადგა!\"»"
        }
    },
    {
        id: "CR-PVR-8",
        question: {
            fr: "En application de la liberté individuelle, quelle proposition est correcte ? Une personne peut :",
            geo: "ინდივიდუალური თავისუფლების გამოყენებისას, რომელი დებულებაა სწორი? ადამიანს შეუძლია:"
        },
        options: [
            { text: { fr: "Choisir ses loisirs, sa profession et son domicile", geo: "აირჩიოს თავისი დასვენება, პროფესია და საცხოვრებელი ადგილი" }, isCorrect: true },
            { text: { fr: "Décider de ne pas respecter le code de la route", geo: "გადაწყვიტოს, რომ არ დაიცვას საგზაო მოძრაობის წესები" }, isCorrect: false },
            { text: { fr: "Porter une arme sans autorisation", geo: "ატაროს იარაღი ნებართვის გარეშე" }, isCorrect: false },
            { text: { fr: "S'installer dans un jardin public pour y habiter", geo: "დასახლდეს საჯარო ბაღში საცხოვრებლად" }, isCorrect: false }
        ],
        remark: {
            fr: "« La liberté individuelle garantit à chacun le droit de disposer de sa personne et de mener sa vie comme il l'entend, dans le respect de la loi. »",
            geo: "«ინდივიდუალური თავისუფლება თითოეულს გარანტიას აძლევს განკარგოს საკუთარი თავი და წარმართოს ცხოვრება ისე, როგორც სურს, კანონის ფარგლებში.»"
        }
    },
    {
        id: "CR-PVR-9",
        question: {
            fr: "Concernant la pratique de la religion, quelle proposition est correcte ?",
            geo: "რელიგიურ პრაქტიკასთან დაკავშირებით, რომელი დებულებაა სწორი?"
        },
        options: [
            { text: { fr: "Chacun est libre de pratiquer la religion de son choix ou de n'en pratiquer aucune", geo: "თითოეული თავისუფალია აღასრულოს სასურველი რელიგია ან საერთოდ არცერთი" }, isCorrect: true },
            { text: { fr: "La religion catholique est obligatoire en France", geo: "კათოლიკური რელიგია სავალდებულოა საფრანგეთში" }, isCorrect: false },
            { text: { fr: "Il faut demander une autorisation à la mairie pour prier chez soi", geo: "სახლში ლოცვისთვის მერიისგან ნებართვაა საჭირო" }, isCorrect: false },
            { text: { fr: "Les athées n'ont pas les mêmes droits que les croyants", geo: "ათეისტებს არ აქვთ იგივე უფლებები, რაც მორწმუნეებს" }, isCorrect: false }
        ],
        remark: {
            fr: "« La République garantit la liberté de conscience et de culte. Chacun est libre de croire ou de ne pas croire. »",
            geo: "«რესპუბლიკა უზრუნველყოფს სინდისისა და აღმსარებლობის თავისუფლებას. თითოეული თავისუფალია სწამდეს ან არ სწამდეს.»"
        }
    },
    {
        id: "CR-PVR-10",
        question: {
            fr: "En tant que parent, peut-on refuser que son enfant participe aux cours de sport à l'école car ils sont mixtes ?",
            geo: "როგორც მშობელს, შეგიძლიათ თუ არა უარი თქვათ შვილის სპორტის გაკვეთილებზე დასწრებაზე, რადგან ისინი შერეულია (გოგონები და ბიჭები ერთად)?"
        },
        options: [
            { text: { fr: "Non, l'enseignement est le même pour tous les élèves et la mixité est la règle", geo: "არა, სწავლება ერთნაირია ყველა მოსწავლისთვის და შერეული სწავლება წესია" }, isCorrect: true },
            { text: { fr: "Oui, si c'est pour des motifs religieux", geo: "დიახ, თუ ეს რელიგიური მოტივებითაა გამოწვეული" }, isCorrect: false },
            { text: { fr: "Oui, mais seulement pour les filles", geo: "დიახ, მაგრამ მხოლოდ გოგონებისთვის" }, isCorrect: false },
            { text: { fr: "Oui, à condition d'écrire une lettre au maire", geo: "დიახ, მერისთვის წერილის მიწერის პირობით" }, isCorrect: false }
        ],
        remark: {
            fr: "« L'école publique est laïque. Aucun élève ne peut être soustrait à un enseignement au nom de convictions religieuses ou philosophiques. »",
            geo: "«საჯარო სკოლა სეკულარულია. არცერთი მოსწავლე არ შეიძლება განთავისუფლდეს სწავლებისგან რელიგიური ან ფილოსოფიური მრწამსის გამო.»"
        }
    },
    {
        id: "CR-PVR-11",
        question: {
            fr: "Quelle est la devise de la France ?",
            geo: "რა არის საფრანგეთის დევიზი?"
        },
        options: [
            { text: { fr: "Liberté, Égalité, Fraternité", geo: "თავისუფლება, თანასწორობა, ძმობა" }, isCorrect: true },
            { text: { fr: "Union, Travail, Justice", geo: "ერთიანობა, შრომა, სამართლიანობა" }, isCorrect: false },
            { text: { fr: "Paix, Solidarité, Progrès", geo: "მშვიდობა, სოლიდარობა, პროგრესი" }, isCorrect: false },
            { text: { fr: "La France pour tous", geo: "საფრანგეთი ყველასთვის" }, isCorrect: false }
        ],
        remark: {
            fr: "« La devise de la République est \"Liberté, Égalité, Fraternité\". Elle est inscrite au fronton des édifices publics. »",
            geo: "«რესპუბლიკის დევიზია \"თავისუფლება, თანასწორობა, ძმობა\". იგი აწერია საჯარო შენობების ფასადებს.»"
        }
    },
    {
        id: "CR-PVR-12",
        question: {
            fr: "La répudiation de sa femme est :",
            geo: "ცოლის უარყოფა (რეპუდიაცია) არის:"
        },
        options: [
            { text: { fr: "Interdite en France car elle est contraire à l'égalité femmes-hommes", geo: "საფრანგეთში აკრძალულია, რადგან ეწინააღმდეგება ქალთა და მამაკაცთა თანასწორობას" }, isCorrect: true },
            { text: { fr: "Autorisée si on est étranger", geo: "ნებადართულია, თუ უცხოელი ხართ" }, isCorrect: false },
            { text: { fr: "Possible avec l'accord d'un chef religieux", geo: "შესაძლებელია რელიგიური ლიდერის თანხმობით" }, isCorrect: false },
            { text: { fr: "Un mode de divorce classique", geo: "განქორწინების კლასიკური ფორმა" }, isCorrect: false }
        ],
        remark: {
            fr: "« En France, l'égalité entre les femmes et les hommes est un principe fondamental. La répudiation n'existe pas, seul le divorce par un juge est légal. »",
            geo: "«საფრანგეთში ქალთა და მამაკაცთა თანასწორობა ფუნდამენტური პრინციპია. რეპუდიაცია არ არსებობს, ლეგალურია მხოლოდ მოსამართლის მიერ განქორწინება.»"
        }
    },
    {
        id: "CR-PVR-13",
        question: {
            fr: "Les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?",
            geo: "გადასახადები საჯარო ხარჯების დაფინანსების საშუალებას იძლევა. რომელი დებულებაა სწორი?"
        },
        options: [
            { text: { fr: "C'est une obligation pour tous selon ses capacités financières", geo: "ეს ვალდებულებაა ყველასთვის, ფინანსური შესაძლებლობის მიხედვით" }, isCorrect: true },
            { text: { fr: "On peut choisir de ne pas les payer si on n'utilise pas l'école", geo: "შეიძლება არ გადავიხადოთ, თუ სკოლით არ ვსარგებლობთ" }, isCorrect: false },
            { text: { fr: "Seuls les citoyens français doivent les payer", geo: "მხოლოდ საფრანგეთის მოქალაქეებმა უნდა გადაიხადონ" }, isCorrect: false },
            { text: { fr: "L'argent sert uniquement à payer les ministres", geo: "ეს ფული მხოლოდ მინისტრების ხელფასებისთვისაა" }, isCorrect: false }
        ],
        remark: {
            fr: "« L'impôt est une contribution obligatoire aux charges de l'État pour financer les services publics (santé, éducation, sécurité). »",
            geo: "«გადასახადი არის სავალდებულო შენატანი სახელმწიფო ხარჯებში საჯარო სერვისების (ჯანდაცვა, განათლება, უსაფრთხოება) დასაფინანსებლად.»"
        }
    },
    {
        id: "CR-PVR-14",
        question: {
            fr: "Peut-on brûler publiquement un drapeau français ?",
            geo: "შეიძლება თუ არა საფრანგეთის დროშის საჯაროდ დაწვა?"
        },
        options: [
            { text: { fr: "Non, c'est un outrage aux symboles de la République puni par la loi", geo: "არა, ეს რესპუბლიკის სიმბოლოების შეურაცხყოფაა და ისჯება კანონით" }, isCorrect: true },
            { text: { fr: "Oui, c'est une forme de liberté d'expression", geo: "დიახ, ეს გამოხატვის თავისუფლების ფორმაა" }, isCorrect: false },
            { text: { fr: "Oui, si on l'a acheté soi-même", geo: "დიახ, თუ ის თავად იყიდეთ" }, isCorrect: false },
            { text: { fr: "Uniquement pendant les manifestations", geo: "მხოლოდ მანიფესტაციების დროს" }, isCorrect: false }
        ],
        remark: {
            fr: "« L'outrage au drapeau tricolore ou à l'hymne national est une infraction sanctionnée pénalement. »",
            geo: "«სამფერიანი დროშის ან ეროვნული ჰიმნის შეურაცხყოფა არის სამართალდარღვევა, რომელიც ისჯება სისხლის სამართლის წესით.»"
        }
    },
    {
        id: "CR-PVR-15",
        question: {
            fr: "Que fait l’État pour lutter contre les discriminations ?",
            geo: "რას აკეთებს სახელმწიფო დისკრიმინაციასთან საბრძოლველად?"
        },
        options: [
            { text: { fr: "Il punit par la loi tout traitement inégalitaire fondé sur l'origine, le sexe, la religion...", geo: "კანონით სჯის ნებისმიერ უთანასწორო მოპყრობას წარმოშობის, სქესის, რელიგიის საფუძველზე..." }, isCorrect: true },
            { text: { fr: "Il demande aux citoyens de s'ignorer", geo: "მოუწოდებს მოქალაქეებს ერთმანეთის იგნორირებისკენ" }, isCorrect: false },
            { text: { fr: "Il crée des quartiers séparés pour chaque communauté", geo: "ქმნის განცალკევებულ კვარტლებს თითოეული თემისთვის" }, isCorrect: false },
            { text: { fr: "Rien, la discrimination n'est pas interdite", geo: "არაფერს, დისკრიმინაცია არ არის აკრძალული" }, isCorrect: false }
        ],
        remark: {
            fr: "« La loi interdit et sanctionne les discriminations. Le Défenseur des droits aide les victimes à faire valoir leurs droits. »",
            geo: "«კანონი კრძალავს და სჯის დისკრიმინაციას. უფლებათა დამცველი ეხმარება მსხვერპლებს თავიანთი უფლებების დაცვაში.»"
        }
    },
    {
        id: "CR-PVR-16",
        question: {
            fr: "Que représente Marianne ?",
            geo: "რას განასახიერებს მარიანა?"
        },
        options: [
            { text: { fr: "Une allégorie de la République française et de ses valeurs", geo: "საფრანგეთის რესპუბლიკისა და მისი ღირებულებების ალეგორიას" }, isCorrect: true },
            { text: { fr: "La première femme présidente de France", geo: "საფრანგეთის პირველ ქალ პრეზიდენტს" }, isCorrect: false },
            { text: { fr: "Une sainte religieuse", geo: "რელიგიურ წმინდანს" }, isCorrect: false },
            { text: { fr: "L'épouse du général de Gaulle", geo: "გენერალ დე გოლის მეუღლეს" }, isCorrect: false }
        ],
        remark: {
            fr: "« Marianne est l'un des symboles de la France. Elle porte un bonnet phrygien, symbole de la liberté conquise. »",
            geo: "«მარიანა საფრანგეთის ერთ-ერთი სიმბოლოა. მას ახურავს ფრიგიული ჩაფხუტი, რაც მოპოვებული თავისუფლების სიმბოლოა.»"
        }
    },
    {
        id: "CR-PVR-17",
        question: {
            fr: "Qu'est-ce que la liberté d'association ?",
            geo: "რა არის გაერთიანების (ასოციაციის) თავისუფლება?"
        },
        options: [
            { text: { fr: "Le droit de se regrouper pour un projet commun sans but lucratif", geo: "საერთო არაკომერციული პროექტისთვის გაერთიანების უფლება" }, isCorrect: true },
            { text: { fr: "Le droit de créer une entreprise pour gagner de l'argent", geo: "ფულის მოსაგებად კომპანიის შექმნის უფლება" }, isCorrect: false },
            { text: { fr: "L'obligation d'adhérer à un parti politique", geo: "პოლიტიკურ პარტიაში გაწევრიანების ვალდებულება" }, isCorrect: false },
            { text: { fr: "Le droit de se rassembler sans respecter la loi", geo: "შეკრების უფლება კანონის დაუცველად" }, isCorrect: false }
        ],
        remark: {
            fr: "« La liberté d'association permet de s'engager avec d'autres pour une cause (sport, culture, aide humanitaire). »",
            geo: "«გაერთიანების თავისუფლება საშუალებას იძლევა სხვებთან ერთად ჩაერთოთ რაიმე საქმეში (სპორტი, კულტურა, ჰუმანიტარული დახმარება).»"
        }
    },
    {
        id: "CR-PVR-18",
        question: {
            fr: "Qu'est-ce que la liberté ?",
            geo: "რა არის თავისუფლება?"
        },
        options: [
            { text: { fr: "Le droit de faire tout ce qui ne nuit pas à autrui", geo: "უფლება აკეთო ყველაფერი, რაც სხვას არ ვნებს" }, isCorrect: true },
            { text: { fr: "Le droit de faire tout ce que l'on veut, même si c'est illégal", geo: "უფლება აკეთო ყველაფერი რაც გსურს, მაშინაც კი თუ ეს უკანონოა" }, isCorrect: false },
            { text: { fr: "L'absence totale de lois", geo: "კანონების სრული არარსებობა" }, isCorrect: false },
            { text: { fr: "Un droit réservé uniquement aux riches", geo: "მხოლოდ მდიდრებისთვის განკუთვნილი უფლება" }, isCorrect: false }
        ],
        remark: {
            fr: "« Selon la Déclaration des Droits de l'Homme, la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui. »",
            geo: "«ადამიანის უფლებათა დეკლარაციის თანახმად, თავისუფლება ნიშნავს ყველაფრის კეთების შესაძლებლობას, რაც სხვას არ ვნებს.»"
        }
    },
    {
        id: "CR-PVR-19",
        question: {
            fr: "Qu'est-ce que la Marseillaise ?",
            geo: "რა არის მარსელიოზა?"
        },
        options: [
            { text: { fr: "L'hymne national de la France", geo: "საფრანგეთის ეროვნული ჰიმნი" }, isCorrect: true },
            { text: { fr: "Une danse traditionnelle provençale", geo: "პროვანსული ტრადიციული ცეკვა" }, isCorrect: false },
            { text: { fr: "Le nom d'une place à Paris", geo: "პარიზის ერთ-ერთი მოედნის სახელი" }, isCorrect: false },
            { text: { fr: "Une spécialité culinaire de Marseille", geo: "მარსელის კულინარიული სპეციალობა" }, isCorrect: false }
        ],
        remark: {
            fr: "« La Marseillaise est l'hymne national de la République française, composé en 1792. »",
            geo: "«მარსელიოზა არის საფრანგეთის რესპუბლიკის ეროვნული ჰიმნი, რომელიც 1792 წელს დაიწერა.»"
        }
    },
    {
        id: "CR-PVR-20",
        question: {
            fr: "Sur quel document peut-on voir Marianne ?",
            geo: "რომელ დოკუმენტზე შეიძლება მარიანას ნახვა?"
        },
        options: [
            { text: { fr: "Sur les timbres-poste et les pièces de monnaie", geo: "საფოსტო მარკებსა და მონეტებზე" }, isCorrect: true },
            { text: { fr: "Uniquement sur les contrats de travail", geo: "მხოლოდ შრომით ხელშეკრულებებზე" }, isCorrect: false },
            { text: { fr: "Sur les billets de banque en euros", geo: "ევროს ბანკნოტებზე" }, isCorrect: false },
            { text: { fr: "Sur les menus des restaurants", geo: "რესტორნების მენიუებზე" }, isCorrect: false }
        ],
        remark: {
            fr: "« Marianne figure sur les objets de la vie quotidienne comme les timbres ou les pièces de monnaie (1, 2 et 5 centimes). »",
            geo: "«მარიანა გამოსახულია ყოველდღიურ ნივთებზე, როგორიცაა მარკები ან მონეტები (1, 2 და 5 ცენტი).»"
        }
    }, 
        {
        id: "CR-PVR-21",
        question: {
            fr: "Qu'est-ce que la fraternité ?",
            geo: "რა არის ძმობა (la fraternité)?"
        },
        options: [
            { text: { fr: "Le devoir d'entraide et de solidarité entre tous les citoyens", geo: "ურთიერთდახმარებისა და სოლიდარობის მოვალეობა ყველა მოქალაქეს შორის" }, isCorrect: true },
            { text: { fr: "L'obligation d'avoir les mêmes goûts que ses voisins", geo: "ვალდებულება, გქონდეს იგივე გემოვნება, რაც შენს მეზობლებს" }, isCorrect: false },
            { text: { fr: "Le fait de n'aider que sa propre famille", geo: "მხოლოდ საკუთარი ოჯახის დახმარება" }, isCorrect: false },
            { text: { fr: "Une loi qui interdit de vivre seul", geo: "კანონი, რომელიც კრძალავს მარტო ცხოვრებას" }, isCorrect: false }
        ],
        remark: {
            fr: "« La fraternité est la troisième valeur de notre devise. Elle implique la solidarité de tous envers chacun. »",
            geo: "«ძმობა ჩვენი დევიზის მესამე ღირებულებაა. ის გულისხმობს ყველას სოლიდარობას თითოეულის მიმართ.»"
        }
    },
    {
        id: "CR-PVR-22",
        question: {
            fr: "Qui a écrit les paroles de La Marseillaise ?",
            geo: "ვინ დაწერა მარსელიოზას (La Marseillaise) ტექსტი?"
        },
        options: [
            { text: { fr: "Rouget de Lisle", geo: "რუჟე დე ლილმა" }, isCorrect: true },
            { text: { fr: "Victor Hugo", geo: "ვიქტორ ჰიუგომ" }, isCorrect: false },
            { text: { fr: "Napoléon Bonaparte", geo: "ნაპოლეონ ბონაპარტმა" }, isCorrect: false },
            { text: { fr: "Charles de Gaulle", geo: "შარლ დე გოლმა" }, isCorrect: false }
        ],
        remark: {
            fr: "« La Marseillaise a été écrite par Claude Joseph Rouget de Lisle en 1792, à Strasbourg. »",
            geo: "«მარსელიოზა დაწერა კლოდ ჟოზეფ რუჟე დე ლილმა 1792 წელს, სტრასბურგში.»"
        }
    },
    {
        id: "CR-PVR-23",
        question: {
            fr: "Quel est le principe qui sépare l'Église et l'État ?",
            geo: "რომელი პრინციპი მიჯნავს ეკლესიასა და სახელმწიფოს?"
        },
        options: [
            { text: { fr: "La laïcité", geo: "სეკულარიზმი (La laïcité)" }, isCorrect: true },
            { text: { fr: "La fraternité", geo: "ძმობა" }, isCorrect: false },
            { text: { fr: "La démocratie", geo: "დემოკრატია" }, isCorrect: false },
            { text: { fr: "La solidarité", geo: "სოლიდარობა" }, isCorrect: false }
        ],
        remark: {
            fr: "« La laïcité sépare les Églises et l'État. L'État est neutre vis-à-vis des religions. »",
            geo: "«სეკულარიზმი მიჯნავს ეკლესიებსა და სახელმწიფოს. სახელმწიფო ნეიტრალურია რელიგიების მიმართ.»"
        }
    },
    {
        id: "CR-PVR-24",
        question: {
            fr: "En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?",
            geo: "რომელ წელს იქნა მიღებული კანონი ეკლესიისა და სახელმწიფოს განცალკევების შესახებ?"
        },
        options: [
            { text: { fr: "1905", geo: "1905 წელს" }, isCorrect: true },
            { text: { fr: "1789", geo: "1789 წელს" }, isCorrect: false },
            { text: { fr: "1944", geo: "1944 წელს" }, isCorrect: false },
            { text: { fr: "1958", geo: "1958 წელს" }, isCorrect: false }
        ],
        remark: {
            fr: "« La loi du 9 décembre 1905 instaure la laïcité en France. »",
            geo: "«1905 წლის 9 დეკემბრის კანონით საფრანგეთში სეკულარიზმი დამყარდა.»"
        }
    },
    {
        id: "CR-PVR-25",
        question: {
            fr: "Une personne a-t-elle le droit de changer de religion en France ?",
            geo: "აქვს თუ არა ადამიანს რელიგიის შეცვლის უფლება საფრანგეთში?"
        },
        options: [
            { text: { fr: "Oui, c'est une liberté garantie par la laïcité", geo: "დიახ, ეს არის სეკულარიზმით გარანტირებული თავისუფლება" }, isCorrect: true },
            { text: { fr: "Non, il faut garder sa religion de naissance", geo: "არა, უნდა შეინარჩუნო დაბადებით მიღებული რელიგია" }, isCorrect: false },
            { text: { fr: "Oui, mais il faut demander l'autorisation à la mairie", geo: "დიახ, მაგრამ ნებართვა უნდა სთხოვო მერიას" }, isCorrect: false },
            { text: { fr: "Seulement si on devient citoyen français", geo: "მხოლოდ იმ შემთხვევაში, თუ საფრანგეთის მოქალაქე გახდები" }, isCorrect: false }
        ],
        remark: {
            fr: "« La liberté de conscience permet de croire ou de ne pas croire, et de changer de religion librement. »",
            geo: "«სინდისის თავისუფლება საშუალებას იძლევა გწამდეს ან არ გწამდეს, და თავისუფლად შეიცვალო რელიგია.»"
        }
    },
    {
        id: "CR-PVR-26",
        question: {
            fr: "Est-ce que l'État finance les cultes (les religions) ?",
            geo: "აფინანსებს თუ არა სახელმწიფო კულტებს (რელიგიებს)?"
        },
        options: [
            { text: { fr: "Non, la République ne salarie ni ne subventionne aucun culte", geo: "არა, რესპუბლიკა არ აძლევს ხელფასს და არ ასუბსიდირებს არცერთ კულტს" }, isCorrect: true },
            { text: { fr: "Oui, toutes les religions reçoivent de l'argent de l'État", geo: "დიახ, ყველა რელიგია იღებს ფულს სახელმწიფოსგან" }, isCorrect: false },
            { text: { fr: "Seulement la religion catholique", geo: "მხოლოდ კათოლიკური რელიგია" }, isCorrect: false },
            { text: { fr: "Oui, mais uniquement pour construire des bâtiments", geo: "დიახ, მაგრამ მხოლოდ შენობების ასაშენებლად" }, isCorrect: false }
        ],
        remark: {
            fr: "« Selon la loi de 1905, la République ne reconnaît, ne salarie, ni ne subventionne aucun culte. »",
            geo: "«1905 წლის კანონის თანახმად, რესპუბლიკა არ აღიარებს, არ აძლევს ხელფასს და არ ასუბსიდირებს არცერთ კულტს.»"
        }
    },
    {
        id: "CR-PVR-27",
        question: {
            fr: "Que signifie la neutralité du service public ?",
            geo: "რას ნიშნავს საჯარო სამსახურის ნეიტრალიტეტი?"
        },
        options: [
            { text: { fr: "Les agents publics ne doivent pas manifester leurs convictions religieuses", geo: "საჯარო მოხელეებმა არ უნდა გამოხატონ თავიანთი რელიგიური მრწამსი" }, isCorrect: true },
            { text: { fr: "Les agents publics doivent parler toutes les langues", geo: "საჯარო მოხელეებმა უნდა იცოდნენ ყველა ენა" }, isCorrect: false },
            { text: { fr: "Les mairies doivent être peintes en blanc", geo: "მერიები თეთრად უნდა იყოს შეღებილი" }, isCorrect: false },
            { text: { fr: "Le service public est fermé pendant les fêtes religieuses", geo: "საჯარო სამსახური დაკეტილია რელიგიური დღესასწაულების დროს" }, isCorrect: false }
        ],
        remark: {
            fr: "« Les agents du service public doivent respecter une stricte neutralité et ne pas porter de signes religieux. »",
            geo: "«საჯარო სამსახურის თანამშრომლებმა უნდა დაიცვან მკაცრი ნეიტრალიტეტი და არ ატარონ რელიგიური სიმბოლოები.»"
        }
    },
    {
        id: "CR-PVR-28",
        question: {
            fr: "Les élèves des écoles publiques peuvent-ils porter des signes religieux ostensibles ?",
            geo: "შეუძლიათ თუ არა საჯარო სკოლის მოსწავლეებს ატარონ აშკარა რელიგიური სიმბოლოები?"
        },
        options: [
            { text: { fr: "Non, c'est interdit par la loi à l'école, au collège et au lycée publics", geo: "არა, ეს აკრძალულია კანონით საჯარო სკოლაში, კოლეჯსა და ლიცეუმში" }, isCorrect: true },
            { text: { fr: "Oui, c'est autorisé partout", geo: "დიახ, ეს ყველგან ნებადართულია" }, isCorrect: false },
            { text: { fr: "Seulement pendant les cours d'histoire", geo: "მხოლოდ ისტორიის გაკვეთილებზე" }, isCorrect: false },
            { text: { fr: "Oui, si les parents sont d'accord", geo: "დიახ, თუ მშობლები თანახმა არიან" }, isCorrect: false }
        ],
        remark: {
            fr: "« Dans les écoles, collèges et lycées publics, le port de signes manifestant ostensiblement une appartenance religieuse est interdit. »",
            geo: "«საჯარო სკოლებში, კოლეჯებსა და ლიცეუმებში აკრძალულია რელიგიური კუთვნილების აშკარა სიმბოლოების ტარება.»"
        }
    },
    {
        id: "CR-PVR-29",
        question: {
            fr: "Peut-on refuser d'être soigné par un médecin parce que c'est une femme ou un homme ?",
            geo: "შეიძლება თუ არა უარი ვთქვათ ექიმის მიერ მკურნალობაზე იმის გამო, რომ ის ქალია ან მამაკაცი?"
        },
        options: [
            { text: { fr: "Non, on ne peut pas récuser un médecin pour son sexe dans le service public", geo: "არა, საჯარო სამსახურში არ შეიძლება ექიმზე უარის თქმა მისი სქესის გამო" }, isCorrect: true },
            { text: { fr: "Oui, on a toujours le choix", geo: "დიახ, არჩევანი ყოველთვის გვაქვს" }, isCorrect: false },
            { text: { fr: "Seulement si c'est pour une opération grave", geo: "მხოლოდ იმ შემთხვევაში, თუ ეს მძიმე ოპერაციას ეხება" }, isCorrect: false },
            { text: { fr: "Oui, mais il faut payer plus cher", geo: "დიახ, მაგრამ მეტი უნდა გადაიხადოთ" }, isCorrect: false }
        ],
        remark: {
            fr: "« Nul ne peut s'opposer à l'application des règles de fonctionnement du service public pour des motifs religieux ou sexistes. »",
            geo: "«არავის შეუძლია წინ აღუდგეს საჯარო სამსახურის მუშაობის წესებს რელიგიური ან სექსისტური მოტივებით.»"
        }
    },
    {
        id: "CR-PVR-30",
        question: {
            fr: "Le drapeau français est composé de quelles couleurs ?",
            geo: "რა ფერებისგან შედგება საფრანგეთის დროშა?"
        },
        options: [
            { text: { fr: "Bleu, Blanc, Rouge", geo: "ლურჯი, თეთრი, წითელი" }, isCorrect: true },
            { text: { fr: "Rouge, Blanc, Vert", geo: "წითელი, თეთრი, მწვანე" }, isCorrect: false },
            { text: { fr: "Bleu, Jaune, Rouge", geo: "ლურჯი, ყვითელი, წითელი" }, isCorrect: false },
            { text: { fr: "Noir, Blanc, Rouge", geo: "შავი, თეთრი, წითელი" }, isCorrect: false }
        ],
        remark: {
            fr: "« L'emblème national est le drapeau tricolore, bleu, blanc, rouge. »",
            geo: "«ეროვნული სიმბოლოა სამფერიანი დროშა: ლურჯი, თეთრი, წითელი.»"
        }
    },
    {
        id: "CR-PVR-31",
        question: {
            fr: "Que représente le bonnet phrygien porté par Marianne ?",
            geo: "რას განასახიერებს ფრიგიული ჩაფხუტი, რომელიც მარიანას ახურავს?"
        },
        options: [
            { text: { fr: "La liberté", geo: "თავისუფლებას" }, isCorrect: true },
            { text: { fr: "La force", geo: "ძალას" }, isCorrect: false },
            { text: { fr: "La richesse", geo: "სიმდიდრეს" }, isCorrect: false },
            { text: { fr: "La royauté", geo: "მეფობას" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le bonnet phrygien était porté par les esclaves affranchis dans l'Antiquité, il symbolise donc la liberté. »",
            geo: "«ფრიგიულ ჩაფხუტს ანტიკურ ხანაში გათავისუფლებული მონები ატარებდნენ, ამიტომ ის თავისუფლების სიმბოლოა.»"
        }
    },
    {
        id: "CR-PVR-32",
        question: {
            fr: "Quelle est la date de la fête nationale française ?",
            geo: "რომელია საფრანგეთის ეროვნული დღესასწაულის თარიღი?"
        },
        options: [
            { text: { fr: "Le 14 juillet", geo: "14 ივლისი" }, isCorrect: true },
            { text: { fr: "Le 1er mai", geo: "1 მაისი" }, isCorrect: false },
            { text: { fr: "Le 11 novembre", geo: "11 ნოემბერი" }, isCorrect: false },
            { text: { fr: "Le 8 mai", geo: "8 მაისი" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le 14 juillet célèbre la prise de la Bastille (1789) et la fête de la Fédération (1790). »",
            geo: "«14 ივლისი აღნიშნავს ბასტილიის აღებას (1789) და ფედერაციის დღესასწაულს (1790).»"
        }
    },
    {
        id: "CR-PVR-33",
        question: {
            fr: "Quel est le nom de l'hymne national de la France ?",
            geo: "რა არის საფრანგეთის ეროვნული ჰიმნის სახელი?"
        },
        options: [
            { text: { fr: "La Marseillaise", geo: "მარსელიოზა (La Marseillaise)" }, isCorrect: true },
            { text: { fr: "Le Chant du départ", geo: "გამგზავრების სიმღერა" }, isCorrect: false },
            { text: { fr: "L'Ode à la joie", geo: "სიხარულის ოდა" }, isCorrect: false },
            { text: { fr: "La Parisienne", geo: "პარიზელი" }, isCorrect: false }
        ],
        remark: {
            fr: "« La Marseillaise est devenue l'hymne national officiel de la France en 1879. »",
            geo: "«მარსელიოზა საფრანგეთის ოფიციალური ეროვნული ჰიმნი გახდა 1879 წელს.»"
        }
    },
    {
        id: "CR-PVR-34",
        question: {
            fr: "Quelle est la langue de la République française ?",
            geo: "რა არის საფრანგეთის რესპუბლიკის ენა?"
        },
        options: [
            { text: { fr: "Le français", geo: "ფრანგული" }, isCorrect: true },
            { text: { fr: "Le français et l'anglais", geo: "ფრანგული და ინგლისური" }, isCorrect: false },
            { text: { fr: "Toutes les langues régionales", geo: "ყველა რეგიონული ენა" }, isCorrect: false },
            { text: { fr: "Le latin", geo: "ლათინური" }, isCorrect: false }
        ],
        remark: {
            fr: "« La langue de la République est le français. C'est un élément d'unité nationale. »",
            geo: "«რესპუბლიკის ენა არის ფრანგული. ის ეროვნული ერთიანობის ელემენტია.»"
        }
    },
    {
        id: "CR-PVR-35",
        question: {
            fr: "Où trouve-t-on la devise \"Liberté, Égalité, Fraternité\" ?",
            geo: "სად ვხვდებით დევიზს \"თავისუფლება, თანასწორობა, ძმობა\"?"
        },
        options: [
            { text: { fr: "Sur les mairies et les bâtiments publics", geo: "მერიებზე და საზოგადოებრივ შენობებზე" }, isCorrect: true },
            { text: { fr: "Uniquement sur les timbres", geo: "მხოლოდ საფოსტო მარკებზე" }, isCorrect: false },
            { text: { fr: "Dans les églises", geo: "ეკლესიებში" }, isCorrect: false },
            { text: { fr: "Sur les voitures de police", geo: "პოლიციის მანქანებზე" }, isCorrect: false }
        ],
        remark: {
            fr: "« La devise de la République est inscrite sur le fronton des mairies, des écoles et des bâtiments officiels. »",
            geo: "«რესპუბლიკის დევიზი აწერია მერიების, სკოლებისა და ოფიციალური შენობების ფასადებზე.»"
        }
    },
    {
        id: "CR-PVR-36",
        question: {
            fr: "Qui est Marianne ?",
            geo: "ვინ არის მარიანა (Marianne)?"
        },
        options: [
            { text: { fr: "L'allégorie de la République française", geo: "საფრანგეთის რესპუბლიკის ალეგორია" }, isCorrect: true },
            { text: { fr: "La femme du président", geo: "პრეზიდენტის ცოლი" }, isCorrect: false },
            { text: { fr: "Une sainte religieuse", geo: "წმინდანი" }, isCorrect: false },
            { text: { fr: "Une reine de France célèbre", geo: "საფრანგეთის ცნობილი დედოფალი" }, isCorrect: false }
        ],
        remark: {
            fr: "« Marianne incarne la République et ses valeurs. Son buste est présent dans toutes les mairies. »",
            geo: "«მარიანა განასახიერებს რესპუბლიკას და მის ღირებულებებს. მისი ბიუსტი ყველა მერიაშია.»"
        }
    },
    {
        id: "CR-PVR-37",
        question: {
            fr: "Le sceau de la République représente quoi ?",
            geo: "რას გამოსახავს რესპუბლიკის ბეჭედი?"
        },
        options: [
            { text: { fr: "La Liberté assise tenant un faisceau de licteur", geo: "მჯდომარე თავისუფლებას, რომელსაც ხელში ლიქტორის კონა უჭირავს" }, isCorrect: true },
            { text: { fr: "Un lion couronné", geo: "გვირგვინოსან ლომს" }, isCorrect: false },
            { text: { fr: "Le portrait de Napoléon", geo: "ნაპოლეონის პორტრეტს" }, isCorrect: false },
            { text: { fr: "Une carte de France", geo: "საფრანგეთის რუკას" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le sceau de la République est utilisé pour les actes très importants comme la Constitution. »",
            geo: "«რესპუბლიკის ბეჭედი გამოიყენება ძალიან მნიშვნელოვანი აქტებისთვის, როგორიცაა კონსტიტუცია.»"
        }
    },
    {
        id: "CR-PVR-38",
        question: {
            fr: "Quelle est la forme de l'État en France ?",
            geo: "რა არის სახელმწიფოს ფორმა საფრანგეთში?"
        },
        options: [
            { text: { fr: "Une République indivisible, laïque, démocratique et sociale", geo: "განუყოფელი, სეკულარული, დემოკრატიული და სოციალური რესპუბლიკა" }, isCorrect: true },
            { text: { fr: "Une fédération d'États", geo: "შტატების ფედერაცია" }, isCorrect: false },
            { text: { fr: "Une monarchie parlementaire", geo: "საპარლამენტო მონარქია" }, isCorrect: false },
            { text: { fr: "Un empire démocratique", geo: "დემოკრატიული იმპერია" }, isCorrect: false }
        ],
        remark: {
            fr: "« L'article 1er de la Constitution définit la France comme une République indivisible, laïque, démocratique et sociale. »",
            geo: "«კონსტიტუციის პირველი მუხლი საფრანგეთს განსაზღვრავს, როგორც განუყოფელ, სეკულარულ, დემოკრატიულ და სოციალურ რესპუბლიკას.»"
        }
    },
    {
        id: "CR-PVR-39",
        question: {
            fr: "Que signifie le caractère \"indivisible\" de la République ?",
            geo: "რას ნიშნავს რესპუბლიკის \"განუყოფელი\" (indivisible) ხასიათი?"
        },
        options: [
            { text: { fr: "La loi est la même pour tous sur tout le territoire", geo: "კანონი ყველასთვის ერთია მთელ ტერიტორიაზე" }, isCorrect: true },
            { text: { fr: "On ne peut pas quitter le pays", geo: "ქვეყნის დატოვება არ შეიძლება" }, isCorrect: false },
            { text: { fr: "Il n'y a qu'une seule ville en France", geo: "საფრანგეთში მხოლოდ ერთი ქალაქია" }, isCorrect: false },
            { text: { fr: "Tout le monde doit avoir le même nom de famille", geo: "ყველას ერთი და იგივე გვარი უნდა ჰქონდეს" }, isCorrect: false }
        ],
        remark: {
            fr: "« Indivisible signifie qu'aucune partie du peuple ni aucun individu ne peut s'attribuer l'exercice de la souveraineté nationale. »",
            geo: "«განუყოფელი ნიშნავს, რომ ხალხის არცერთ ნაწილს და არცერთ ინდივიდს არ შეუძლია მიითვისოს ეროვნული სუვერენიტეტი.»"
        }
    },
    {
        id: "CR-PVR-40",
        question: {
            fr: "La France est une République \"sociale\". Qu'est-ce que cela signifie ?",
            geo: "საფრანგეთი არის \"სოციალური\" რესპუბლიკა. რას ნიშნავს ეს?"
        },
        options: [
            { text: { fr: "L'État aide les plus fragiles et garantit la solidarité", geo: "სახელმწიფო ეხმარება ყველაზე სუსტებს და უზრუნველყოფს სოლიდარობას" }, isCorrect: true },
            { text: { fr: "Tout le monde doit aller à des fêtes", geo: "ყველა უნდა წავიდეს წვეულებებზე" }, isCorrect: false },
            { text: { fr: "Il est obligatoire de parler à ses voisins", geo: "მეზობლებთან საუბარი სავალდებულოა" }, isCorrect: false },
            { text: { fr: "L'État paie les vacances de tout le monde", geo: "სახელმწიფო ყველას უხდის შვებულების ფულს" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le caractère social signifie que la République contribue à la cohésion de la société par la solidarité nationale. »",
            geo: "«სოციალური ხასიათი ნიშნავს, რომ რესპუბლიკა ხელს უწყობს საზოგადოების ერთიანობას ეროვნული სოლიდარობის მეშვეობით.»"
        }
    }
];