// includes/CSP/OP.js
// Mises en situation — exercices pratiques bilingues FR/GEO

export const questionsCSP_OP = [
    {
        id: "CSP-OP-1",
        question: {
            fr: "Madame Fatima se blesse gravement chez elle. Elle doit appeler les secours immédiatement. Quel numéro doit-elle composer pour appeler le SAMU ?",
            geo: "მადამ ფატიმა სახლში მძიმედ დაშავდა. მან დაუყოვნებლივ უნდა გამოიძახოს სამედიცინო დახმარება. რომელ ნომერზე უნდა დარეკოს SAMU-ს გამოსაძახებლად?"
        },
        options: [
            { text: { fr: "Le 15", geo: "15" }, isCorrect: true },
            { text: { fr: "Le 17 (police)", geo: "17 (პოლიცია)" }, isCorrect: false },
            { text: { fr: "Le 18 (pompiers)", geo: "18 (მეხანძრეები)" }, isCorrect: false },
            { text: { fr: "Le 33 (numéro international)", geo: "33 (საერთაშორისო ნომერი)" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le 15 est le numéro du SAMU (aide médicale urgente). Le 17 est la police, le 18 les pompiers, et le 112 le numéro d'urgence européen. »",
            geo: "«15 არის SAMU-ს ნომერი (სასწრაფო სამედიცინო დახმარება). 17 — პოლიცია, 18 — მეხანძრეები, 112 — ევროპული სასწრაფო ნომერი.»"
        }
    },
    {
        id: "CSP-OP-2",
        question: {
            fr: "Monsieur et Madame Kovacs viennent d'avoir un enfant. Dans quel délai doivent-ils déclarer la naissance à la mairie ?",
            geo: "მისტერ და მადამ კოვაჩს ახალი შვილი ეყოლათ. რა ვადაში უნდა დარეგისტრირონ დაბადება მერიაში?"
        },
        options: [
            { text: { fr: "Dans les 5 jours suivant la naissance", geo: "დაბადებიდან 5 დღის განმავლობაში" }, isCorrect: true },
            { text: { fr: "Dans les 30 jours", geo: "30 დღის განმავლობაში" }, isCorrect: false },
            { text: { fr: "Dans l'année", geo: "წლის განმავლობაში" }, isCorrect: false },
            { text: { fr: "Avant la sortie de la maternité", geo: "სამშობიაროდან გაწერამდე" }, isCorrect: false }
        ],
        remark: {
            fr: "« Toute naissance doit être déclarée dans les 5 jours à l'officier d'état civil de la mairie du lieu de naissance. »",
            geo: "«ყოველი დაბადება უნდა დარეგისტრირდეს 5 დღის განმავლობაში დაბადების ადგილის მერიის სამოქალაქო მდგომარეობის ოფიცერთან.»"
        }
    },
    {
        id: "CSP-OP-3",
        question: {
            fr: "Un employeur propose à Hamid de travailler sans contrat et sans déclaration, contre un salaire en espèces. Que risque Hamid s'il accepte ?",
            geo: "დამსაქმებელი ჰამიდს სთავაზობს მუშაობას ხელშეკრულებისა და დეკლარაციის გარეშე, ნაღდი ანაზღაურებით. რას რისკავს ჰამიდი თანხმობის შემთხვევაში?"
        },
        options: [
            { text: { fr: "Des sanctions pénales, car le travail non déclaré est illégal pour l'employeur et l'employé", geo: "სისხლისსამართლებრივ სანქციებს, რადგან არადეკლარირებული შრომა უკანონოა როგორც დამსაქმებლისთვის, ისე დასაქმებულისთვის" }, isCorrect: true },
            { text: { fr: "Rien, car seul l'employeur est responsable juridiquement", geo: "არაფერს, რადგან მხოლოდ დამსაქმებელი არის პასუხისმგებელი იურიდიულად" }, isCorrect: false },
            { text: { fr: "Une simple amende administrative de 50 euros", geo: "უბრალოდ 50 ევროს ადმინისტრაციულ ჯარიმას" }, isCorrect: false },
            { text: { fr: "Rien, c'est toléré pour les emplois de moins de 3 mois", geo: "არაფერს, ეს ტოლერირებულია 3 თვემდე სამუშაოებისთვის" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le travail non déclaré est un délit qui engage la responsabilité pénale des deux parties et prive le salarié de toute protection sociale. »",
            geo: "«არადეკლარირებული შრომა არის დანაშაული, რომელიც იწვევს ორივე მხარის სისხლისსამართლებრივ პასუხისმგებლობას და ართმევს დასაქმებულს ნებისმიერ სოციალურ დაცვას.»"
        }
    },
    {
        id: "CSP-OP-4",
        question: {
            fr: "Les enfants de Monsieur Babic, âgés de 7 et 10 ans, ne sont pas encore inscrits à l'école depuis leur arrivée en France il y a 2 mois. Que doit faire Monsieur Babic ?",
            geo: "მისტერ ბაბიჩის შვილები, 7 და 10 წლის ასაკის, ჯერ კიდევ არ არიან ჩარიცხული სკოლაში საფრანგეთში ჩამოსვლიდან 2 თვის შემდეგ. რა უნდა გააკეთოს მისტერ ბაბიჩმა?"
        },
        options: [
            { text: { fr: "Les inscrire immédiatement à l'école, car la scolarité est obligatoire de 3 à 16 ans pour tout enfant résidant en France", geo: "დაუყოვნებლივ ჩარიცხოს ისინი სკოლაში, რადგან სწავლება სავალდებულოა 3-დან 16 წლამდე საფრანგეთში მცხოვრები ყველა ბავშვისთვის" }, isCorrect: true },
            { text: { fr: "Attendre qu'ils maîtrisent le français avant de les inscrire", geo: "დაელოდოს სანამ ისინი ფრანგულს ისწავლიან, შემდეგ ჩარიცხოს" }, isCorrect: false },
            { text: { fr: "Les inscrire uniquement s'ils ont des papiers de séjour réguliers", geo: "ჩარიცხოს მხოლოდ იმ შემთხვევაში, თუ მათ აქვთ რეგულარული ბინადრობის დოკუმენტები" }, isCorrect: false },
            { text: { fr: "Les inscrire seulement si la mairie l'exige expressément", geo: "ჩარიცხოს მხოლოდ იმ შემთხვევაში, თუ მერია ამას პირდაპირ მოითხოვს" }, isCorrect: false }
        ],
        remark: {
            fr: "« La scolarité est obligatoire en France pour tous les enfants de 3 à 16 ans résidant sur le territoire, quelle que soit leur nationalité ou leur situation administrative. »",
            geo: "«სწავლება სავალდებულოა საფრანგეთში ტერიტორიაზე მცხოვრები ყველა 3-დან 16 წლამდე ასაკის ბავშვისთვის, მიუხედავად მათი ეროვნებისა ან ადმინისტრაციული სტატუსისა.»"
        }
    },
    {
        id: "CSP-OP-5",
        question: {
            fr: "Madame Chen a mal à la gorge depuis plusieurs jours. Elle hésite entre aller aux urgences ou consulter son médecin traitant. Que doit-elle faire ?",
            geo: "მადამ ჩენს რამდენი დღეა ყელი სტკივა. ის ყოყმანობს — წავიდეს სასწრაფოში თუ კონსულტაციისთვის სასამბულო ექიმთან. რა უნდა გააკეთოს?"
        },
        options: [
            { text: { fr: "Consulter son médecin traitant en premier ; les urgences sont réservées aux situations graves et urgentes", geo: "პირველ რიგში კონსულტაციისთვის მივიდეს სასამბულო ექიმთან; სასწრაფო განყოფილება განკუთვნილია მძიმე და სასწრაფო სიტუაციებისთვის" }, isCorrect: true },
            { text: { fr: "Aller directement aux urgences, car c'est plus rapide", geo: "პირდაპირ წავიდეს სასწრაფოში, რადგან ეს უფრო სწრაფია" }, isCorrect: false },
            { text: { fr: "Appeler le 15 pour obtenir une ambulance", geo: "დარეკოს 15-ზე სასწრაფო დახმარების მანქანის გამოსაძახებლად" }, isCorrect: false },
            { text: { fr: "Aller à la pharmacie pour obtenir une ordonnance", geo: "წავიდეს აფთიაქში რეცეპტის მისაღებად" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le médecin traitant est le premier recours pour les soins non urgents. Surcharger les urgences pour des cas bénins nuit à la prise en charge des cas graves. »",
            geo: "«სასამბულო ექიმი არის პირველი შემთხვევა არასასწრაფო სამედიცინო დახმარებისთვის. სასწრაფო განყოფილების გადატვირთვა უმნიშვნელო შემთხვევებით აზიანებს მძიმე შემთხვევების მოვლას.»"
        }
    },
    {
        id: "CSP-OP-6",
        question: {
            fr: "Ahmed postule à un emploi mais l'employeur lui dit qu'il ne recrute pas de personnes d'origine étrangère. Qu'est-ce qu'Ahmed peut faire ?",
            geo: "ახმედი ასაქმებაზე განაცხადს წარადგენს, მაგრამ დამსაქმებელი ეუბნება, რომ ის უცხოური წარმოშობის პირებს არ ქირაობს. რა შეუძლია გააკეთოს ახმედმა?"
        },
        options: [
            { text: { fr: "Signaler la discrimination au Défenseur des droits ou porter plainte, car la discrimination à l'embauche est illégale", geo: "განაცხადოს დისკრიმინაციის შესახებ უფლებათა დამცველთან ან წარადგინოს სარჩელი, რადგან დისკრიმინაცია დასაქმებისას უკანონოა" }, isCorrect: true },
            { text: { fr: "Accepter la situation, car l'employeur est libre de choisir ses employés", geo: "შეურიგდეს სიტუაციას, რადგან დამსაქმებელი თავისუფალია თავისი თანამშრომლების არჩევაში" }, isCorrect: false },
            { text: { fr: "Contacter la préfecture pour obtenir une autorisation spéciale de travail", geo: "დაუკავშირდეს პრეფექტურას სამუშაოს სპეციალური ნებართვის მისაღებად" }, isCorrect: false },
            { text: { fr: "Demander au maire d'intervenir auprès de l'employeur", geo: "სთხოვოს მერს დამსაქმებელთან ჩარევა" }, isCorrect: false }
        ],
        remark: {
            fr: "« La discrimination à l'embauche fondée sur l'origine est un délit puni par la loi. Le Défenseur des droits est l'autorité compétente pour recevoir ces signalements. »",
            geo: "«წარმოშობაზე დაფუძნებული დისკრიმინაცია დასაქმებისას არის კანონით დასჯადი დანაშაული. უფლებათა დამცველი არის კომპეტენტური ორგანო ასეთი განცხადებების მისაღებად.»"
        }
    },
    {
        id: "CSP-OP-7",
        question: {
            fr: "Irina vient d'obtenir la nationalité française. Elle souhaite voter aux prochaines élections. Que doit-elle faire avant de pouvoir voter ?",
            geo: "ირინამ ახლახანს მიიღო საფრანგეთის მოქალაქეობა. ის სურვილს გამოთქვამს მომავალ არჩევნებში მონაწილეობის შესახებ. რა უნდა გააკეთოს კენჭისყრამდე?"
        },
        options: [
            { text: { fr: "S'inscrire sur les listes électorales de sa commune", geo: "დარეგისტრირდეს თავისი კომუნის ამომრჩეველთა სიებში" }, isCorrect: true },
            { text: { fr: "Passer un test de civisme à la préfecture", geo: "ჩააბაროს სამოქალაქო ტესტი პრეფექტურაში" }, isCorrect: false },
            { text: { fr: "Obtenir une autorisation de vote de la mairie", geo: "მიიღოს კენჭისყრის ნებართვა მერიისგან" }, isCorrect: false },
            { text: { fr: "Avoir résidé en France pendant 10 ans", geo: "ცხოვრებდეს საფრანგეთში 10 წლის განმავლობაში" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le droit de vote est réservé aux citoyens français. L'inscription sur les listes électorales est indispensable pour pouvoir voter lors des élections. »",
            geo: "«ხმის მიცემის უფლება გამოყოფილია საფრანგეთის მოქალაქეებისთვის. ამომრჩეველთა სიებში რეგისტრაცია აუცილებელია არჩევნებში მონაწილეობისთვის.»"
        }
    },
    {
        id: "CSP-OP-8",
        question: {
            fr: "Leila et Marc se sont mariés religieusement à l'église. Leur mariage est-il reconnu juridiquement par l'État français ?",
            geo: "ლეილა და მარკი ეკლესიაში სარწმუნოებრივად დაქორწინდნენ. აღიარებს თუ არა საფრანგეთის სახელმწიფო მათ ქორწინებას იურიდიულად?"
        },
        options: [
            { text: { fr: "Non ; seul le mariage civil célébré en mairie a une valeur juridique en France", geo: "არა; მხოლოდ მერიაში გამართულ სამოქალაქო ქორწინებას აქვს იურიდიული ძალა საფრანგეთში" }, isCorrect: true },
            { text: { fr: "Oui, un mariage religieux a la même valeur qu'un mariage civil", geo: "დიახ, სარწმუნოებრივ ქორწინებას აქვს იგივე ძალა, რაც სამოქალაქოს" }, isCorrect: false },
            { text: { fr: "Oui, si le prêtre enregistre le mariage auprès de la mairie", geo: "დიახ, თუ მღვდელი ქორწინებას მერიაში დაარეგისტრირებს" }, isCorrect: false },
            { text: { fr: "Oui, dès lors que les deux époux sont majeurs et consentants", geo: "დიახ, იმ შემთხვევაში, თუ ორივე მეუღლე სრულწლოვანი და თანახმაა" }, isCorrect: false }
        ],
        remark: {
            fr: "« En France, seul le mariage civil a une reconnaissance légale. Le mariage religieux relève de la sphère privée et n'a aucune valeur juridique aux yeux de l'État. »",
            geo: "«საფრანგეთში მხოლოდ სამოქალაქო ქორწინებას აქვს სამართლებრივი აღიარება. სარწმუნოებრივი ქორწინება კერძო სფეროს განეკუთვნება და სახელმწიფოს თვალში არ გააჩნია იურიდიული ძალა.»"
        }
    },
    {
        id: "CSP-OP-9",
        question: {
            fr: "Monsieur Petrov veut se débarrasser de son vieux canapé. Il envisage de le déposer sur le trottoir devant son immeuble. Est-ce autorisé ?",
            geo: "მისტერ პეტროვს სურს თავისი ძველი დივნისგან თავის დაღწევა. ის ფიქრობს დატოვოს ის სახლის წინ ტროტუარზე. ნებადართულია ეს?"
        },
        options: [
            { text: { fr: "Non ; il doit contacter la mairie pour une collecte d'encombrants ou déposer le canapé en déchetterie", geo: "არა; მან უნდა დაუკავშირდეს მერიას მსხვილგაბარიტიანი ნარჩენების შეგროვებისთვის ან ჩაიტანოს დივანი ნაგავსაყრელზე" }, isCorrect: true },
            { text: { fr: "Oui, si c'est fait la nuit pour ne pas gêner la circulation", geo: "დიახ, თუ ეს კეთდება ღამით, რომ მოძრაობა არ შეაფერხოს" }, isCorrect: false },
            { text: { fr: "Oui, une fois par mois sans démarche préalable", geo: "დიახ, თვეში ერთხელ, წინასწარი ნაბიჯების გარეშე" }, isCorrect: false },
            { text: { fr: "Oui, s'il prévient ses voisins à l'avance", geo: "დიახ, თუ წინასწარ გააფრთხილებს მეზობლებს" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le dépôt sauvage d'encombrants sur la voie publique est interdit et passible d'une amende. Chaque commune propose un service de collecte ou une déchetterie. »",
            geo: "«მსხვილგაბარიტიანი ნარჩენების თვითნებური დატოვება საჯარო გზაზე აკრძალულია და ისჯება ჯარიმით. ყოველი კომუნა გთავაზობს შეგროვების სამსახურს ან ნაგავსაყრელს.»"
        }
    },
    {
        id: "CSP-OP-10",
        question: {
            fr: "La fille de Madame Osman, élève au collège public, souhaite porter un voile en classe. Le directeur lui demande de le retirer. A-t-il le droit ?",
            geo: "მადამ ოსმანის ქალიშვილი, საჯარო კოლეჯის მოსწავლე, სურს კლასში ჩაჩქანის (ვუალის) ტარება. დირექტორი სთხოვს მის მოხსნას. აქვს თუ არა მას ამის უფლება?"
        },
        options: [
            { text: { fr: "Oui ; la loi de 2004 interdit le port de signes religieux ostensibles dans les établissements scolaires publics", geo: "დიახ; 2004 წლის კანონი კრძალავს თვალსაჩინო რელიგიური სიმბოლოების ტარებას საჯარო სასწავლო დაწესებულებებში" }, isCorrect: true },
            { text: { fr: "Non ; le port du voile est un droit fondamental garanti par la Constitution", geo: "არა; ჩაჩქანის ტარება კონსტიტუციით გარანტირებული ფუნდამენტური უფლებაა" }, isCorrect: false },
            { text: { fr: "Non ; seul le règlement intérieur de chaque établissement peut l'interdire", geo: "არა; მხოლოდ ყოველი დაწესებულების შინაგანაწესს შეუძლია ამის აკრძალვა" }, isCorrect: false },
            { text: { fr: "Oui, mais seulement dans les classes, pas dans les couloirs", geo: "დიახ, მაგრამ მხოლოდ კლასებში, არა დერეფნებში" }, isCorrect: false }
        ],
        remark: {
            fr: "« La loi du 15 mars 2004 interdit les signes religieux ostensibles dans les écoles, collèges et lycées publics. Ce principe s'inscrit dans le cadre de la laïcité à l'école. »",
            geo: "«2004 წლის 15 მარტის კანონი კრძალავს თვალსაჩინო რელიგიური სიმბოლოების ტარებას საჯარო სკოლებში, კოლეჯებსა და ლიცეუმებში. ეს პრინციპი ეფუძნება სკოლის სეკულარიზმს.»"
        }
    },
    {
        id: "CSP-OP-11",
        question: {
            fr: "Un employeur propose à Sofia un contrat de travail avec un salaire inférieur au SMIC. Sofia peut-elle accepter ce contrat ?",
            geo: "დამსაქმებელი სოფიას სთავაზობს სამუშაო ხელშეკრულებას SMIC-ზე დაბალი ხელფასით. შეუძლია თუ არა სოფიას ამ ხელშეკრულებაზე დათანხმება?"
        },
        options: [
            { text: { fr: "Non ; aucun salaire ne peut être inférieur au SMIC, c'est une obligation légale", geo: "არა; არცერთი ხელფასი არ შეიძლება იყოს SMIC-ზე დაბალი, ეს სამართლებრივი ვალდებულებაა" }, isCorrect: true },
            { text: { fr: "Oui, si Sofia accepte volontairement par écrit", geo: "დიახ, თუ სოფია ნებაყოფლობით წერილობით დათანხმდება" }, isCorrect: false },
            { text: { fr: "Oui, pendant la période d'essai uniquement", geo: "დიახ, მხოლოდ გამოსაცდელი ვადის განმავლობაში" }, isCorrect: false },
            { text: { fr: "Oui, pour les emplois à temps partiel inférieurs à 20 heures par semaine", geo: "დიახ, კვირაში 20 საათზე ნაკლები სამუშაოებისთვის" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le SMIC (Salaire Minimum Interprofessionnel de Croissance) est le salaire minimum légal en France. Aucun contrat, même signé volontairement, ne peut prévoir une rémunération inférieure. »",
            geo: "«SMIC (საფრანგეთის მინიმალური ხელფასი) არის საფრანგეთში კანონიერი მინიმალური ხელფასი. არცერთ ხელშეკრულებას, თუნდაც ნებაყოფლობით გაფორმებულს, არ შეუძლია ნაკლები ანაზღაურების გათვალისწინება.»"
        }
    },
    {
        id: "CSP-OP-12",
        question: {
            fr: "Monsieur Lopez vient de trouver un emploi. Doit-il faire des démarches pour bénéficier de l'Assurance maladie ?",
            geo: "მისტერ ლოპეზს ახლახანს იპოვა სამსახური. უნდა გაატაროს თუ არა ღონისძიებები სავალდებულო ჯანმრთელობის დაზღვევით სარგებლობისთვის?"
        },
        options: [
            { text: { fr: "Il est automatiquement affilié à l'Assurance maladie dès son premier emploi ; il peut demander sa carte Vitale à la CPAM", geo: "ის ავტომატურად ირიცხება სავალდებულო ჯანმრთელობის დაზღვევაში პირველი სამუშაოდან; მას შეუძლია CPAM-ში მოითხოვოს Vitale ბარათი" }, isCorrect: true },
            { text: { fr: "Il doit souscrire une assurance privée, car l'Assurance maladie est réservée aux fonctionnaires", geo: "მან უნდა გაფორმოს კერძო დაზღვევა, რადგან სავალდებულო ჯანმრთელობის დაზღვევა მხოლოდ სახელმწიფო მოხელეებისთვისაა" }, isCorrect: false },
            { text: { fr: "Il doit attendre 6 mois de travail pour être affilié à la Sécurité sociale", geo: "მან უნდა დაელოდოს 6 თვის მუშაობას სოციალური დაზღვევაში გასაწევრიანებლად" }, isCorrect: false },
            { text: { fr: "Il doit payer une cotisation spéciale à la mairie pour bénéficier des remboursements", geo: "მან უნდა გადაიხადოს სპეციალური შენატანი მერიაში ანაზღაურებებით სარგებლობისთვის" }, isCorrect: false }
        ],
        remark: {
            fr: "« Tout salarié est automatiquement affilié au régime général de la Sécurité sociale dès l'embauche. La carte Vitale s'obtient auprès de la Caisse Primaire d'Assurance Maladie (CPAM). »",
            geo: "«ყოველი დასაქმებული ავტომატურად ირიცხება სოციალური დაზღვევის ზოგად სქემაში დასაქმების დღიდან. Vitale ბარათი ეძლევა სავალდებულო ჯანდაცვის პირველადი სალაროდან (CPAM).»"
        }
    },
    {
        id: "CSP-OP-13",
        question: {
            fr: "Madame Nguyen est victime d'un vol de téléphone dans le bus. Quelle est la bonne démarche ?",
            geo: "მადამ ნგუენი ავტობუსში ტელეფონის ქურდობის მსხვერპლი გახდა. რა არის სწორი ნაბიჯი?"
        },
        options: [
            { text: { fr: "Porter plainte auprès de la police ou de la gendarmerie le plus tôt possible", geo: "შეიტანოს სარჩელი პოლიციაში ან ჟანდარმერიაში რაც შეიძლება მალე" }, isCorrect: true },
            { text: { fr: "Contacter directement son assurance et ne pas impliquer la police", geo: "პირდაპირ დაუკავშირდეს თავის დამზღვეველ კომპანიას და არ ჩართოს პოლიცია" }, isCorrect: false },
            { text: { fr: "Attendre que le voleur soit retrouvé avant de faire une déclaration", geo: "დაელოდოს ქურდის პოვნას განცხადების გაკეთებამდე" }, isCorrect: false },
            { text: { fr: "Signaler le vol à la mairie pour obtenir une compensation financière", geo: "შეატყობინოს ქურდობის შესახებ მერიას ფინანსური კომპენსაციის მისაღებად" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le dépôt de plainte est la démarche officielle pour signaler une infraction. Il est nécessaire pour toute procédure d'assurance et permet à la police d'enquêter. »",
            geo: "«სარჩელის შეტანა არის ოფიციალური ნაბიჯი სამართალდარღვევის შეტყობინებისთვის. ეს აუცილებელია ნებისმიერი სადაზღვევო პროცედურისთვის და საშუალებას აძლევს პოლიციას გამოიძიოს.»"
        }
    },
    {
        id: "CSP-OP-14",
        question: {
            fr: "Sur les réseaux sociaux, Karim publie un message insultant une personne en raison de ses origines. Que risque-t-il ?",
            geo: "სოციალურ ქსელებში ქარიმი აქვეყნებს შეტყობინებას, რომელიც ინსულტს ახდენს ადამიანის წარმოშობის გამო. რას რისკავს?"
        },
        options: [
            { text: { fr: "Des poursuites pénales pour injure à caractère raciste, car les propos haineux sont punis par la loi même sur internet", geo: "სისხლისსამართლებრივ დევნას რასისტული ხასიათის შეურაცხყოფისთვის, რადგან სიძულვილის გამოხატვა ისჯება კანონით ინტერნეტშიც კი" }, isCorrect: true },
            { text: { fr: "Rien, car les réseaux sociaux sont des espaces privés non soumis à la loi française", geo: "არაფერს, რადგან სოციალური ქსელები კერძო სივრცეებია, რომლებზეც საფრანგეთის კანონი არ ვრცელდება" }, isCorrect: false },
            { text: { fr: "Une simple suppression de son compte par la plateforme, sans conséquence légale", geo: "უბრალოდ პლატფორმის მიერ მისი ანგარიშის წაშლას, სამართლებრივი შედეგების გარეშე" }, isCorrect: false },
            { text: { fr: "Seulement un avertissement de la police si c'est la première fois", geo: "მხოლოდ პოლიციის გაფრთხილებას, თუ ეს პირველი შემთხვევაა" }, isCorrect: false }
        ],
        remark: {
            fr: "« Les propos à caractère raciste, antisémite ou discriminatoire sont des délits punis par la loi française, y compris sur internet. La liberté d'expression ne protège pas les discours de haine. »",
            geo: "«რასისტული, ანტისემიტური ან დისკრიმინაციული გამოხატვა არის საფრანგეთის კანონით დასჯადი დანაშაული, მათ შორის ინტერნეტში. სიტყვის თავისუფლება არ იცავს სიძულვილის ენას.»"
        }
    },
    {
        id: "CSP-OP-15",
        question: {
            fr: "Monsieur Joshi pense qu'un juge a rendu un jugement injuste. Il voudrait que le président de la République annule la décision du juge. Est-ce possible ?",
            geo: "მისტერ ჯოშის აზრით, მოსამართლემ უსამართლო განაჩენი გამოიტანა. ის სურს, რომ რესპუბლიკის პრეზიდენტმა გააუქმოს მოსამართლის გადაწყვეტილება. შესაძლებელია ეს?"
        },
        options: [
            { text: { fr: "Non ; la justice est indépendante du pouvoir exécutif ; le président ne peut pas annuler une décision de justice", geo: "არა; მართლმსაჯულება დამოუკიდებელია აღმასრულებელი ხელისუფლებისგან; პრეზიდენტს არ შეუძლია სასამართლო გადაწყვეტილების გაუქმება" }, isCorrect: true },
            { text: { fr: "Oui, le président peut gracier ou annuler toute décision de justice par décret", geo: "დიახ, პრეზიდენტს შეუძლია შეიწყალოს ან გააუქმოს ნებისმიერი სასამართლო გადაწყვეტილება დეკრეტით" }, isCorrect: false },
            { text: { fr: "Oui, si le ministre de la Justice donne son accord", geo: "დიახ, თუ იუსტიციის მინისტრი თანახმაა" }, isCorrect: false },
            { text: { fr: "Oui, en cas de décision jugée injuste par le Parlement", geo: "დიახ, თუ პარლამენტი გადაწყვეტილებას უსამართლოდ მიიჩნევს" }, isCorrect: false }
        ],
        remark: {
            fr: "« La séparation des pouvoirs garantit l'indépendance de la justice. Le pouvoir exécutif ne peut intervenir dans les décisions judiciaires. Les voies de recours légales (appel, cassation) sont les seuls moyens de contester un jugement. »",
            geo: "«ხელისუფლების გამიჯვნა უზრუნველყოფს მართლმსაჯულების დამოუკიდებლობას. აღმასრულებელ ხელისუფლებას არ შეუძლია სასამართლო გადაწყვეტილებებში ჩარევა. სამართლებრივი გასაჩივრების გზები (სააპელაციო, საკასაციო) არის განაჩენის გასაჩივრების ერთადერთი საშუალება.»"
        }
    },
    {
        id: "CSP-OP-16",
        question: {
            fr: "Monsieur Dubois vit en France depuis 3 ans et travaille. Son voisin lui dit qu'il n'a pas besoin de déclarer ses revenus puisqu'il est étranger. Est-ce vrai ?",
            geo: "მისტერ დუბუა საფრანგეთში 3 წელია ცხოვრობს და მუშაობს. მეზობელი ეუბნება, რომ მას არ სჭირდება შემოსავლების დეკლარირება, რადგან ის უცხოელია. მართალია ეს?"
        },
        options: [
            { text: { fr: "Non ; toute personne résidant en France et percevant des revenus doit déclarer ses impôts, quelle que soit sa nationalité", geo: "არა; ყველა პირი, რომელიც ცხოვრობს საფრანგეთში და იღებს შემოსავლებს, ვალდებულია გადასახადები გამოაცხადოს, მიუხედავად ეროვნებისა" }, isCorrect: true },
            { text: { fr: "Oui, les étrangers sont exemptés de déclaration fiscale pendant les 5 premières années", geo: "დიახ, უცხოელები გათავისუფლებულნი არიან საგადასახადო დეკლარაციისგან პირველი 5 წლის განმავლობაში" }, isCorrect: false },
            { text: { fr: "Oui, seuls les citoyens français ont l'obligation de déclarer leurs revenus", geo: "დიახ, მხოლოდ საფრანგეთის მოქალაქეებს ეკისრებათ ვალდებულება შემოსავლების გამოცხადებისა" }, isCorrect: false },
            { text: { fr: "Oui, à condition de ne pas posséder de compte bancaire français", geo: "დიახ, იმ პირობით, რომ ფრანგული საბანკო ანგარიში არ გააჩნია" }, isCorrect: false }
        ],
        remark: {
            fr: "« Toute personne résidant fiscalement en France est soumise à l'impôt sur le revenu et doit effectuer une déclaration annuelle, quelle que soit sa nationalité. »",
            geo: "«ყველა პირი, რომელიც ფისკალურად საფრანგეთში ცხოვრობს, ექვემდებარება საშემოსავლო გადასახადს და ვალდებულია ყოველწლიური დეკლარაცია წარადგინოს, მიუხედავად ეროვნებისა.»"
        }
    },
    {
        id: "CSP-OP-17",
        question: {
            fr: "Clara et Théo vivent ensemble depuis 2 ans. Ils souhaitent avoir une reconnaissance officielle de leur couple sans se marier. Quelle démarche peuvent-ils effectuer ?",
            geo: "კლარა და თეო 2 წელია ერთად ცხოვრობენ. მათ სურთ ოფიციალური აღიარება მათი წყვილის ქორწინების გარეშე. რა ნაბიჯი შეუძლიათ გადადგან?"
        },
        options: [
            { text: { fr: "Signer un PACS (Pacte Civil de Solidarité) en mairie ou chez un notaire", geo: "ხელი მოაწერონ PACS-ს (სამოქალაქო სოლიდარობის პაქტი) მერიაში ან ნოტარიუსთან" }, isCorrect: true },
            { text: { fr: "Faire enregistrer leur union à la préfecture comme concubinage officiel", geo: "პრეფექტურაში დაარეგისტრირონ მათი კავშირი ოფიციალური თანაცხოვრებით" }, isCorrect: false },
            { text: { fr: "Signer une déclaration de vie commune devant le tribunal", geo: "სასამართლოში ხელი მოაწერონ ერთობლივი ცხოვრების დეკლარაციას" }, isCorrect: false },
            { text: { fr: "Déposer une demande de reconnaissance de couple au consulat", geo: "კონსულატში შეიტანონ წყვილის აღიარების მოთხოვნა" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le PACS est un contrat conclu entre deux personnes majeures pour organiser leur vie commune. Il confère des droits et des obligations proches de ceux du mariage, sans en avoir tous les effets. »",
            geo: "«PACS არის ხელშეკრულება, რომელიც ორ სრულწლოვან პირს შორის იდება ერთობლივი ცხოვრების მოწესრიგებისთვის. ის ანიჭებს ქორწინების მსგავს უფლებებსა და ვალდებულებებს, ყველა ეფექტის გარეშე.»"
        }
    },
    {
        id: "CSP-OP-18",
        question: {
            fr: "Madame Yılmaz subit des violences de la part de son mari depuis plusieurs mois. Elle a peur de le dénoncer. Que peut-elle faire ?",
            geo: "მადამ ილმაზი რამდენი თვეა ქმრის ძალადობის მსხვერპლია. ის ეშინია მისი გამოქომაგების. რა შეუძლია გააკეთოს?"
        },
        options: [
            { text: { fr: "Porter plainte à la police ou à la gendarmerie ; des dispositifs d'accueil et de protection existent pour les victimes", geo: "სარჩელი შეიტანოს პოლიციაში ან ჟანდარმერიაში; მსხვერპლთათვის არსებობს მიღებისა და დაცვის მექანიზმები" }, isCorrect: true },
            { text: { fr: "Accepter la situation pour ne pas perturber la vie de famille", geo: "მიიღოს სიტუაცია, რათა ოჯახური ცხოვრება არ დაარღვიოს" }, isCorrect: false },
            { text: { fr: "Contacter la mairie pour obtenir un logement d'urgence sans impliquer la police", geo: "დაუკავშირდეს მერიას სასწრაფო საცხოვრებლის მისაღებად, პოლიციის ჩართვის გარეშე" }, isCorrect: false },
            { text: { fr: "Attendre que les violences cessent d'elles-mêmes avant d'agir", geo: "დაელოდოს ძალადობის თავისთავად შეჩერებას ქმედებამდე" }, isCorrect: false }
        ],
        remark: {
            fr: "« Les violences conjugales sont un délit grave puni par la loi. Le numéro national d'écoute 3919 est disponible 24h/24 pour les victimes de violences. Les forces de l'ordre sont tenues d'accueillir toute plainte. »",
            geo: "«ოჯახური ძალადობა კანონით დასჯადი მძიმე დანაშაულია. ეროვნული მოსმენის ნომერი 3919 ხელმისაწვდომია 24/7 ძალადობის მსხვერპლთათვის. სამართალდამცავი ორგანოები ვალდებულნი არიან ყოველი სარჩელი მიიღონ.»"
        }
    },
    {
        id: "CSP-OP-19",
        question: {
            fr: "Monsieur Park est locataire d'un appartement. Son propriétaire veut l'expulser sans préavis parce qu'il a un mois de retard de loyer. Est-ce légal ?",
            geo: "მისტერ პარქი ბინის მოიჯარეა. მისი მესაკუთრე სურს მისი გამოსახლება წინასწარი შეტყობინების გარეშე, ერთი თვის გადაახდელი ქირის გამო. კანონიერია ეს?"
        },
        options: [
            { text: { fr: "Non ; l'expulsion sans décision de justice est illégale ; le propriétaire doit passer par un tribunal", geo: "არა; სასამართლოს გადაწყვეტილების გარეშე გამოსახლება უკანონოა; მესაკუთრემ სასამართლოს გზა უნდა გაიაროს" }, isCorrect: true },
            { text: { fr: "Oui, un mois de retard suffit à justifier une expulsion immédiate", geo: "დიახ, ერთი თვის დაგვიანება საკმარისია დაუყოვნებელი გამოსახლების გასამართლებლად" }, isCorrect: false },
            { text: { fr: "Oui, si le propriétaire fournit un préavis de 48 heures à l'avance", geo: "დიახ, თუ მესაკუთრე 48-საათიან წინასწარ შეტყობინებას გასცემს" }, isCorrect: false },
            { text: { fr: "Oui, car le contrat de bail peut prévoir une clause d'expulsion immédiate", geo: "დიახ, რადგან იჯარის ხელშეკრულებამ შეიძლება გაითვალისწინოს დაუყოვნებელი გამოსახლების პუნქტი" }, isCorrect: false }
        ],
        remark: {
            fr: "« Toute expulsion locative doit être prononcée par un juge. L'expulsion d'un locataire sans décision judiciaire est une voie de fait punie par la loi. Des délais de grâce peuvent être accordés par le tribunal. »",
            geo: "«ნებისმიერი მოიჯარის გამოსახლება უნდა გამოაცხადოს მოსამართლემ. მოიჯარის გამოსახლება სასამართლოს გადაწყვეტილების გარეშე კანონით დასჯადი თვითნებობაა. სასამართლომ შეიძლება მიანიჭოს გადავადების ვადები.»"
        }
    },
    {
        id: "CSP-OP-20",
        question: {
            fr: "Madame Toure souhaite obtenir la nationalité française après 5 ans de résidence régulière. Auprès de qui doit-elle déposer sa demande ?",
            geo: "მადამ ტურე სურს საფრანგეთის მოქალაქეობის მიღება 5 წლიანი კანონიერი ბინადრობის შემდეგ. ვის უნდა წარუდგინოს განაცხადი?"
        },
        options: [
            { text: { fr: "À la préfecture ou sous-préfecture de son lieu de résidence", geo: "თავისი საცხოვრებელი ადგილის პრეფექტურაში ან სუბ-პრეფექტურაში" }, isCorrect: true },
            { text: { fr: "Directement au ministère de l'Intérieur à Paris", geo: "პირდაპირ შინაგან საქმეთა სამინისტროში პარიზში" }, isCorrect: false },
            { text: { fr: "Au tribunal administratif de son département", geo: "მისი დეპარტამენტის ადმინისტრაციულ სასამართლოში" }, isCorrect: false },
            { text: { fr: "À la mairie de sa commune, qui transmet ensuite au gouvernement", geo: "თავისი კომუნის მერიაში, რომელიც შემდეგ გადასცემს მთავრობას" }, isCorrect: false }
        ],
        remark: {
            fr: "« La demande de naturalisation par décret se dépose à la préfecture ou sous-préfecture. Le dossier est ensuite instruit par la direction des naturalisations du ministère de l'Intérieur. »",
            geo: "«ნატურალიზაციის მოთხოვნა დეკრეტით წარდგენილი უნდა იყოს პრეფექტურაში ან სუბ-პრეფექტურაში. შემდეგ საქმეს განიხილავს შინაგან საქმეთა სამინისტროს ნატურალიზაციის დირექციაში.»"
        }
    },
    {
        id: "CSP-OP-21",
        question: {
            fr: "Le titre de séjour de Monsieur Seck expire dans 15 jours. Il n'a pas encore fait de demande de renouvellement. Que doit-il faire ?",
            geo: "მისტერ სეკის ბინადრობის ნებართვა 15 დღეში იწურება. მან ჯერ კიდევ არ შეიტანა განახლების განაცხადი. რა უნდა გააკეთოს?"
        },
        options: [
            { text: { fr: "Déposer immédiatement une demande de renouvellement à la préfecture avant l'expiration du titre", geo: "დაუყოვნებლივ შეიტანოს განახლების განაცხადი პრეფექტურაში ნებართვის ვადის გასვლამდე" }, isCorrect: true },
            { text: { fr: "Attendre que la préfecture le contacte automatiquement pour le renouvellement", geo: "დაელოდოს, სანამ პრეფექტურა ავტომატურად დაუკავშირდება განახლებისთვის" }, isCorrect: false },
            { text: { fr: "Ne rien faire ; un titre expiré reste valable encore 3 mois", geo: "არაფერი გააკეთოს; ვადაგასული ნებართვა კიდევ 3 თვე დარჩება ძალაში" }, isCorrect: false },
            { text: { fr: "Contacter son employeur pour que celui-ci fasse la démarche à sa place", geo: "დაუკავშირდეს თავის დამსაქმებელს, რათა ამ უკანასკნელმა ნაბიჯი გადადგას მის ნაცვლად" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le renouvellement du titre de séjour doit être demandé avant son expiration, généralement 2 à 3 mois avant. Un titre expiré peut entraîner une situation irrégulière et des sanctions. »",
            geo: "«ბინადრობის ნებართვის განახლება უნდა მოითხოვოს მის გასვლამდე, ჩვეულებრივ 2-დან 3 თვით ადრე. ვადაგასული ნებართვა შეიძლება გამოიწვიოს არაკანონიერი სტატუსი და სანქციები.»"
        }
    },
    {
        id: "CSP-OP-22",
        question: {
            fr: "Un journaliste publie un article critiquant la politique du gouvernement. Le ministre concerné veut faire supprimer l'article. A-t-il le droit ?",
            geo: "ჟურნალისტი აქვეყნებს სტატიას, სადაც აკრიტიკებს მთავრობის პოლიტიკას. შესაბამისი მინისტრი სურს სტატიის წაშლა. აქვს თუ არა მას ამის უფლება?"
        },
        options: [
            { text: { fr: "Non ; la liberté de la presse protège les journalistes dans leur mission d'information et de critique du pouvoir", geo: "არა; პრესის თავისუფლება იცავს ჟურნალისტებს ინფორმაციისა და ხელისუფლების კრიტიკის მისიაში" }, isCorrect: true },
            { text: { fr: "Oui, un ministre peut censurer tout article qui nuit à l'image du gouvernement", geo: "დიახ, მინისტრს შეუძლია ცენზურა დაუწესოს ნებისმიერ სტატიას, რომელიც ზარალს აყენებს მთავრობის იმიჯს" }, isCorrect: false },
            { text: { fr: "Oui, si l'article contient des opinions politiques et non des faits vérifiés", geo: "დიახ, თუ სტატია შეიცავს პოლიტიკურ მოსაზრებებს და არა დადასტურებულ ფაქტებს" }, isCorrect: false },
            { text: { fr: "Oui, le gouvernement peut suspendre une publication pendant 30 jours", geo: "დიახ, მთავრობას შეუძლია გამოცემა 30 დღით გადადოს" }, isCorrect: false }
        ],
        remark: {
            fr: "« La liberté de la presse est garantie par la loi du 29 juillet 1881. Elle protège le droit d'informer et de critiquer le pouvoir, sauf en cas de diffamation, d'injure ou d'incitation à la haine. »",
            geo: "«პრესის თავისუფლება გარანტირებულია 1881 წლის 29 ივლისის კანონით. ის იცავს ინფორმაციისა და ხელისუფლების კრიტიკის უფლებას, გარდა ცილისწამების, შეურაცხყოფის ან სიძულვილის გაღვივების შემთხვევებისა.»"
        }
    },
    {
        id: "CSP-OP-23",
        question: {
            fr: "Madame Kim vient d'accoucher. Elle travaille en CDI. Combien de semaines de congé maternité peut-elle prendre pour un premier enfant ?",
            geo: "მადამ კიმმა ახლახანს გააჩინა შვილი. ის CDI-ზე (განუსაზღვრელი ვადით) მუშაობს. რამდენი კვირის დეკრეტული შვებულება შეუძლია აიღოს პირველ შვილზე?"
        },
        options: [
            { text: { fr: "16 semaines (6 semaines avant et 10 semaines après la naissance) pour un premier enfant", geo: "16 კვირა (6 კვირა დაბადებამდე და 10 კვირა დაბადების შემდეგ) პირველი შვილისთვის" }, isCorrect: true },
            { text: { fr: "8 semaines uniquement après la naissance", geo: "მხოლოდ 8 კვირა დაბადების შემდეგ" }, isCorrect: false },
            { text: { fr: "6 mois au total, entièrement au choix de la mère", geo: "სულ 6 თვე, მთლიანად დედის არჩევით" }, isCorrect: false },
            { text: { fr: "Aucun congé légal ; cela dépend du contrat de travail", geo: "კანონიერი შვებულება არ არსებობს; ეს დამოკიდებულია სამუშაო ხელშეკრულებაზე" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le congé maternité est de 16 semaines pour les 2 premiers enfants (6 semaines prénatales et 10 postnales). Il est indemnisé par la Sécurité sociale et l'emploi est protégé pendant cette période. »",
            geo: "«დეკრეტული შვებულება პირველი 2 შვილისთვის 16 კვირაა (6 კვირა მშობიარობამდე და 10 კვირა შემდეგ). მას ანაზღაურებს სოციალური დაზღვევა და ამ პერიოდში სამსახური დაცულია.»"
        }
    },
    {
        id: "CSP-OP-24",
        question: {
            fr: "Monsieur Alves reçoit un e-mail lui demandant ses coordonnées bancaires pour débloquer un remboursement de la Sécurité sociale. Que doit-il faire ?",
            geo: "მისტერ ალვეს ელ-ფოსტა მიიღო, რომელიც სთხოვს მის საბანკო რეკვიზიტებს სოციალური დაზღვევის ანაზღაურების განბლოკვისთვის. რა უნდა გააკეთოს?"
        },
        options: [
            { text: { fr: "Ne pas répondre et signaler ce message comme tentative de phishing (arnaque) ; la Sécurité sociale ne demande jamais ses coordonnées bancaires par e-mail", geo: "არ გასცეს პასუხი და შეატყობინოს ეს შეტყობინება ფიშინგის (თაღლითობის) მცდელობად; სოციალური დაზღვევა არასოდეს ითხოვს საბანკო რეკვიზიტებს ელ-ფოსტით" }, isCorrect: true },
            { text: { fr: "Répondre rapidement pour ne pas perdre son remboursement", geo: "სწრაფად გასცეს პასუხი, რათა ანაზღაურება არ დაკარგოს" }, isCorrect: false },
            { text: { fr: "Appeler le numéro indiqué dans l'e-mail pour vérifier la demande", geo: "დარეკოს ელ-ფოსტაში მითითებულ ნომერზე მოთხოვნის შესამოწმებლად" }, isCorrect: false },
            { text: { fr: "Transmettre l'e-mail à la mairie pour qu'elle traite la demande", geo: "ელ-ფოსტა გაუგზავნოს მერიას მოთხოვნის დამუშავებისთვის" }, isCorrect: false }
        ],
        remark: {
            fr: "« La fraude par hameçonnage (phishing) consiste à usurper l'identité d'organismes officiels pour soutirer des données bancaires. Il faut signaler ces tentatives sur la plateforme Pharos ou au 17. »",
            geo: "«ფიშინგის თაღლითობა მოიცავს ოფიციალური ორგანიზაციების იდენტობის გამოყენებას საბანკო მონაცემების მოსაპოვებლად. ეს მცდელობები უნდა შეატყობინოთ Pharos პლატფორმაზე ან 17-ზე.»"
        }
    },
    {
        id: "CSP-OP-25",
        question: {
            fr: "Madame Rossi veut savoir si elle peut exercer son droit de vote par procuration. Son mari pourrait voter à sa place car elle est hospitalisée le jour du scrutin. Est-ce possible ?",
            geo: "მადამ როსი სურს გაიგოს, შეუძლია თუ არა ხმის მიცემა მინდობილობით. მისი ქმარი შეძლებდა მის ნაცვლად ხმის მიცემას, ვინაიდან ის კენჭისყრის დღეს ჰოსპიტალშია. შესაძლებელია ეს?"
        },
        options: [
            { text: { fr: "Oui ; le vote par procuration est légal en France ; elle peut mandater une personne de confiance inscrite dans la même commune", geo: "დიახ; მინდობილობით კენჭისყრა კანონიერია საფრანგეთში; მას შეუძლია უფლება მიანიჭოს სანდო პირს, რომელიც იმავე კომუნაშია დარეგისტრირებული" }, isCorrect: true },
            { text: { fr: "Non ; le vote en France est strictement personnel et ne peut jamais être délégué", geo: "არა; კენჭისყრა საფრანგეთში მკაცრად პირადია და არასოდეს შეიძლება დელეგირება" }, isCorrect: false },
            { text: { fr: "Oui, mais seulement si son mari est inscrit dans la même commune qu'elle", geo: "დიახ, მაგრამ მხოლოდ იმ შემთხვევაში, თუ მისი ქმარი იმავე კომუნაშია დარეგისტრირებული, სადაც ის" }, isCorrect: false },
            { text: { fr: "Oui, en votant par internet depuis l'hôpital via le portail gouvernemental", geo: "დიახ, ინტერნეტით კენჭისყრით ჰოსპიტალიდან სამთავრობო პორტალის მეშვეობით" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le vote par procuration permet à un électeur empêché de voter de confier son vote à un autre électeur de son choix, inscrit dans la même commune. La demande se fait au commissariat ou à la gendarmerie. »",
            geo: "«მინდობილობით კენჭისყრა საშუალებას აძლევს ხმის მიცემაში დაბრკოლებულ ამომრჩეველს, გადასცეს ხმა მის მიერ არჩეული სხვა ამომრჩეველს, რომელიც იმავე კომუნაშია დარეგისტრირებული. მოთხოვნა კეთდება კომისარიატში ან ჟანდარმერიაში.»"
        }
    },
    {
        id: "CSP-OP-26",
        question: {
            fr: "Monsieur Diallo apprend que son propriétaire a pénétré dans son appartement en son absence sans sa permission. Que peut-il faire ?",
            geo: "მისტერ დიალო შეიტყო, რომ მისი მესაკუთრე მის ბინაში შევიდა მის არყოფნაში ნებართვის გარეშე. რა შეუძლია გააკეთოს?"
        },
        options: [
            { text: { fr: "Porter plainte pour violation de domicile, car entrer chez quelqu'un sans autorisation est un délit", geo: "სარჩელი შეიტანოს საცხოვრებლის ხელყოფისთვის, რადგან ვინმეს სახლში ნებართვის გარეშე შესვლა დანაშაულია" }, isCorrect: true },
            { text: { fr: "Accepter la situation car le propriétaire a le droit d'entrer dans son bien", geo: "მიიღოს სიტუაცია, რადგან მესაკუთრეს უფლება აქვს შეიდეს თავის საკუთრებაში" }, isCorrect: false },
            { text: { fr: "Changer la serrure sans en informer le propriétaire", geo: "გააცვალოს საკეტი მესაკუთრის ინფორმირების გარეშე" }, isCorrect: false },
            { text: { fr: "Demander à la mairie de médiatiser le conflit avec le propriétaire", geo: "სთხოვოს მერიას მესაკუთრესთან კონფლიქტის მედიაცია" }, isCorrect: false }
        ],
        remark: {
            fr: "« La violation de domicile est un délit puni d'un an d'emprisonnement et 15 000 € d'amende (article 226-4 du Code pénal). Même le propriétaire n'a pas le droit d'entrer chez son locataire sans accord. »",
            geo: "«საცხოვრებლის ხელყოფა არის დანაშაული, რომელიც ისჯება ერთი წლის პატიმრობით და 15 000 € ჯარიმით (სისხლის სამართლის კოდექსის 226-4 მუხლი). მესაკუთრეს კი არ აქვს უფლება, შევიდეს მოიჯარის სახლში შეთანხმების გარეშე.»"
        }
    },
    {
        id: "CSP-OP-27",
        question: {
            fr: "Amina reçoit un avis d'imposition et constate une erreur dans le calcul de ses impôts. Que peut-elle faire ?",
            geo: "ამინა იღებს გადასახადის შეტყობინებას და ამჩნევს შეცდომას გადასახადის გამოთვლაში. რა შეუძლია გააკეთოს?"
        },
        options: [
            { text: { fr: "Formuler une réclamation auprès de son centre des Finances publiques dans les délais légaux", geo: "კანონიერ ვადებში წარუდგინოს საჩივარი თავისი საჯარო ფინანსების ცენტრს" }, isCorrect: true },
            { text: { fr: "Refuser de payer l'impôt tant que l'erreur n'est pas corrigée", geo: "უარი თქვას გადასახადის გადახდაზე სანამ შეცდომა არ გამოსწორდება" }, isCorrect: false },
            { text: { fr: "Porter plainte pénale contre l'administration fiscale", geo: "სისხლისსამართლებრივი სარჩელი შეიტანოს საგადასახადო ადმინისტრაციის წინააღმდეგ" }, isCorrect: false },
            { text: { fr: "Contacter directement le ministre des Finances pour signaler l'erreur", geo: "პირდაპირ დაუკავშირდეს ფინანსთა მინისტრს შეცდომის შეტყობინებისთვის" }, isCorrect: false }
        ],
        remark: {
            fr: "« Tout contribuable peut contester son imposition en adressant une réclamation à la direction des Finances publiques dont il dépend. Le recours doit être effectué avant le 31 décembre de l'année suivante. »",
            geo: "«ნებისმიერ გადამხდელს შეუძლია გაასაჩივროს დასაბეგრი სიდიდე, საჩივრის გაგზავნით საჯარო ფინანსების იმ დირექციაში, რომელსაც ეკუთვნის. საჩივარი უნდა შევიდეს მომდევნო წლის 31 დეკემბრამდე.»"
        }
    },
    {
        id: "CSP-OP-28",
        question: {
            fr: "Monsieur Nguema a été condamné pour un délit il y a 10 ans mais a purgé sa peine. Il cherche un emploi. L'employeur peut-il lui refuser un poste en raison de ce passé judiciaire ?",
            geo: "მისტერ ნგვემა 10 წლის წინ მსჯავრდებული იყო დანაშაულისთვის, მაგრამ სასჯელი მოიხადა. ის სამსახურს ეძებს. შეუძლია თუ არა დამსაქმებელს უარი თქვას თანამდებობაზე ამ სასამართლო წარსულის გამო?"
        },
        options: [
            { text: { fr: "Cela dépend du poste : certains emplois sensibles (éducation, sécurité) peuvent légalement exiger un casier judiciaire vierge", geo: "ეს დამოკიდებულია თანამდებობაზე: გარკვეული სენსიტიური სამსახურები (განათლება, უსაფრთხოება) შეიძლება კანონიერად ითხოვდეს სუფთა სისხლის სამართლის ჩანაწერს" }, isCorrect: true },
            { text: { fr: "Non, un employeur ne peut jamais tenir compte d'une condamnation passée", geo: "არა, დამსაქმებელს არასოდეს შეუძლია წინა მსჯავრდების გათვალისწინება" }, isCorrect: false },
            { text: { fr: "Oui, tout employeur peut refuser n'importe qui ayant un casier judiciaire", geo: "დიახ, ნებისმიერ დამსაქმებელს შეუძლია უარი თქვას სისხლის სამართლის ჩანაწერის მქონე ნებისმიერ პირზე" }, isCorrect: false },
            { text: { fr: "Non, car une peine purgée efface totalement toute trace judiciaire", geo: "არა, რადგან მოხდილი სასჯელი მთლიანად შლის ნებისმიერ სასამართლო კვალს" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le bulletin n°3 du casier judiciaire, délivré à la demande, ne mentionne que les condamnations les plus graves. Certains emplois (enseignement, services aux enfants) nécessitent un casier vierge, d'autres non. »",
            geo: "«სისხლის სამართლის ჩანაწერის მე-3 ბიულეტენი, გაცემული მოთხოვნით, ახსენებს მხოლოდ ყველაზე მძიმე მსჯავრდებებს. ზოგიერთი სამსახური (სასწავლო, ბავშვებთან) ითხოვს სუფთა ჩანაწერს, სხვები კი არა.»"
        }
    },
    {
        id: "CSP-OP-29",
        question: {
            fr: "Monsieur Costa s'inscrit à une association de quartier qui organise des activités culturelles. Peut-il participer à la vie de l'association même sans être de nationalité française ?",
            geo: "მისტერ კოსტა ირიცხება სამეზობლო ასოციაციაში, რომელიც კულტურულ ღონისძიებებს აწყობს. შეუძლია თუ არა მონაწილეობა ასოციაციის ცხოვრებაში, თუნდაც საფრანგეთის მოქალაქეობის გარეშე?"
        },
        options: [
            { text: { fr: "Oui ; toute personne peut adhérer à une association loi 1901, quelle que soit sa nationalité", geo: "დიახ; ნებისმიერ პირს შეუძლია 1901 წლის კანონის ასოციაციაში გაწევრიანება, მიუხედავად ეროვნებისა" }, isCorrect: true },
            { text: { fr: "Non ; seuls les citoyens français peuvent adhérer à des associations reconnues par l'État", geo: "არა; მხოლოდ საფრანგეთის მოქალაქეებს შეუძლიათ სახელმწიფოს მიერ აღიარებულ ასოციაციებში გაწევრიანება" }, isCorrect: false },
            { text: { fr: "Oui, mais il ne peut pas voter lors des assemblées générales ni être élu au bureau", geo: "დიახ, მაგრამ მას არ შეუძლია ხმის მიცემა გენერალური კრებების დროს და არც ბიუროში არჩევა" }, isCorrect: false },
            { text: { fr: "Non ; il doit d'abord obtenir une autorisation préfectorale pour rejoindre une association", geo: "არა; ჯერ უნდა მიიღოს პრეფექტურის ნებართვა ასოციაციაში გასაერთიანებლად" }, isCorrect: false }
        ],
        remark: {
            fr: "« La liberté d'association est garantie en France depuis la loi de 1901. Toute personne, de toute nationalité, peut librement créer ou rejoindre une association sans autorisation préalable. »",
            geo: "«ასოციაციის თავისუფლება საფრანგეთში გარანტირებულია 1901 წლის კანონიდან. ნებისმიერ პირს, ნებისმიერი ეროვნებისა, შეუძლია თავისუფლად შექმნას ან შეუერთდეს ასოციაციას წინასწარი ნებართვის გარეშე.»"
        }
    },
    {
        id: "CSP-OP-30",
        question: {
            fr: "Monsieur Elan reçoit une convocation du tribunal. Il ne comprend pas bien le français et craint de ne pas pouvoir se défendre. A-t-il droit à un interprète ?",
            geo: "მისტერ ელანი იღებს სასამართლოს გამოძახებას. ის კარგად ვერ ესმის ფრანგული და ეშინია, რომ ვერ შეძლებს თავის დაცვას. აქვს თუ არა მას მთარგმნელის უფლება?"
        },
        options: [
            { text: { fr: "Oui ; toute personne qui ne comprend pas le français a droit à un interprète gratuit lors d'une procédure judiciaire", geo: "დიახ; ყველა პირს, ვინც ვერ ესმის ფრანგული, უფლება აქვს უფასო მთარგმნელზე სასამართლო პროცედურის დროს" }, isCorrect: true },
            { text: { fr: "Non ; c'est à lui de trouver et de payer lui-même un interprète", geo: "არა; მას თვითონ უნდა იპოვოს და გადაიხადოს მთარგმნელი" }, isCorrect: false },
            { text: { fr: "Oui, mais seulement s'il prouve qu'il réside en France depuis moins de 2 ans", geo: "დიახ, მაგრამ მხოლოდ იმ შემთხვევაში, თუ დაამტკიცებს, რომ საფრანგეთში 2 წელზე ნაკლები ხნის განმავლობაში ცხოვრობს" }, isCorrect: false },
            { text: { fr: "Seulement pour les affaires pénales, pas pour les affaires civiles", geo: "მხოლოდ სისხლის სამართლის საქმეებისთვის, არა სამოქალაქო საქმეებისთვის" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le droit à l'interprète est garanti par la Convention européenne des droits de l'homme (article 6). Toute personne qui ne maîtrise pas la langue de la procédure a droit à une assistance gratuite. »",
            geo: "«მთარგმნელის უფლება გარანტირებულია ადამიანის უფლებათა ევროპული კონვენციით (მუხლი 6). ნებისმიერ პირს, ვინც ვერ ფლობს სამართლებრივი პროცედურის ენას, უფლება აქვს უფასო დახმარებაზე.»"
        }
    },
];
