// includes/CSP/PVR.js
// Source : formation-civique.interieur.gouv.fr — liste officielle CSP

export const questionsCSP_PVR = [
    {
        id: "CSP-PVR-1",
        question: { fr: "À quoi correspond la date du 14 juillet ?", geo: "რას შეესაბამება 14 ივლისის თარიღი?" },
        options: [
            { text: { fr: "La prise de la Bastille en 1789 et la fête nationale française", geo: "ბასტილიის შტურმი 1789 წელს და საფრანგეთის ეროვნული დღესასწაული" }, isCorrect: true },
            { text: { fr: "La signature de la Constitution de la Ve République (1958)", geo: "მე-5 რესპუბლიკის კონსტიტუციის ხელმოწერა (1958)" }, isCorrect: false },
            { text: { fr: "La fin de la Seconde Guerre mondiale en France (1945)", geo: "მეორე მსოფლიო ომის დასასრული საფრანგეთში (1945)" }, isCorrect: false },
            { text: { fr: "L'abolition de la peine de mort (1981)", geo: "სიკვდილით დასჯის გაუქმება (1981)" }, isCorrect: false }
        ],
        remark: { fr: "« Le 14 juillet célèbre la prise de la Bastille en 1789, symbole du début de la Révolution française. C'est la fête nationale, marquée par un défilé militaire sur les Champs-Élysées et des feux d'artifice. »", geo: "«14 ივლისი მოიხსენიებს 1789 წლის ბასტილიის შტურმს, საფრანგეთის რევოლუციის დაწყების სიმბოლოს. ეს ეროვნული დღესასწაულია, სადაც სამხედრო აღლუმი გაიმართება შანზელიზეზე.»" }
    },
    {
        id: "CSP-PVR-2",
        question: { fr: "Quel est l'un des symboles de la République française ?", geo: "რომელია საფრანგეთის რესპუბლიკის ერთ-ერთი სიმბოლო?" },
        options: [
            { text: { fr: "La Marseillaise (l'hymne national)", geo: "მარსელიეზა (ეროვნული ჰიმნი)" }, isCorrect: true },
            { text: { fr: "La fleur de lys (symbole royal)", geo: "ფლერ-დე-ლი (სამეფო სიმბოლო)" }, isCorrect: false },
            { text: { fr: "La couronne royale", geo: "სამეფო გვირგვინი" }, isCorrect: false },
            { text: { fr: "La cathédrale Notre-Dame uniquement", geo: "მხოლოდ ნოტრ-დამის ტაძარი" }, isCorrect: false }
        ],
        remark: { fr: "« Les symboles officiels de la République française sont : le drapeau tricolore, La Marseillaise, Marianne, la devise "Liberté, Égalité, Fraternité" et le coq gaulois. »", geo: "«საფრანგეთის რესპუბლიკის ოფიციალური სიმბოლოებია: სამფეროვანი დროშა, მარსელიეზა, მარიანა, დევიზი "თავისუფლება, თანასწორობა, ძმობა" და გალური მამალი.»" }
    },
    {
        id: "CSP-PVR-3",
        question: { fr: "Le principe d'égalité signifie que :", geo: "თანასწორობის პრინციპი ნიშნავს, რომ:" },
        options: [
            { text: { fr: "Tous les individus ont les mêmes droits devant la loi, sans distinction d'origine ou de religion", geo: "ყველა ადამიანს კანონის წინაშე ერთნაირი უფლებები აქვს, წარმოშობის ან რელიგიის განურჩევლად" }, isCorrect: true },
            { text: { fr: "Tous les Français doivent avoir exactement le même salaire", geo: "ყველა ფრანგს ზუსტად ერთი და იგივე ხელფასი უნდა ჰქონდეს" }, isCorrect: false },
            { text: { fr: "Seuls les hommes peuvent occuper des postes de direction", geo: "მხოლოდ მამაკაცებს შეუძლიათ სახელმძღვანელო თანამდებობების დაკავება" }, isCorrect: false },
            { text: { fr: "Les étrangers ont moins de droits que les citoyens français", geo: "უცხოელებს ფრანგ მოქალაქეებზე ნაკლები უფლებები აქვთ" }, isCorrect: false }
        ],
        remark: { fr: "« L'égalité signifie que tous les individus, quelles que soient leurs origines, leur religion ou leur sexe, ont les mêmes droits et les mêmes obligations devant la loi. »", geo: "«თანასწორობა ნიშნავს, რომ ყველა ადამიანს, წარმოშობის, რელიგიისა ან სქესის განურჩევლად, კანონის წინაშე ერთნაირი უფლებები და ვალდებულებები აქვს.»" }
    },
    {
        id: "CSP-PVR-4",
        question: { fr: "\"Liberté, égalité, fraternité\", c'est :", geo: "\"თავისუფლება, თანასწორობა, ძმობა\" — ეს არის:" },
        options: [
            { text: { fr: "La devise de la République française", geo: "საფრანგეთის რესპუბლიკის დევიზი" }, isCorrect: true },
            { text: { fr: "Le titre de l'hymne national français", geo: "საფრანგეთის ეროვნული ჰიმნის სათაური" }, isCorrect: false },
            { text: { fr: "Le nom de la Constitution de 1958", geo: "1958 წლის კონსტიტუციის სახელი" }, isCorrect: false },
            { text: { fr: "Le slogan d'un parti politique français", geo: "ფრანგი პოლიტიკური პარტიის სლოგანი" }, isCorrect: false }
        ],
        remark: { fr: "« La devise "Liberté, Égalité, Fraternité" est inscrite dans la Constitution française (article 2) et visible sur les bâtiments officiels. Elle est héritée de la Révolution de 1789. »", geo: "«დევიზი "თავისუფლება, თანასწორობა, ძმობა" ჩაწერილია საფრანგეთის კონსტიტუციაში (მე-2 მუხლი) და ჩანს ოფიციალური შენობების ფასადებზე. ის 1789 წლის რევოლუციის მემკვიდრეობაა.»" }
    },
    {
        id: "CSP-PVR-5",
        question: { fr: "A-t-on le droit d'insulter publiquement quelqu'un parce qu'il est différent (handicap, apparence, sexe…) ?", geo: "შეიძლება თუ არა საჯაროდ შეურაცხყოფა მიაყენო ვინმეს, რადგან ის განსხვავებულია (ინვალიდობა, გარეგნობა, სქესი…)?" },
        options: [
            { text: { fr: "Non, c'est une discrimination punie par la loi", geo: "არა, ეს კანონით დასჯადი დისკრიმინაციაა" }, isCorrect: true },
            { text: { fr: "Oui, la liberté d'expression autorise tout propos", geo: "დიახ, სიტყვის თავისუფლება ნებისმიერ განცხადებას იძლევა" }, isCorrect: false },
            { text: { fr: "Seulement si c'est une opinion personnelle et non publique", geo: "მხოლოდ იმ შემთხვევაში, თუ ეს პირადი და არა საჯარო აზრია" }, isCorrect: false },
            { text: { fr: "Oui, dans l'espace privé uniquement", geo: "დიახ, მხოლოდ კერძო სივრცეში" }, isCorrect: false }
        ],
        remark: { fr: "« Les injures discriminatoires fondées sur le handicap, le sexe, l'origine ou la religion sont punis par la loi. La liberté d'expression a des limites légales. »", geo: "«ინვალიდობის, სქესის, წარმოშობის ან რელიგიის საფუძველზე დისკრიმინაციული შეურაცხყოფა ისჯება კანონით. სიტყვის თავისუფლებას სამართლებრივი ლიმიტები აქვს.»" }
    },
    {
        id: "CSP-PVR-6",
        question: { fr: "Certains métiers peuvent-ils être réservés aux hommes ?", geo: "შეიძლება თუ არა გარკვეული პროფესიები მხოლოდ მამაკაცებისთვის იყოს?" },
        options: [
            { text: { fr: "Non, l'égalité professionnelle entre femmes et hommes est garantie par la loi", geo: "არა, ქალებსა და მამაკაცებს შორის პროფესიული თანასწორობა კანონით გარანტირებულია" }, isCorrect: true },
            { text: { fr: "Oui, certains métiers dangereux sont légalement réservés aux hommes", geo: "დიახ, გარკვეული საშიში პროფესიები კანონიერად მხოლოდ მამაკაცებისთვისაა" }, isCorrect: false },
            { text: { fr: "Oui, si l'employeur le décide librement", geo: "დიახ, თუ დამსაქმებელი ასე გადაწყვეტს" }, isCorrect: false },
            { text: { fr: "Seulement pour l'armée et la police nationale", geo: "მხოლოდ არმიისა და ეროვნული პოლიციისთვის" }, isCorrect: false }
        ],
        remark: { fr: "« La loi interdit toute discrimination à l'embauche fondée sur le sexe. Les femmes et les hommes ont les mêmes droits d'accéder à tous les métiers sans exception. »", geo: "«კანონი კრძალავს სქესის საფუძველზე დასაქმებისას ნებისმიერ დისკრიმინაციას. ქალებს და მამაკაცებს ყველა პროფესიაზე გამონაკლისის გარეშე ერთნაირი წვდომის უფლება აქვთ.»" }
    },
    {
        id: "CSP-PVR-7",
        question: { fr: "De quand date la Constitution de la Ve République ?", geo: "რომელ წელს მიღებული იქნა მე-5 რესპუბლიკის კონსტიტუცია?" },
        options: [
            { text: { fr: "De 1958", geo: "1958 წელს" }, isCorrect: true },
            { text: { fr: "De 1789", geo: "1789 წელს" }, isCorrect: false },
            { text: { fr: "De 1946", geo: "1946 წელს" }, isCorrect: false },
            { text: { fr: "De 1871", geo: "1871 წელს" }, isCorrect: false }
        ],
        remark: { fr: "« La Constitution de la Ve République a été adoptée le 4 octobre 1958, à l'initiative du général de Gaulle. Elle régit encore aujourd'hui le fonctionnement des institutions françaises. »", geo: "«მე-5 რესპუბლიკის კონსტიტუცია მიღებული იქნა 1958 წლის 4 ოქტომბერს, გენერალ დე გოლის ინიციატივით. ის დღემდე არეგულირებს საფრანგეთის ინსტიტუტების ფუნქციონირებას.»" }
    },
    {
        id: "CSP-PVR-8",
        question: { fr: "Le régime de la France est :", geo: "საფრანგეთის მმართველობის სისტემაა:" },
        options: [
            { text: { fr: "Une République démocratique", geo: "დემოკრატიული რესპუბლიკა" }, isCorrect: true },
            { text: { fr: "Une monarchie constitutionnelle", geo: "კონსტიტუციური მონარქია" }, isCorrect: false },
            { text: { fr: "Un empire fédéral", geo: "ფედერალური იმპერია" }, isCorrect: false },
            { text: { fr: "Une théocratie", geo: "თეოკრატია" }, isCorrect: false }
        ],
        remark: { fr: "« L'article 1er de la Constitution définit : "La France est une République indivisible, laïque, démocratique et sociale." La France est donc une démocratie représentative. »", geo: "«კონსტიტუციის 1-ლი მუხლი განსაზღვრავს: "საფრანგეთი არის განუყოფელი, სეკულარული, დემოკრატიული და სოციალური რესპუბლიკა." საფრანგეთი ამდენად წარმომადგენლობითი დემოკრატიაა.»" }
    },
    {
        id: "CSP-PVR-9",
        question: { fr: "Lequel de ces symboles représente officiellement la République française ?", geo: "ამ სიმბოლოებიდან რომელი ოფიციალურად წარმოადგენს საფრანგეთის რესპუბლიკას?" },
        options: [
            { text: { fr: "Marianne", geo: "მარიანა" }, isCorrect: true },
            { text: { fr: "La Joconde (Mona Lisa)", geo: "ჯოკონდა (მონა ლიზა)" }, isCorrect: false },
            { text: { fr: "Le château de Versailles", geo: "ვერსალის სასახლე" }, isCorrect: false },
            { text: { fr: "La cathédrale de Chartres", geo: "შარტრის ტაძარი" }, isCorrect: false }
        ],
        remark: { fr: "« Marianne est le symbole féminin officiel de la République française. Son buste figure dans chaque mairie. Elle incarne les valeurs de liberté, d'égalité et de démocratie. »", geo: "«მარიანა საფრანგეთის რესპუბლიკის ოფიციალური ქალური სიმბოლოა. მისი ბიუსტი ყველა მერიაშია. ის განასახიერებს თავისუფლების, თანასწორობისა და დემოკრატიის ღირებულებებს.»" }
    },
    {
        id: "CSP-PVR-10",
        question: { fr: "Où peut-on voir la devise de la République ?", geo: "სად შეიძლება ვნახოთ რესპუბლიკის დევიზი?" },
        options: [
            { text: { fr: "Sur les bâtiments officiels (mairies, tribunaux) et les pièces de monnaie", geo: "ოფიციალურ შენობებზე (მერიები, სასამართლოები) და მონეტებზე" }, isCorrect: true },
            { text: { fr: "Uniquement sur le drapeau national", geo: "მხოლოდ ეროვნულ დროშაზე" }, isCorrect: false },
            { text: { fr: "Seulement dans les écoles publiques", geo: "მხოლოდ საჯარო სკოლებში" }, isCorrect: false },
            { text: { fr: "Sur les billets de banque uniquement", geo: "მხოლოდ კუპიურებზე" }, isCorrect: false }
        ],
        remark: { fr: "« La devise "Liberté, Égalité, Fraternité" est gravée sur les frontons des bâtiments officiels (mairies, palais de justice, préfectures) et figure sur les pièces de monnaie en euros. »", geo: "«დევიზი "თავისუფლება, თანასწორობა, ძმობა" ამოტვიფრულია ოფიციალური შენობების (მერიები, სასამართლო სასახლეები, პრეფექტურები) ფასადებზე და ჩანს ევრო მონეტებზე.»" }
    },
    {
        id: "CSP-PVR-11",
        question: { fr: "Quels sont des symboles officiels de la République française ?", geo: "რომელია საფრანგეთის რესპუბლიკის ოფიციალური სიმბოლოები?" },
        options: [
            { text: { fr: "Le drapeau tricolore, La Marseillaise, Marianne et la devise", geo: "სამფეროვანი დროშა, მარსელიეზა, მარიანა და დევიზი" }, isCorrect: true },
            { text: { fr: "La fleur de lys, le château de Versailles et la croix de Lorraine uniquement", geo: "მხოლოდ ფლერ-დე-ლი, ვერსალის სასახლე და ლოტარინგიის ჯვარი" }, isCorrect: false },
            { text: { fr: "La Tour Eiffel, le Louvre et les Champs-Élysées uniquement", geo: "მხოლოდ ეიფელის კოშკი, ლუვრი და შანზელიზე" }, isCorrect: false },
            { text: { fr: "Le béret, le vin rouge et la baguette", geo: "ბერეტი, წითელი ღვინო და ბაგეტი" }, isCorrect: false }
        ],
        remark: { fr: "« Les symboles officiels de la République sont définis dans la Constitution : le drapeau tricolore bleu-blanc-rouge, La Marseillaise, la devise "Liberté, Égalité, Fraternité" et Marianne. »", geo: "«რესპუბლიკის ოფიციალური სიმბოლოები კონსტიტუციაშია განსაზღვრული: ლურჯ-თეთრ-წითელი სამფეროვანი დროშა, მარსელიეზა, დევიზი "თავისუფლება, თანასწორობა, ძმობა" და მარიანა.»" }
    },
    {
        id: "CSP-PVR-12",
        question: { fr: "Qu'est-ce que l'égalité ?", geo: "რა არის თანასწორობა?" },
        options: [
            { text: { fr: "Le fait que tous les individus ont les mêmes droits et sont traités de la même manière devant la loi", geo: "ის, რომ ყველა ადამიანს ერთნაირი უფლებები აქვს და კანონის წინაშე ერთნაირად ექცევიან" }, isCorrect: true },
            { text: { fr: "Le fait que tous les individus doivent avoir le même revenu", geo: "ის, რომ ყველა ადამიანს ერთნაირი შემოსავალი უნდა ჰქონდეს" }, isCorrect: false },
            { text: { fr: "Le fait que les femmes ont plus de droits pour compenser les inégalités passées", geo: "ის, რომ ქალებს წარსული უთანასწორობის კომპენსაციისთვის მეტი უფლება აქვთ" }, isCorrect: false },
            { text: { fr: "Le fait que seuls les citoyens français bénéficient des mêmes droits", geo: "ის, რომ მხოლოდ ფრანგ მოქალაქეებს ერთნაირი უფლებები გამოდის" }, isCorrect: false }
        ],
        remark: { fr: "« L'égalité est un principe fondamental : nul ne peut être favorisé ou défavorisé en raison de son origine, de sa religion, de son sexe ou de ses opinions. Tous sont égaux devant la loi. »", geo: "«თანასწორობა ფუნდამენტური პრინციპია: არავის შეიძლება უპირატესობა ან ნაკლავანტაჟი ჰქონდეს წარმოშობის, რელიგიის, სქესის ან შეხედულებების გამო. ყველა კანონის წინაშე თანასწორია.»" }
    },
    {
        id: "CSP-PVR-13",
        question: { fr: "Que signifie la liberté ?", geo: "რას ნიშნავს თავისუფლება?" },
        options: [
            { text: { fr: "Pouvoir faire tout ce qui ne nuit pas à autrui, dans le respect des lois", geo: "ყველაფრის კეთების შესაძლებლობა, რაც სხვას არ ავნებს, კანონების დაცვით" }, isCorrect: true },
            { text: { fr: "Pouvoir faire tout ce qu'on veut sans aucune limite légale", geo: "ყველაფრის კეთების შესაძლებლობა ყოველგვარი სამართლებრივი ლიმიტის გარეშე" }, isCorrect: false },
            { text: { fr: "Être dispensé de respecter les règles si on est majeur", geo: "სრულწლოვანობისას წესების პატივისცემისგან გათავისუფლება" }, isCorrect: false },
            { text: { fr: "Avoir le droit de s'exprimer uniquement dans l'espace privé", geo: "გამოხატვის უფლება მხოლოდ კერძო სივრცეში" }, isCorrect: false }
        ],
        remark: { fr: "« La Déclaration des droits de l'homme de 1789 définit : "La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui." Elle est donc limitée par les droits des autres et la loi. »", geo: "«1789 წლის ადამიანის უფლებათა დეკლარაცია განსაზღვრავს: "თავისუფლება მდგომარეობს ყველაფრის კეთების შესაძლებლობაში, რაც სხვას არ ავნებს." ის შეზღუდულია სხვათა უფლებებითა და კანონით.»" }
    },
    {
        id: "CSP-PVR-14",
        question: { fr: "Que signifie le mot \"fraternité\" dans la devise française ?", geo: "რას ნიშნავს სიტყვა \"ძმობა\" ფრანგულ დევიზში?" },
        options: [
            { text: { fr: "La solidarité et l'entraide entre tous les membres de la société", geo: "სოლიდარობა და ურთიერთდახმარება საზოგადოების ყველა წევრს შორის" }, isCorrect: true },
            { text: { fr: "L'obligation légale d'aider uniquement ses frères et sœurs biologiques", geo: "მხოლოდ ბიოლოგიური ძმებისა და დების დახმარების სამართლებრივი ვალდებულება" }, isCorrect: false },
            { text: { fr: "Le fait de ne jamais se disputer avec ses voisins", geo: "არასოდეს მეზობლებთან კამათი" }, isCorrect: false },
            { text: { fr: "L'interdiction de fonder des associations privées", geo: "კერძო ასოციაციების დაფუძნების აკრძალვა" }, isCorrect: false }
        ],
        remark: { fr: "« La fraternité est le troisième pilier de la République. Elle exprime la solidarité nationale et l'aide mutuelle entre citoyens, concrétisée par la Sécurité Sociale et les services publics. »", geo: "«ძმობა რესპუბლიკის მესამე საყრდენია. ის გამოხატავს ეროვნულ სოლიდარობას და მოქალაქეებს შორის ურთიერთდახმარებას, კონკრეტულდება სოციალური დაცვითა და სახელმწიფო სამსახურებით.»" }
    },
    {
        id: "CSP-PVR-15",
        question: { fr: "Quel animal est un symbole de la France ?", geo: "რომელი ცხოველია საფრანგეთის სიმბოლო?" },
        options: [
            { text: { fr: "Le coq gaulois", geo: "გალური მამალი" }, isCorrect: true },
            { text: { fr: "L'aigle impérial", geo: "საიმპერატორო არწივი" }, isCorrect: false },
            { text: { fr: "Le lion", geo: "ლომი" }, isCorrect: false },
            { text: { fr: "Le taureau", geo: "ხარი" }, isCorrect: false }
        ],
        remark: { fr: "« Le coq gaulois est un symbole traditionnel de la France depuis le Moyen Âge. Il représente la vigilance et le courage. Il figure notamment sur certains maillots sportifs français. »", geo: "«გალური მამალი შუა საუკუნეებიდან საფრანგეთის ტრადიციული სიმბოლოა. ის გამოხატავს სიფხიზლეს და სიმამაცეს. კერძოდ, გამოსახულია ზოგიერთ ფრანგულ სასპორტო მაისურზე.»" }
    },
    {
        id: "CSP-PVR-16",
        question: { fr: "Quel est l'un des rôles des associations ?", geo: "რომელია ასოციაციების ერთ-ერთი როლი?" },
        options: [
            { text: { fr: "Défendre des intérêts communs et aider les personnes dans le besoin", geo: "საერთო ინტერესების დაცვა და საჭიროების მქონე ადამიანების დახმარება" }, isCorrect: true },
            { text: { fr: "Remplacer les services publics de l'État", geo: "სახელმწიფოს სახელმწიფო სამსახურების შეცვლა" }, isCorrect: false },
            { text: { fr: "Décider des lois à la place du Parlement", geo: "პარლამენტის ნაცვლად კანონების გადაწყვეტა" }, isCorrect: false },
            { text: { fr: "Percevoir les impôts à la place de l'État", geo: "სახელმწიფოს ნაცვლად გადასახადების შეგროვება" }, isCorrect: false }
        ],
        remark: { fr: "« Les associations (loi de 1901) jouent un rôle essentiel : elles défendent des causes, animent la vie locale, accompagnent les personnes vulnérables et contribuent à la démocratie participative. »", geo: "«ასოციაციები (1901 წლის კანონი) მნიშვნელოვან როლს ასრულებენ: ისინი იცავენ საქმეებს, ამოძრავებენ ადგილობრივ ცხოვრებას, ეხმარებიან დაუცველ ადამიანებს და ხელს უწყობენ მონაწილეობით დემოკრატიას.»" }
    },
    {
        id: "CSP-PVR-17",
        question: { fr: "Quel est le nom de l'hymne national de la France ?", geo: "როგორ ჰქვია საფრანგეთის ეროვნულ ჰიმნს?" },
        options: [
            { text: { fr: "La Marseillaise", geo: "მარსელიეზა" }, isCorrect: true },
            { text: { fr: "La Parisienne", geo: "პარიზელი" }, isCorrect: false },
            { text: { fr: "La Nationale", geo: "ნაციონალი" }, isCorrect: false },
            { text: { fr: "Le Chant des Républicains", geo: "რესპუბლიკელების სიმღერა" }, isCorrect: false }
        ],
        remark: { fr: "« La Marseillaise a été composée en 1792 par Rouget de Lisle pendant les guerres révolutionnaires. Elle est devenue l'hymne national en 1795 puis de nouveau à partir de 1879. »", geo: "«მარსელიეზა შეადგინა რუჟე დე ლილმა 1792 წელს რევოლუციური ომების დროს. ის ეროვნულ ჰიმნად გახდა 1795 წელს, შემდეგ კი კვლავ 1879 წლიდან.»" }
    },
    {
        id: "CSP-PVR-18",
        question: { fr: "Quel symbole de la République française est tricolore ?", geo: "რომელია საფრანგეთის რესპუბლიკის სამფეროვანი სიმბოლო?" },
        options: [
            { text: { fr: "Le drapeau (bleu, blanc, rouge)", geo: "დროშა (ლურჯი, თეთრი, წითელი)" }, isCorrect: true },
            { text: { fr: "Le buste de Marianne", geo: "მარიანას ბიუსტი" }, isCorrect: false },
            { text: { fr: "La carte nationale d'identité", geo: "ეროვნული პირადობის მოწმობა" }, isCorrect: false },
            { text: { fr: "Le sceau officiel de la République", geo: "რესპუბლიკის ოფიციალური ბეჭედი" }, isCorrect: false }
        ],
        remark: { fr: "« Le drapeau tricolore bleu, blanc, rouge est né pendant la Révolution française. Il symbolise l'union : le blanc était la couleur royale, le bleu et rouge les couleurs de Paris. »", geo: "«ლურჯ-თეთრ-წითელი სამფეროვანი დროშა საფრანგეთის რევოლუციის დროს შეიქმნა. ის ერთობის სიმბოლოა: თეთრი სამეფო ოჯახის ფერი იყო, ლურჯი და წითელი — პარიზის ფერები.»" }
    },
    {
        id: "CSP-PVR-19",
        question: { fr: "Quelle est la date de la fête nationale française ?", geo: "რომელი თარიღია საფრანგეთის ეროვნული დღესასწაული?" },
        options: [
            { text: { fr: "Le 14 juillet", geo: "14 ივლისი" }, isCorrect: true },
            { text: { fr: "Le 8 mai", geo: "8 მაისი" }, isCorrect: false },
            { text: { fr: "Le 11 novembre", geo: "11 ნოემბერი" }, isCorrect: false },
            { text: { fr: "Le 21 juin (fête de la Musique)", geo: "21 ივნისი (მუსიკის დღე)" }, isCorrect: false }
        ],
        remark: { fr: "« La fête nationale est le 14 juillet, commémorant la prise de la Bastille (1789). Le 8 mai commémore la victoire de 1945 et le 11 novembre l'armistice de 1918. »", geo: "«ეროვნული დღესასწაული 14 ივლისია, ბასტილიის შტურმის (1789) სახსოვრად. 8 მაისი 1945 წლის გამარჯვებას, 11 ნოემბერი — 1918 წლის ზავს მოიხსენიებს.»" }
    },
    {
        id: "CSP-PVR-20",
        question: { fr: "Quelle est la devise de la République française ?", geo: "რა არის საფრანგეთის რესპუბლიკის დევიზი?" },
        options: [
            { text: { fr: "Liberté, Égalité, Fraternité", geo: "თავისუფლება, თანასწორობა, ძმობა" }, isCorrect: true },
            { text: { fr: "Patrie, Honneur, Valeur", geo: "სამშობლო, პატივი, ღირებულება" }, isCorrect: false },
            { text: { fr: "Unité, Force, Justice", geo: "ერთობა, ძალა, სამართლიანობა" }, isCorrect: false },
            { text: { fr: "Courage, Sagesse, Progrès", geo: "სიმამაცე, სიბრძნე, პროგრესი" }, isCorrect: false }
        ],
        remark: { fr: "« "Liberté, Égalité, Fraternité" est inscrit à l'article 2 de la Constitution et synthétise les valeurs fondamentales de la République issues de la Révolution française de 1789. »", geo: "«"თავისუფლება, თანასწორობა, ძმობა" ჩაწერილია კონსტიტუციის მე-2 მუხლში და სინთეზირებს 1789 წლის საფრანგეთის რევოლუციიდან წარმოქმნილ რესპუბლიკის ძირითად ღირებულებებს.»" }
    },
    {
        id: "CSP-PVR-21",
        question: { fr: "Quelle est la langue officielle de la République française ?", geo: "რა არის საფრანგეთის რესპუბლიკის ოფიციალური ენა?" },
        options: [
            { text: { fr: "Le français", geo: "ფრანგული" }, isCorrect: true },
            { text: { fr: "Le latin", geo: "ლათინური" }, isCorrect: false },
            { text: { fr: "L'occitan", geo: "ოქსიტანური" }, isCorrect: false },
            { text: { fr: "Le breton", geo: "ბრეტონული" }, isCorrect: false }
        ],
        remark: { fr: "« Selon l'article 2 de la Constitution, "la langue de la République est le français". Le français est obligatoire dans les actes officiels, l'enseignement public et les services de l'État. »", geo: "«კონსტიტუციის მე-2 მუხლის თანახმად, "რესპუბლიკის ენა ფრანგულია". ფრანგული სავალდებულოა ოფიციალურ აქტებში, საჯარო განათლებასა და სახელმწიფო სამსახურებში.»" }
    },
    {
        id: "CSP-PVR-22",
        question: { fr: "Quelle est la place de la langue française dans la République ?", geo: "რა ადგილი უჭირავს ფრანგულ ენას რესპუბლიკაში?" },
        options: [
            { text: { fr: "Elle est inscrite dans la Constitution (article 2) et obligatoire dans les actes officiels", geo: "ის ჩაწერილია კონსტიტუციაში (მე-2 მუხლი) და სავალდებულოა ოფიციალურ დოკუმენტებში" }, isCorrect: true },
            { text: { fr: "Elle est conseillée mais non obligatoire dans les documents officiels", geo: "ეს რეკომენდებულია, მაგრამ ოფიციალურ დოკუმენტებში სავალდებულო არ არის" }, isCorrect: false },
            { text: { fr: "Elle est utilisée seulement pour les communications du gouvernement", geo: "ის გამოიყენება მხოლოდ მთავრობის კომუნიკაციებისთვის" }, isCorrect: false },
            { text: { fr: "Elle n'a pas de statut légal particulier en France", geo: "საფრანგეთში მას სპეციალური სამართლებრივი სტატუსი არ გააჩნია" }, isCorrect: false }
        ],
        remark: { fr: "« Le français est la langue de la République depuis l'ordonnance de Villers-Cotterêts (1539). Son statut constitutionnel garantit son usage dans tous les domaines officiels. »", geo: "«ფრანგული რესპუბლიკის ენაა ვილერ-კოტრეს განკარგულებიდან (1539). მისი კონსტიტუციური სტატუსი გარანტიას იძლევა, რომ ის გამოყენებული იქნება ყველა ოფიციალურ სფეროში.»" }
    },
    {
        id: "CSP-PVR-23",
        question: { fr: "Quelle liberté permet à chacun d'exprimer ses idées ?", geo: "რომელი თავისუფლება აძლევს ყველას საშუალებას გამოხატოს თავისი იდეები?" },
        options: [
            { text: { fr: "La liberté d'expression", geo: "სიტყვის თავისუფლება" }, isCorrect: true },
            { text: { fr: "La liberté de circulation", geo: "გადაადგილების თავისუფლება" }, isCorrect: false },
            { text: { fr: "La liberté syndicale", geo: "პროფკავშირების თავისუფლება" }, isCorrect: false },
            { text: { fr: "La liberté d'entreprendre", geo: "სამეწარმეო საქმიანობის თავისუფლება" }, isCorrect: false }
        ],
        remark: { fr: "« La liberté d'expression est garantie par la Constitution et la loi du 29 juillet 1881. Elle inclut le droit d'exprimer ses opinions oralement, par écrit ou sur internet. »", geo: "«სიტყვის თავისუფლება გარანტირებულია კონსტიტუციით და 1881 წლის 29 ივლისის კანონით. ის მოიცავს შეხედულებათა გამოხატვის უფლებას ზეპირად, წერილობით ან ინტერნეტის გამოყენებით.»" }
    },
    {
        id: "CSP-PVR-24",
        question: { fr: "Quelle proposition est correcte ? La liberté d'expression :", geo: "რომელი განცხადებაა სწორი? სიტყვის თავისუფლება:" },
        options: [
            { text: { fr: "Permet d'exprimer ses opinions mais interdit les insultes et les discours haineux", geo: "შეხედულებების გამოხატვის საშუალებას იძლევა, მაგრამ კრძალავს შეურაცხყოფას და სიძულვილის ენას" }, isCorrect: true },
            { text: { fr: "Permet de tout dire sans aucune limite légale en France", geo: "ყველაფრის თქმის საშუალებას იძლევა ყოველგვარი სამართლებრივი ლიმიტის გარეშე საფრანგეთში" }, isCorrect: false },
            { text: { fr: "Est un droit réservé aux journalistes et aux politiciens", geo: "ეს ჟურნალისტებისა და პოლიტიკოსებისთვის დაცული უფლებაა" }, isCorrect: false },
            { text: { fr: "Ne s'applique pas sur internet ni sur les réseaux sociaux", geo: "ინტერნეტსა და სოციალურ ქსელებზე არ ვრცელდება" }, isCorrect: false }
        ],
        remark: { fr: "« La liberté d'expression a des limites : sont interdits les injures, la diffamation, l'incitation à la haine raciale ou religieuse et l'apologie du terrorisme. Ces actes sont sanctionnés par la loi. »", geo: "«სიტყვის თავისუფლებას ლიმიტები აქვს: აკრძალულია შეურაცხყოფა, ცილისწამება, რასობრივი ან რელიგიური სიძულვილის გაღვივება და ტერორიზმის განდიდება. ეს ქმედებები ისჯება კანონით.»" }
    },
    {
        id: "CSP-PVR-25",
        question: { fr: "Quelles sont les couleurs du drapeau français ?", geo: "რა ფერებია საფრანგეთის დროშაზე?" },
        options: [
            { text: { fr: "Bleu, blanc, rouge", geo: "ლურჯი, თეთრი, წითელი" }, isCorrect: true },
            { text: { fr: "Rouge, blanc, vert", geo: "წითელი, თეთრი, მწვანე" }, isCorrect: false },
            { text: { fr: "Bleu, or, rouge", geo: "ლურჯი, ოქრო, წითელი" }, isCorrect: false },
            { text: { fr: "Noir, rouge, or", geo: "შავი, წითელი, ოქრო" }, isCorrect: false }
        ],
        remark: { fr: "« Le drapeau tricolore bleu, blanc, rouge est né pendant la Révolution française. Il est l'un des symboles officiels de la République, aux côtés de La Marseillaise et de Marianne. »", geo: "«ლურჯ-თეთრ-წითელი სამფეროვანი დროშა საფრანგეთის რევოლუციის დროს შეიქმნა. ის რესპუბლიკის ოფიციალური სიმბოლოებიდან ერთ-ერთია, მარსელიეზასა და მარიანასთან ერთად.»" }
    },
    {
        id: "CSP-PVR-26",
        question: { fr: "Qu'est-ce que la Marseillaise ?", geo: "რა არის მარსელიეზა?" },
        options: [
            { text: { fr: "L'hymne national de la France, composé en 1792", geo: "საფრანგეთის ეროვნული ჰიმნი, შედგენილი 1792 წელს" }, isCorrect: true },
            { text: { fr: "Le nom du journal officiel de la République française", geo: "საფრანგეთის რესპუბლიკის ოფიციალური გაზეთის სახელი" }, isCorrect: false },
            { text: { fr: "La principale loi sur la laïcité votée en 1905", geo: "1905 წელს მიღებული სეკულარიზმის მთავარი კანონი" }, isCorrect: false },
            { text: { fr: "La déclaration des droits de l'homme révisée en 1948", geo: "1948 წელს შეცვლილი ადამიანის უფლებათა დეკლარაცია" }, isCorrect: false }
        ],
        remark: { fr: "« La Marseillaise a été composée par Rouget de Lisle en 1792. Elle est jouée lors des cérémonies officielles, des compétitions sportives internationales et chantée pour exprimer la fierté nationale. »", geo: "«მარსელიეზა შეადგინა რუჟე დე ლილმა 1792 წელს. ის ჟღერს ოფიციალური ცერემონიებისა და საერთაშორისო სასპორტო შეჯიბრებების დროს, მღერდება ეროვნული სიამაყის გამოსახატად.»" }
    },
    {
        id: "CSP-PVR-27",
        question: { fr: "Qu'est-ce qui est traditionnellement organisé sur les Champs-Élysées le 14 juillet ?", geo: "რა ტარდება ტრადიციულად შანზელიზეზე 14 ივლისს?" },
        options: [
            { text: { fr: "Un défilé militaire en présence du président de la République", geo: "სამხედრო აღლუმი, რესპუბლიკის პრეზიდენტის თანდასწრებით" }, isCorrect: true },
            { text: { fr: "Une course cycliste internationale (Tour de France)", geo: "საერთაშორისო ველოსიპედის რბოლა (ტურ დე ფრანს)" }, isCorrect: false },
            { text: { fr: "Un grand concert de La Marseillaise chanté par tous les Français", geo: "ყველა ფრანგის მიერ ნამღერი მარსელიეზას დიდი კონცერტი" }, isCorrect: false },
            { text: { fr: "Un marché artisanal et gastronomique national", geo: "ეროვნული სახელოსნო და გასტრონომიული ბაზარი" }, isCorrect: false }
        ],
        remark: { fr: "« Chaque 14 juillet, un défilé militaire remonte les Champs-Élysées en présence du chef de l'État. Le soir, des feux d'artifice sont tirés au Champ-de-Mars devant la Tour Eiffel. »", geo: "«ყოველ 14 ივლისს სამხედრო აღლუმი გაივლის შანზელიზეს, სახელმწიფოს მეთაურის თანდასწრებით. საღამოს შამ-დე-მარსზე, ეიფელის კოშკის წინ, ფეიერვერკი ეწყობა.»" }
    },
    {
        id: "CSP-PVR-28",
        question: { fr: "Qui est Marianne ?", geo: "ვინ არის მარიანა?" },
        options: [
            { text: { fr: "Le symbole féminin officiel de la République française, représentant la liberté et la raison", geo: "საფრანგეთის რესპუბლიკის ოფიციალური ქალური სიმბოლო, რომელიც წარმოადგენს თავისუფლებასა და გონიერებას" }, isCorrect: true },
            { text: { fr: "La reine de France au moment de la Révolution de 1789", geo: "საფრანგეთის დედოფალი 1789 წლის რევოლუციის დროს" }, isCorrect: false },
            { text: { fr: "La première femme élue présidente de la République française", geo: "საფრანგეთის რესპუბლიკის პრეზიდენტად არჩეული პირველი ქალი" }, isCorrect: false },
            { text: { fr: "La patronne des soldats français depuis la Révolution", geo: "ფრანგ ჯარისკაცთა მფარველი რევოლუციიდან" }, isCorrect: false }
        ],
        remark: { fr: "« Marianne est le symbole officiel de la République française depuis le XIXe siècle. Son buste figure dans toutes les mairies de France. Elle incarne la liberté et la démocratie. »", geo: "«მარიანა საფრანგეთის რესპუბლიკის ოფიციალური სიმბოლოა XIX საუკუნიდან. მისი ბიუსტი ყველა ფრანგულ მერიაშია. ის განასახიერებს თავისუფლებასა და დემოკრატიას.»" }
    },
    {
        id: "CSP-PVR-29",
        question: { fr: "Une personne peut-elle changer librement de religion ?", geo: "შეუძლია თუ არა ადამიანს თავისუფლად შეიცვალოს რელიგია?" },
        options: [
            { text: { fr: "Oui, la liberté de conscience garantit le droit de changer de religion ou de n'en avoir aucune", geo: "დიახ, სინდისის თავისუფლება გარანტიას იძლევა რელიგიის შეცვლის ან საერთოდ რელიგიის გარეშე ყოფნის უფლებაზე" }, isCorrect: true },
            { text: { fr: "Non, changer de religion est interdit par la loi française", geo: "არა, რელიგიის შეცვლა ფრანგული კანონით აკრძალულია" }, isCorrect: false },
            { text: { fr: "Seulement si le changement est approuvé par la mairie", geo: "მხოლოდ იმ შემთხვევაში, თუ ცვლილება მერიის მიერ დამტკიცებულია" }, isCorrect: false },
            { text: { fr: "Uniquement si on est né en France de parents français", geo: "მხოლოდ იმ შემთხვევაში, თუ საფრანგეთში ფრანგი მშობლებისგან დაიბადე" }, isCorrect: false }
        ],
        remark: { fr: "« La liberté de conscience est un droit fondamental garanti par la Constitution. Chacun peut croire ou ne pas croire, pratiquer ou changer de religion sans avoir à se justifier devant l'État. »", geo: "«სინდისის თავისუფლება კონსტიტუციით გარანტირებული ძირითადი უფლებაა. ყველას შეუძლია სჯეროდეს ან არ სჯეროდეს, ასრულებდეს ან შეიცვალოს რელიგია სახელმწიფოს წინაშე ახსნა-განმარტების გარეშე.»" }
    },
    {
        id: "CSP-PVR-30",
        question: { fr: "\"La France est une République indivisible, ..., démocratique et sociale\". Complétez l'article 1er de la Constitution :", geo: "\"საფრანგეთი არის განუყოფელი, ..., დემოკრატიული და სოციალური რესპუბლიკა\". შეავსეთ კონსტიტუციის 1-ლი მუხლი:" },
        options: [
            { text: { fr: "Laïque", geo: "სეკულარული (laïque)" }, isCorrect: true },
            { text: { fr: "Religieuse", geo: "რელიგიური" }, isCorrect: false },
            { text: { fr: "Fédérale", geo: "ფედერალური" }, isCorrect: false },
            { text: { fr: "Monarchique", geo: "მონარქიული" }, isCorrect: false }
        ],
        remark: { fr: "« L'article 1er de la Constitution dispose : "La France est une République indivisible, laïque, démocratique et sociale." La laïcité est un principe constitutionnel fondamental. »", geo: "«კონსტიტუციის 1-ლი მუხლი ადგენს: "საფრანგეთი არის განუყოფელი, სეკულარული, დემოკრატიული და სოციალური რესპუბლიკა." სეკულარიზმი ფუნდამენტური კონსტიტუციური პრინციპია.»" }
    },
    {
        id: "CSP-PVR-31",
        question: { fr: "En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?", geo: "რომელ წელს მიღებული იქნა ეკლესიებისა და სახელმწიფოს განყოფის კანონი?" },
        options: [
            { text: { fr: "En 1905", geo: "1905 წელს" }, isCorrect: true },
            { text: { fr: "En 1789", geo: "1789 წელს" }, isCorrect: false },
            { text: { fr: "En 1958", geo: "1958 წელს" }, isCorrect: false },
            { text: { fr: "En 1945", geo: "1945 წელს" }, isCorrect: false }
        ],
        remark: { fr: "« La loi du 9 décembre 1905 a instauré la séparation des Églises et de l'État, garantissant la liberté de conscience et le libre exercice du culte tout en interdisant à l'État de financer les religions. »", geo: "«1905 წლის 9 დეკემბრის კანონმა განახორციელა ეკლესიებისა და სახელმწიფოს განყოფა, გარანტია მისცა სინდისის თავისუფლებასა და კულტის თავისუფლებას, ამავდროულად კრძალავდა სახელმწიფოს მიერ რელიგიების დაფინანსებას.»" }
    },
    {
        id: "CSP-PVR-32",
        question: { fr: "Que permet le principe de laïcité ?", geo: "რის საშუალებას იძლევა სეკულარიზმის პრინციპი?" },
        options: [
            { text: { fr: "De vivre ensemble dans le respect de chaque conviction, religieuse ou non", geo: "ერთად ცხოვრების საშუალებას, ყოველი მრწამსის, რელიგიური თუ არარელიგიური, პატივისცემით" }, isCorrect: true },
            { text: { fr: "D'imposer le catholicisme comme religion officielle d'État", geo: "კათოლიციზმს სახელმწიფო ოფიციალური რელიგიის სახით დაწესებას" }, isCorrect: false },
            { text: { fr: "D'interdire toute pratique religieuse dans les espaces publics", geo: "ნებისმიერი რელიგიური პრაქტიკის საჯარო სივრცეებში აკრძალვას" }, isCorrect: false },
            { text: { fr: "D'exiger que tous les citoyens se déclarent athées", geo: "ყველა მოქალაქის ათეისტად გამოცხადების მოთხოვნას" }, isCorrect: false }
        ],
        remark: { fr: "« La laïcité garantit à la fois la liberté de conscience (croire ou ne pas croire) et la neutralité de l'État vis-à-vis des religions. Elle permet à tous de vivre ensemble dans le respect mutuel. »", geo: "«სეკულარიზმი ერთდროულად გარანტიას იძლევა სინდისის თავისუფლებაზე (სჯეროდეს ან არ სჯეროდეს) და სახელმწიფოს ნეიტრალიტეტზე რელიგიებთან მიმართებაში. ის ყველას საშუალებას იძლევა ერთად ცხოვრებისა ურთიერთპატივისცემით.»" }
    },
    {
        id: "CSP-PVR-33",
        question: { fr: "Quel droit est garanti par la laïcité ?", geo: "რომელი უფლება გარანტირებულია სეკულარიზმით?" },
        options: [
            { text: { fr: "La liberté de conscience (croire ou ne pas croire)", geo: "სინდისის თავისუფლება (სჯეროდეს ან არ სჯეროდეს)" }, isCorrect: true },
            { text: { fr: "Le droit d'imposer sa religion dans les services publics", geo: "საჯარო სამსახურებში საკუთარი რელიგიის დაწესების უფლება" }, isCorrect: false },
            { text: { fr: "Le droit de ne pas respecter les lois pour raisons religieuses", geo: "რელიგიური მიზეზებით კანონების გამოუყენებლობის უფლება" }, isCorrect: false },
            { text: { fr: "L'obligation d'appartenir à une religion reconnue par l'État", geo: "სახელმწიფოს მიერ აღიარებულ რელიგიაზე კუთვნილობის ვალდებულება" }, isCorrect: false }
        ],
        remark: { fr: "« La laïcité garantit la liberté de conscience : chacun peut croire en ce qu'il veut, pratiquer sa religion ou n'en avoir aucune, sans que l'État n'intervienne dans ce choix. »", geo: "«სეკულარიზმი გარანტიას იძლევა სინდისის თავისუფლებაზე: ყველას შეუძლია სჯეროდეს რისიც სურს, ასრულებდეს თავის რელიგიას ან საერთოდ არ ჰქონდეს, სახელმწიფოს ამ არჩევანში ჩაურევლობით.»" }
    },
    {
        id: "CSP-PVR-34",
        question: { fr: "Pourquoi le principe de laïcité doit-il être respecté à l'école ?", geo: "რატომ უნდა დაიცვან სეკულარიზმის პრინციპი სკოლაში?" },
        options: [
            { text: { fr: "Pour que tous les élèves soient traités de la même façon, quelle que soit leur religion", geo: "რათა ყველა მოსწავლეს ერთნაირად მოეპყრონ, მიუხედავად რელიგიისა" }, isCorrect: true },
            { text: { fr: "Pour favoriser le catholicisme, religion historique de France", geo: "კათოლიციზმის, საფრანგეთის ისტორიული რელიგიის, მხარდასაჭერად" }, isCorrect: false },
            { text: { fr: "Parce que la religion est une matière obligatoire enseignée à l'école", geo: "იმიტომ, რომ რელიგია სკოლაში სავალდებულო საგნად ისწავლება" }, isCorrect: false },
            { text: { fr: "Pour interdire aux élèves de parler de leur vie privée", geo: "მოსწავლეებს პირადი ცხოვრების შესახებ საუბრის ასაკრძალავად" }, isCorrect: false }
        ],
        remark: { fr: "« À l'école, la laïcité garantit l'égalité entre élèves et l'impartialité de l'enseignement. La loi de 2004 interdit les signes religieux ostensibles aux élèves dans les établissements publics. »", geo: "«სკოლაში სეკულარიზმი გარანტიას იძლევა მოსწავლეებს შორის თანასწორობაზე და სასწავლო პროცესის მიუკერძოებლობაზე. 2004 წლის კანონი სახელმწიფო სასწავლებლებში მოსწავლეებისთვის კრძალავს აშკარა რელიგიურ სიმბოლოებს.»" }
    },
    {
        id: "CSP-PVR-35",
        question: { fr: "Qu'est-ce que la laïcité ?", geo: "რა არის სეკულარიზმი (laïcité)?" },
        options: [
            { text: { fr: "La séparation de l'État et des religions, qui garantit la liberté de conscience pour tous", geo: "სახელმწიფოსა და რელიგიების გამიჯვნა, რომელიც ყველასთვის სინდისის თავისუფლებას გარანტიას იძლევა" }, isCorrect: true },
            { text: { fr: "L'interdiction totale de pratiquer une religion en France", geo: "საფრანგეთში ნებისმიერი რელიგიის პრაქტიკის სრული აკრძალვა" }, isCorrect: false },
            { text: { fr: "L'obligation pour tous les citoyens de déclarer leur religion à l'État", geo: "ყველა მოქალაქის ვალდებულება გამოაცხადოს სახელმწიფოს წინაშე თავისი რელიგია" }, isCorrect: false },
            { text: { fr: "Une loi qui favorise l'athéisme par rapport aux religions", geo: "კანონი, რომელიც ათეიზმს რელიგიებზე მაღლა აყენებს" }, isCorrect: false }
        ],
        remark: { fr: "« La laïcité est un principe fondateur de la République inscrit dans la Constitution (article 1er). Elle garantit la neutralité de l'État vis-à-vis de toutes les religions et protège la liberté de chacun. »", geo: "«სეკულარიზმი საფრანგეთის რესპუბლიკის დამფუძნებელი პრინციპია, ჩაწერილი კონსტიტუციაში (1-ლი მუხლი). ის გარანტიას იძლევა სახელმწიფოს ნეიტრალიტეტზე ყველა რელიგიასთან მიმართებაში და იცავს ყველას თავისუფლებას.»" }
    },
    {
        id: "CSP-PVR-36",
        question: { fr: "Un enfant peut-il refuser d'aller à l'école pour une raison religieuse ?", geo: "შეუძლია თუ არა ბავშვს სკოლაში სიარულზე უარის თქმა რელიგიური მიზეზით?" },
        options: [
            { text: { fr: "Non, la scolarité est obligatoire jusqu'à 16 ans quelle que soit la religion", geo: "არა, სასკოლო სწავლება სავალდებულოა 16 წლამდე, მიუხედავად რელიგიისა" }, isCorrect: true },
            { text: { fr: "Oui, si ses parents et son chef religieux donnent leur accord", geo: "დიახ, თუ მშობლები და რელიგიური ლიდერი თანახმა არიან" }, isCorrect: false },
            { text: { fr: "Oui, un jour par semaine pour observer les fêtes religieuses", geo: "დიახ, კვირაში ერთ დღეს რელიგიური დღესასწაულების აღსანიშნავად" }, isCorrect: false },
            { text: { fr: "Seulement si l'enfant est âgé de moins de 10 ans", geo: "მხოლოდ 10 წელს ჯერ მიუღწეველი ბავშვებისთვის" }, isCorrect: false }
        ],
        remark: { fr: "« La scolarité est obligatoire pour tous les enfants de 3 à 16 ans résidant en France. Aucune conviction religieuse ne peut justifier une absence scolaire. Les parents peuvent être sanctionnés. »", geo: "«სასკოლო სწავლება სავალდებულოა საფრანგეთში მცხოვრები 3-დან 16 წლამდე ყველა ბავშვისთვის. ვერც ერთი რელიგიური მრწამსი ვერ გაამართლებს სკოლის გაცდენას. მშობლებს შეიძლება სასჯელი შეეფარდოთ.»" }
    },
    {
        id: "CSP-PVR-37",
        question: { fr: "Une personne a-t-elle le droit de ne pas croire en une religion ?", geo: "აქვს თუ არა ადამიანს უფლება არ სჯეროდეს რელიგიისა?" },
        options: [
            { text: { fr: "Oui, la liberté de conscience inclut le droit d'être athée ou agnostique", geo: "დიახ, სინდისის თავისუფლება მოიცავს ათეისტის ან აგნოსტიკოსის უფლებას" }, isCorrect: true },
            { text: { fr: "Non, chaque citoyen doit déclarer une appartenance religieuse à la mairie", geo: "არა, ყოველ მოქალაქეს მერიაში რელიგიური კუთვნილება უნდა გამოაცხადოს" }, isCorrect: false },
            { text: { fr: "Seulement si ses parents l'autorisent, jusqu'à sa majorité", geo: "მხოლოდ სრულწლოვანებამდე, თუ მშობლები ნებართვას იძლევიან" }, isCorrect: false },
            { text: { fr: "Non, en France il faut adhérer à l'une des religions reconnues par l'État", geo: "არა, საფრანგეთში საჭიროა სახელმწიფოს მიერ აღიარებულ ერთ-ერთ რელიგიას შეუერთდე" }, isCorrect: false }
        ],
        remark: { fr: "« La liberté de conscience, garantie par la laïcité, inclut le droit de ne pas avoir de religion. L'athéisme et l'agnosticisme sont des convictions personnelles pleinement protégées par la loi. »", geo: "«სინდისის თავისუფლება, სეკულარიზმით გარანტირებული, მოიცავს რელიგიის გარეშე ყოფნის უფლებას. ათეიზმი და აგნოსტიციზმი პირადი მრწამსებია, სრულად დაცული კანონით.»" }
    }
];
