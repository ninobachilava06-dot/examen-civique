// includes/CSP/SIP.js
// Source : formation-civique.interieur.gouv.fr — liste officielle CSP

export const questionsCSP_SIP = [
    {
        id: "CSP-SIP-1",
        question: { fr: "Qui nomme le Premier ministre ?", geo: "ვინ ნიშნავს პრემიერ-მინისტრს?" },
        options: [
            { text: { fr: "Le président de la République", geo: "რესპუბლიკის პრეზიდენტი" }, isCorrect: true },
            { text: { fr: "Le Parlement par un vote", geo: "პარლამენტი კენჭისყრით" }, isCorrect: false },
            { text: { fr: "Le Conseil d'État", geo: "სახელმწიფო საბჭო" }, isCorrect: false },
            { text: { fr: "Les citoyens lors d'une élection directe", geo: "მოქალაქეები პირდაპირი არჩევნებით" }, isCorrect: false }
        ],
        remark: { fr: "« Le président de la République nomme le Premier ministre et met fin à ses fonctions sur la présentation par celui-ci de la démission du gouvernement. » (article 8 de la Constitution)", geo: "«რესპუბლიკის პრეზიდენტი ნიშნავს პრემიერ-მინისტრს და წყვეტს მის უფლებამოსილებას მთავრობის გადადგომის განცხადების წარდგენის საფუძველზე.» (კონსტიტუციის მუხლი 8)" }
    },
    {
        id: "CSP-SIP-2",
        question: { fr: "Le Parlement est composé :", geo: "პარლამენტი შედგება:" },
        options: [
            { text: { fr: "De l'Assemblée nationale et du Sénat", geo: "ეროვნული ასამბლეისა და სენატისგან" }, isCorrect: true },
            { text: { fr: "Du Sénat et du Conseil constitutionnel", geo: "სენატისა და საკონსტიტუციო საბჭოსგან" }, isCorrect: false },
            { text: { fr: "De l'Assemblée nationale et du Conseil d'État", geo: "ეროვნული ასამბლეისა და სახელმწიფო საბჭოსგან" }, isCorrect: false },
            { text: { fr: "Du Conseil des ministres et de l'Assemblée nationale", geo: "მინისტრთა საბჭოსა და ეროვნული ასამბლეისგან" }, isCorrect: false }
        ],
        remark: { fr: "« Le Parlement comprend l'Assemblée nationale et le Sénat. » (article 24 de la Constitution)", geo: "«პარლამენტი მოიცავს ეროვნულ ასამბლეასა და სენატს.» (კონსტიტუციის მუხლი 24)" }
    },
    {
        id: "CSP-SIP-3",
        question: { fr: "Qu'est-ce que le pouvoir exécutif ? Le pouvoir :", geo: "რა არის აღმასრულებელი ხელისუფლება? ხელისუფლება:" },
        options: [
            { text: { fr: "Qui gouverne le pays et applique les lois", geo: "რომელიც მართავს ქვეყანას და ახორციელებს კანონებს" }, isCorrect: true },
            { text: { fr: "Qui vote les lois au Parlement", geo: "რომელიც კანონებს კენჭისყრით იღებს პარლამენტში" }, isCorrect: false },
            { text: { fr: "Qui juge les affaires pénales et civiles", geo: "რომელიც განიხილავს სისხლისსამართლებრივ და სამოქალაქო საქმეებს" }, isCorrect: false },
            { text: { fr: "Qui contrôle la conformité des lois à la Constitution", geo: "რომელიც ამოწმებს კანონების შესაბამისობას კონსტიტუციასთან" }, isCorrect: false }
        ],
        remark: { fr: "« Le pouvoir exécutif est chargé de gouverner le pays et d'appliquer les lois votées par le Parlement. Il est exercé par le président de la République et le gouvernement. »", geo: "«აღმასრულებელი ხელისუფლება პასუხისმგებელია ქვეყნის მართვასა და პარლამენტის მიერ მიღებული კანონების გამოყენებაზე. მას ახორციელებს რესპუბლიკის პრეზიდენტი და მთავრობა.»" }
    },
    {
        id: "CSP-SIP-4",
        question: { fr: "Les dirigeants sont élus par les citoyens dans :", geo: "ხელმძღვანელებს ირჩევენ მოქალაქეები:" },
        options: [
            { text: { fr: "Une démocratie", geo: "დემოკრატიაში" }, isCorrect: true },
            { text: { fr: "Une monarchie", geo: "მონარქიაში" }, isCorrect: false },
            { text: { fr: "Une dictature", geo: "დიქტატურაში" }, isCorrect: false },
            { text: { fr: "Une théocratie", geo: "თეოკრატიაში" }, isCorrect: false }
        ],
        remark: { fr: "« La démocratie est le régime politique dans lequel le peuple exerce le pouvoir, directement ou par ses représentants élus au suffrage universel. »", geo: "«დემოკრატია არის პოლიტიკური რეჟიმი, რომელშიც ხალხი ახორციელებს ხელისუფლებას, პირდაპირ ან უნივერსალური საარჩევნო უფლებით არჩეული წარმომადგენლების მეშვეობით.»" }
    },
    {
        id: "CSP-SIP-5",
        question: { fr: "A-t-on le droit de ne pas respecter une loi ?", geo: "გვაქვს თუ არა კანონის არდაცვის უფლება?" },
        options: [
            { text: { fr: "Non, la loi s'impose à tous sans exception", geo: "არა, კანონი სავალდებულოა ყველასთვის გამონაკლისის გარეშე" }, isCorrect: true },
            { text: { fr: "Oui, si on est en désaccord avec la loi", geo: "დიახ, თუ კანონს არ ვეთანხმებით" }, isCorrect: false },
            { text: { fr: "Oui, si la loi est récente et peu connue", geo: "დიახ, თუ კანონი ახალია და ცოტამ თუ იცის" }, isCorrect: false },
            { text: { fr: "Seulement pour les lois qui semblent injustes", geo: "მხოლოდ კანონებისთვის, რომლებიც უსამართლოდ მოჩანს" }, isCorrect: false }
        ],
        remark: { fr: "« Nul n'est censé ignorer la loi : la loi s'impose à tous, sans exception. Ne pas respecter la loi expose à des sanctions. »", geo: "«არავის შეუძლია კანონის არცოდნაზე მითითება: კანონი სავალდებულოა ყველასთვის, გამონაკლისის გარეშე. კანონის დარღვევა სანქციებს იწვევს.»" }
    },
    {
        id: "CSP-SIP-6",
        question: { fr: "Qui doit respecter la loi ?", geo: "ვის უნდა დაიცვას კანონი?" },
        options: [
            { text: { fr: "Tout le monde, y compris le président de la République et les ministres", geo: "ყველა, მათ შორის რესპუბლიკის პრეზიდენტი და მინისტრები" }, isCorrect: true },
            { text: { fr: "Seulement les personnes condamnées par la justice", geo: "მხოლოდ სასამართლოს მიერ გასამართლებული პირები" }, isCorrect: false },
            { text: { fr: "Uniquement les fonctionnaires et les agents de l'État", geo: "მხოლოდ სახელმწიფო მოხელეები და სახელმწიფოს თანამშრომლები" }, isCorrect: false },
            { text: { fr: "Les citoyens français, mais pas les étrangers résidant en France", geo: "ფრანგი მოქალაქეები, მაგრამ არა საფრანგეთში მცხოვრები უცხოელები" }, isCorrect: false }
        ],
        remark: { fr: "« Les lois s'appliquent à tous, y compris aux gouvernants. Personne n'est au-dessus de la loi en République française. »", geo: "«კანონები ყველაზე ვრცელდება, მათ შორის მმართველებზე. ფრანგულ რესპუბლიკაში არავინ არის კანონზე მაღლა.»" }
    },
    {
        id: "CSP-SIP-7",
        question: { fr: "Quel est le rôle de l'autorité judiciaire ?", geo: "რა როლი აქვს სასამართლო ხელისუფლებას?" },
        options: [
            { text: { fr: "Rendre la justice, protéger les droits individuels et sanctionner les infractions à la loi", geo: "მართლმსაჯულების განხორციელება, ინდივიდუალური უფლებების დაცვა და კანონდარღვევების სანქცირება" }, isCorrect: true },
            { text: { fr: "Voter les lois et les budgets de l'État", geo: "კანონებისა და სახელმწიფო ბიუჯეტის კენჭისყრით მიღება" }, isCorrect: false },
            { text: { fr: "Gouverner le pays et appliquer la politique du gouvernement", geo: "ქვეყნის მართვა და მთავრობის პოლიტიკის გატარება" }, isCorrect: false },
            { text: { fr: "Contrôler les frontières et assurer la sécurité nationale", geo: "საზღვრების კონტროლი და ეროვნული უსაფრთხოების უზრუნველყოფა" }, isCorrect: false }
        ],
        remark: { fr: "« L'autorité judiciaire, gardienne de la liberté individuelle, veille au respect des droits de chacun et sanctionne les comportements contraires à la loi. »", geo: "«სასამართლო ხელისუფლება, ინდივიდუალური თავისუფლების მეურვე, ზედამხედველობს ყველას უფლებების დაცვაზე და სჯის კანონსაწინააღმდეგო ქმედებებს.»" }
    },
    {
        id: "CSP-SIP-8",
        question: { fr: "Quel pouvoir détient un juge ? Le pouvoir :", geo: "რა უფლებამოსილება აქვს მოსამართლეს? უფლებამოსილება:" },
        options: [
            { text: { fr: "Judiciaire", geo: "სასამართლო" }, isCorrect: true },
            { text: { fr: "Exécutif", geo: "აღმასრულებელი" }, isCorrect: false },
            { text: { fr: "Législatif", geo: "საკანონმდებლო" }, isCorrect: false },
            { text: { fr: "Réglementaire", geo: "მარეგულირებელი" }, isCorrect: false }
        ],
        remark: { fr: "« Le pouvoir judiciaire est exercé par les juges et les tribunaux. Il est indépendant des pouvoirs exécutif et législatif. »", geo: "«სასამართლო ხელისუფლებას ახორციელებენ მოსამართლეები და სასამართლოები. ის დამოუკიდებელია აღმასრულებელი და საკანონმდებლო ხელისუფლებისგან.»" }
    },
    {
        id: "CSP-SIP-9",
        question: { fr: "L'autorité judiciaire est exercée par :", geo: "სასამართლო ხელისუფლებას ახორციელებს:" },
        options: [
            { text: { fr: "Les juges (magistrats) indépendants du pouvoir politique", geo: "მოსამართლეები (მაგისტრატები), რომლებიც დამოუკიდებელნი არიან პოლიტიკური ხელისუფლებისგან" }, isCorrect: true },
            { text: { fr: "Le président de la République et ses ministres", geo: "რესპუბლიკის პრეზიდენტი და მისი მინისტრები" }, isCorrect: false },
            { text: { fr: "Le Parlement (Assemblée nationale et Sénat)", geo: "პარლამენტი (ეროვნული ასამბლეა და სენატი)" }, isCorrect: false },
            { text: { fr: "Le Conseil d'État et la Cour des comptes", geo: "სახელმწიფო საბჭო და საანგარიშო სასამართლო" }, isCorrect: false }
        ],
        remark: { fr: "« Les magistrats du siège sont inamovibles : ils ne peuvent être déplacés, suspendus ou révoqués sans leur consentement, ce qui garantit leur indépendance. »", geo: "«სასამართლო მოსამართლეები შეუცვლელები არიან: მათი გადასვლა, შეჩერება ან გათავისუფლება მათი თანხმობის გარეშე შეუძლებელია, რაც მათ დამოუკიდებლობას უზრუნველყოფს.»" }
    },
    {
        id: "CSP-SIP-10",
        question: { fr: "Que se passe-t-il si un ministre ne respecte pas la loi ?", geo: "რა მოხდება, თუ მინისტრი არ დაიცავს კანონს?" },
        options: [
            { text: { fr: "Il peut être poursuivi et sanctionné comme tout citoyen ; nul n'est au-dessus de la loi", geo: "მისი სისხლისსამართლებრივი დევნა და სანქცირება შეიძლება, როგორც ნებისმიერი მოქალაქის; არავინ არის კანონზე მაღლა" }, isCorrect: true },
            { text: { fr: "Il bénéficie d'une immunité totale pendant l'exercice de ses fonctions", geo: "ის სარგებლობს სრული იმუნიტეტით თავისი უფლებამოსილების განხორციელების პერიოდში" }, isCorrect: false },
            { text: { fr: "Seul le président peut décider de le sanctionner ou non", geo: "მხოლოდ პრეზიდენტს შეუძლია გადაწყვიტოს, სჯის თუ არა" }, isCorrect: false },
            { text: { fr: "Il est simplement démis de ses fonctions sans poursuite pénale possible", geo: "ის უბრალოდ ათავისუფლებს თანამდებობიდან სისხლისსამართლებრივი დევნის გარეშე" }, isCorrect: false }
        ],
        remark: { fr: "« Les lois s'appliquent à tous, y compris aux gouvernants. Si un ministre commet un délit ou un crime, il est jugé comme n'importe quel citoyen. »", geo: "«კანონები ყველაზე ვრცელდება, მათ შორის მმართველებზე. თუ მინისტრი ჩაიდენს სამართალდარღვევას ან დანაშაულს, მას გაასამართლებენ, როგორც ნებისმიერ სხვა მოქალაქეს.»" }
    },
    {
        id: "CSP-SIP-11",
        question: { fr: "Qui est élu lors des élections législatives ?", geo: "ვინ ირჩევა საპარლამენტო არჩევნებზე?" },
        options: [
            { text: { fr: "Les députés de l'Assemblée nationale", geo: "ეროვნული ასამბლეის დეპუტატები" }, isCorrect: true },
            { text: { fr: "Les sénateurs du Sénat", geo: "სენატის სენატორები" }, isCorrect: false },
            { text: { fr: "Les conseillers régionaux", geo: "რეგიონული მრჩევლები" }, isCorrect: false },
            { text: { fr: "Le président de la République", geo: "რესპუბლიკის პრეზიდენტი" }, isCorrect: false }
        ],
        remark: { fr: "« Les élections législatives permettent d'élire les 577 députés de l'Assemblée nationale pour un mandat de 5 ans. »", geo: "«საპარლამენტო არჩევნები საშუალებას იძლევა 5 წლის ვადით ავირჩიოთ ეროვნული ასამბლეის 577 დეპუტატი.»" }
    },
    {
        id: "CSP-SIP-12",
        question: { fr: "Combien de députés composent l'Assemblée nationale ?", geo: "რამდენი დეპუტატი შედის ეროვნულ ასამბლეაში?" },
        options: [
            { text: { fr: "577 députés", geo: "577 დეპუტატი" }, isCorrect: true },
            { text: { fr: "348 sénateurs", geo: "348 სენატორი" }, isCorrect: false },
            { text: { fr: "150 représentants", geo: "150 წარმომადგენელი" }, isCorrect: false },
            { text: { fr: "450 élus nationaux", geo: "450 ეროვნული არჩეული" }, isCorrect: false }
        ],
        remark: { fr: "« L'Assemblée nationale compte 577 députés élus pour 5 ans au suffrage universel direct dans le cadre de circonscriptions législatives. »", geo: "«ეროვნული ასამბლეა შედგება 577 დეპუტატისგან, რომლებიც 5 წლის ვადით ირჩევიან პირდაპირი საყოველთაო კენჭისყრით საარჩევნო ოლქებში.»" }
    },
    {
        id: "CSP-SIP-13",
        question: { fr: "Quand sont élus les sénateurs ?", geo: "როდის ირჩევიან სენატორები?" },
        options: [
            { text: { fr: "Au suffrage universel indirect, par les grands électeurs (élus locaux)", geo: "არაპირდაპირი საყოველთაო კენჭისყრით, ელექტორების (ადგილობრივი არჩეულების) მიერ" }, isCorrect: true },
            { text: { fr: "Au suffrage universel direct par tous les citoyens français", geo: "ყველა ფრანგი მოქალაქის პირდაპირი კენჭისყრით" }, isCorrect: false },
            { text: { fr: "Par nomination du président de la République", geo: "რესპუბლიკის პრეზიდენტის მიერ დანიშვნით" }, isCorrect: false },
            { text: { fr: "Par vote de l'Assemblée nationale", geo: "ეროვნული ასამბლეის კენჭისყრით" }, isCorrect: false }
        ],
        remark: { fr: "« Les sénateurs sont élus au suffrage universel indirect pour 6 ans par un collège de grands électeurs composé principalement d'élus locaux. »", geo: "«სენატორები ირჩევიან არაპირდაპირი საყოველთაო კენჭისყრით 6 წლის ვადით ელექტორების კოლეგიის მიერ, რომელიც ძირითადად ადგილობრივ არჩეულებს შეიცავს.»" }
    },
    {
        id: "CSP-SIP-14",
        question: { fr: "Qui est élu lors des élections municipales ?", geo: "ვინ ირჩევა მუნიციპალურ არჩევნებში?" },
        options: [
            { text: { fr: "Le conseil municipal, qui élit ensuite le maire", geo: "მუნიციპალური საბჭო, რომელიც შემდეგ ირჩევს მერს" }, isCorrect: true },
            { text: { fr: "Le préfet du département", geo: "დეპარტამენტის პრეფექტი" }, isCorrect: false },
            { text: { fr: "Le président du conseil régional", geo: "რეგიონული საბჭოს თავმჯდომარე" }, isCorrect: false },
            { text: { fr: "Les députés de la circonscription", geo: "საარჩევნო ოლქის დეპუტატები" }, isCorrect: false }
        ],
        remark: { fr: "« Lors des élections municipales, les citoyens élisent les conseillers municipaux, qui élisent ensuite le maire parmi eux lors du premier conseil municipal. »", geo: "«მუნიციპალური არჩევნების დროს მოქალაქეები ირჩევენ მუნიციპალური საბჭოს წევრებს, რომლებიც შემდეგ ირჩევენ მერს საკუთარი შემადგენლობიდან.»" }
    },
    {
        id: "CSP-SIP-15",
        question: { fr: "Qui est élu lors des élections présidentielles ?", geo: "ვინ ირჩევა საპრეზიდენტო არჩევნებზე?" },
        options: [
            { text: { fr: "Le président de la République", geo: "რესპუბლიკის პრეზიდენტი" }, isCorrect: true },
            { text: { fr: "Le Premier ministre", geo: "პრემიერ-მინისტრი" }, isCorrect: false },
            { text: { fr: "Le président du Sénat", geo: "სენატის თავმჯდომარე" }, isCorrect: false },
            { text: { fr: "Les membres du Conseil constitutionnel", geo: "საკონსტიტუციო საბჭოს წევრები" }, isCorrect: false }
        ],
        remark: { fr: "« Le président de la République est élu au suffrage universel direct pour un mandat de 5 ans (quinquennat), renouvelable une seule fois. »", geo: "«რესპუბლიკის პრეზიდენტი ირჩევა პირდაპირი საყოველთაო კენჭისყრით 5 წლის ვადით (ხუთწლიანი მანდატი), რომელიც ერთხელ შეიძლება განახლდეს.»" }
    },
    {
        id: "CSP-SIP-16",
        question: { fr: "À partir de quel âge a-t-on le droit de voter ?", geo: "რა ასაკიდან გაქვს ხმის მიცემის უფლება?" },
        options: [
            { text: { fr: "À partir de 18 ans", geo: "18 წლიდან" }, isCorrect: true },
            { text: { fr: "À partir de 16 ans", geo: "16 წლიდან" }, isCorrect: false },
            { text: { fr: "À partir de 21 ans", geo: "21 წლიდან" }, isCorrect: false },
            { text: { fr: "À partir de 20 ans", geo: "20 წლიდან" }, isCorrect: false }
        ],
        remark: { fr: "« Tout citoyen français majeur, c'est-à-dire âgé d'au moins 18 ans, inscrit sur les listes électorales, peut exercer son droit de vote. »", geo: "«ყველა სრულწლოვანი ფრანგი მოქალაქე, ანუ 18 წლის ან უფროსი ასაკის, ვინც შეტანილია ამომრჩეველთა სიებში, შეუძლია განახორციელოს ხმის მიცემის უფლება.»" }
    },
    {
        id: "CSP-SIP-17",
        question: { fr: "Pour combien de temps est élu le président de la République française ?", geo: "რა ვადით ირჩევა საფრანგეთის რესპუბლიკის პრეზიდენტი?" },
        options: [
            { text: { fr: "5 ans (quinquennat)", geo: "5 წელი (ხუთწლიანი მანდატი)" }, isCorrect: true },
            { text: { fr: "7 ans (septennat)", geo: "7 წელი (შვიდწლიანი მანდატი)" }, isCorrect: false },
            { text: { fr: "4 ans", geo: "4 წელი" }, isCorrect: false },
            { text: { fr: "6 ans", geo: "6 წელი" }, isCorrect: false }
        ],
        remark: { fr: "« Depuis la révision constitutionnelle de 2000, le président de la République est élu pour un quinquennat de 5 ans, renouvelable une seule fois. »", geo: "«2000 წლის კონსტიტუციური რეფორმიდან რესპუბლიკის პრეზიდენტი ირჩევა 5 წლის ვადით, რომელიც ერთხელ შეიძლება განახლდეს.»" }
    },
    {
        id: "CSP-SIP-18",
        question: { fr: "Pour combien de temps sont élus les députés ?", geo: "რა ვადით ირჩევიან დეპუტატები?" },
        options: [
            { text: { fr: "5 ans", geo: "5 წელი" }, isCorrect: true },
            { text: { fr: "4 ans", geo: "4 წელი" }, isCorrect: false },
            { text: { fr: "6 ans", geo: "6 წელი" }, isCorrect: false },
            { text: { fr: "3 ans", geo: "3 წელი" }, isCorrect: false }
        ],
        remark: { fr: "« Les députés de l'Assemblée nationale sont élus pour une législature de 5 ans au suffrage universel direct. »", geo: "«ეროვნული ასამბლეის დეპუტატები ირჩევიან 5 წლის საკანონმდებლო ვადით პირდაპირი საყოველთაო კენჭისყრით.»" }
    },
    {
        id: "CSP-SIP-19",
        question: { fr: "Pour combien de temps sont élus les sénateurs ?", geo: "რა ვადით ირჩევიან სენატორები?" },
        options: [
            { text: { fr: "6 ans", geo: "6 წელი" }, isCorrect: true },
            { text: { fr: "5 ans", geo: "5 წელი" }, isCorrect: false },
            { text: { fr: "9 ans", geo: "9 წელი" }, isCorrect: false },
            { text: { fr: "4 ans", geo: "4 წელი" }, isCorrect: false }
        ],
        remark: { fr: "« Les sénateurs sont élus pour 6 ans et le Sénat est renouvelé par moitié tous les 3 ans. »", geo: "«სენატორები ირჩევიან 6 წლის ვადით და სენატი ნახევრდება ყოველ 3 წელიწადში.»" }
    },
    {
        id: "CSP-SIP-20",
        question: { fr: "Qui possède le pouvoir exécutif ?", geo: "ვის აქვს აღმასრულებელი ხელისუფლება?" },
        options: [
            { text: { fr: "Le président de la République et le gouvernement (Premier ministre et ministres)", geo: "რესპუბლიკის პრეზიდენტი და მთავრობა (პრემიერ-მინისტრი და მინისტრები)" }, isCorrect: true },
            { text: { fr: "Le Parlement (Assemblée nationale et Sénat)", geo: "პარლამენტი (ეროვნული ასამბლეა და სენატი)" }, isCorrect: false },
            { text: { fr: "Le Conseil constitutionnel", geo: "საკონსტიტუციო საბჭო" }, isCorrect: false },
            { text: { fr: "Le Conseil d'État", geo: "სახელმწიფო საბჭო" }, isCorrect: false }
        ],
        remark: { fr: "« Le pouvoir exécutif est partagé entre le président de la République, qui fixe les grandes orientations, et le gouvernement, qui conduit la politique de la nation. »", geo: "«აღმასრულებელი ხელისუფლება გაზიარებულია რესპუბლიკის პრეზიდენტს, რომელიც ადგენს ძირითად მიმართულებებს, და მთავრობას შორის, რომელიც ახორციელებს სახელმწიფოს პოლიტიკას.»" }
    },
    {
        id: "CSP-SIP-21",
        question: { fr: "Quelle condition est nécessaire pour voter aux élections ?", geo: "რა პირობაა საჭირო არჩევნებში ხმის მისაცემად?" },
        options: [
            { text: { fr: "Être inscrit sur les listes électorales", geo: "ამომრჩეველთა სიებში ჩარიცხული ყოფნა" }, isCorrect: true },
            { text: { fr: "Payer ses impôts à jour", geo: "გადასახადების დროულად გადახდა" }, isCorrect: false },
            { text: { fr: "Posséder la nationalité française depuis au moins 5 ans", geo: "ფრანგული მოქალაქეობის ყოლა მინიმუმ 5 წლის განმავლობაში" }, isCorrect: false },
            { text: { fr: "Avoir participé aux élections précédentes", geo: "წინა არჩევნებში მონაწილეობის მიღება" }, isCorrect: false }
        ],
        remark: { fr: "« Pour voter, il faut être inscrit sur les listes électorales. L'inscription est automatique pour les jeunes de 18 ans, mais les autres doivent en faire la démarche. »", geo: "«ხმის მისაცემად საჭიროა ამომრჩეველთა სიებში ჩარიცხვა. 18 წლის ახალგაზრდებისთვის ჩარიცხვა ავტომატურია, მაგრამ სხვებმა ამ ნაბიჯი თავად უნდა გადადგან.»" }
    },
    {
        id: "CSP-SIP-22",
        question: { fr: "Qui peut voter aux élections en France ?", geo: "ვის შეუძლია ხმის მიცემა არჩევნებში საფრანგეთში?" },
        options: [
            { text: { fr: "Les citoyens français âgés d'au moins 18 ans, inscrits sur les listes électorales", geo: "ფრანგი მოქალაქეები, რომლებიც მინიმუმ 18 წლისები არიან და შეტანილი არიან ამომრჩეველთა სიებში" }, isCorrect: true },
            { text: { fr: "Tous les résidents en France, qu'ils soient français ou étrangers", geo: "საფრანგეთის ყველა მცხოვრები, ფრანგი თუ უცხოელი" }, isCorrect: false },
            { text: { fr: "Les citoyens français de naissance uniquement", geo: "მხოლოდ დაბადებით ფრანგი მოქალაქეები" }, isCorrect: false },
            { text: { fr: "Les personnes résidant en France depuis plus de 5 ans", geo: "პირები, რომლებიც 5 წელზე მეტია საფრანგეთში ცხოვრობენ" }, isCorrect: false }
        ],
        remark: { fr: "« Le droit de vote en France est réservé aux citoyens français majeurs (18 ans et plus), inscrits sur les listes électorales et jouissant de leurs droits civiques. »", geo: "«ხმის მიცემის უფლება საფრანგეთში ეკუთვნის სრულწლოვან ფრანგ მოქალაქეებს (18 წელი და უფროსი), რომლებიც შეტანილები არიან ამომრჩეველთა სიებში და სარგებლობენ სამოქალაქო უფლებებით.»" }
    },
    {
        id: "CSP-SIP-23",
        question: { fr: “Que signifie « suffrage universel » ?”, geo: “რას ნიშნავს „უნივერსალური საარჩევნო უფლება“?” },
        options: [
            { text: { fr: "Que tous les citoyens majeurs ont le droit de voter, sans distinction d'origine, de sexe ou de condition", geo: "რომ ყველა სრულწლოვან მოქალაქეს აქვს ხმის მიცემის უფლება, წარმოშობის, სქესის ან მდგომარეობის განურჩევლად" }, isCorrect: true },
            { text: { fr: "Que seuls les citoyens ayant un niveau d'instruction supérieur peuvent voter", geo: "რომ მხოლოდ უმაღლეს განათლების მქონე მოქალაქეებს შეუძლიათ ხმის მიცემა" }, isCorrect: false },
            { text: { fr: "Que les élections sont ouvertes à tous les résidents étrangers de longue durée", geo: "რომ არჩევნები ღიაა ყველა გრძელვადიანი უცხოელი მცხოვრებისთვის" }, isCorrect: false },
            { text: { fr: "Que le vote est obligatoire pour tous les citoyens inscrits", geo: "რომ კენჭისყრა სავალდებულოა ყველა ჩარიცხული მოქალაქისთვის" }, isCorrect: false }
        ],
        remark: { fr: "« Le suffrage universel signifie que tous les citoyens français, sans distinction de sexe, d'origine sociale ou de fortune, ont le droit de voter à partir de 18 ans. »", geo: "«საყოველთაო საარჩევნო უფლება ნიშნავს, რომ ყველა ფრანგ მოქალაქეს, სქესის, სოციალური წარმომავლობის ან ქონების განურჩევლად, აქვს ხმის მიცემის უფლება 18 წლიდან.»" }
    },
    {
        id: "CSP-SIP-24",
        question: { fr: "Concernant les partis politiques, quelle proposition est correcte ?", geo: "პოლიტიკურ პარტიებთან დაკავშირებით, რომელი წინადადებაა სწორი?" },
        options: [
            { text: { fr: "Ils se constituent librement et permettent d'organiser et d'exprimer la vie politique", geo: "ისინი თავისუფლად ყალიბდებიან და საშუალებას იძლევიან ორგანიზება და გამოხატვა მოხდეს პოლიტიკური ცხოვრება" }, isCorrect: true },
            { text: { fr: "Ils doivent être agréés par le gouvernement avant de pouvoir se présenter aux élections", geo: "მათ სჭირდება მთავრობის თანხმობა, სანამ არჩევნებში მონაწილეობის უფლება ექნებათ" }, isCorrect: false },
            { text: { fr: "Seuls trois partis politiques sont autorisés à siéger au Parlement", geo: "მხოლოდ სამ პოლიტიკურ პარტიას აქვს პარლამენტში ადგილის დაკავების ნება" }, isCorrect: false },
            { text: { fr: "Ils sont financés exclusivement par leurs membres et ne reçoivent pas de fonds publics", geo: "ისინი ფინანსდებიან მხოლოდ წევრების მიერ და სახელმწიფო სახსრებს არ იღებენ" }, isCorrect: false }
        ],
        remark: { fr: "« Les partis politiques se constituent librement. Ils concourent à l'expression du suffrage. » (article 4 de la Constitution)", geo: "«პოლიტიკური პარტიები თავისუფლად ყალიბდებიან. ისინი ხელს უწყობენ ხმის მიცემის გამოხატვას.» (კონსტიტუციის მუხლი 4)" }
    },
    {
        id: "CSP-SIP-25",
        question: { fr: "Quel est le rôle des députés ?", geo: "რა როლი აქვთ დეპუტატებს?" },
        options: [
            { text: { fr: "Voter les lois et contrôler l'action du gouvernement", geo: "კანონების კენჭისყრით მიღება და მთავრობის საქმიანობის კონტროლი" }, isCorrect: true },
            { text: { fr: "Nommer les ministres et définir la politique étrangère", geo: "მინისტრების დანიშვნა და საგარეო პოლიტიკის განსაზღვრა" }, isCorrect: false },
            { text: { fr: "Juger les affaires criminelles et civiles au nom de la République", geo: "სისხლისსამართლებრივი და სამოქალაქო საქმეების განხილვა რესპუბლიკის სახელით" }, isCorrect: false },
            { text: { fr: "Administrer les communes et les départements", geo: "კომუნებისა და დეპარტამენტების ადმინისტრირება" }, isCorrect: false }
        ],
        remark: { fr: "« Les députés votent les lois, votent le budget de l'État et contrôlent l'action du gouvernement. Ils représentent la nation tout entière. »", geo: "«დეპუტატები კენჭისყრით იღებენ კანონებს, ამტკიცებენ სახელმწიფო ბიუჯეტს და აკონტროლებენ მთავრობის საქმიანობას. ისინი წარმოადგენენ მთელ ერს.»" }
    },
    {
        id: "CSP-SIP-26",
        question: { fr: "La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?", geo: "ხელისუფლების განაწილება ფუნდამენტური პრინციპია. რომელი სამი ხელისუფლებაა საუბარში?" },
        options: [
            { text: { fr: "Le pouvoir exécutif, le pouvoir législatif et le pouvoir judiciaire", geo: "აღმასრულებელი ხელისუფლება, საკანონმდებლო ხელისუფლება და სასამართლო ხელისუფლება" }, isCorrect: true },
            { text: { fr: "Le pouvoir présidentiel, le pouvoir militaire et le pouvoir médiatique", geo: "საპრეზიდენტო ხელისუფლება, სამხედრო ხელისუფლება და მედიის ხელისუფლება" }, isCorrect: false },
            { text: { fr: "Le pouvoir local, le pouvoir national et le pouvoir européen", geo: "ადგილობრივი ხელისუფლება, ეროვნული ხელისუფლება და ევროპული ხელისუფლება" }, isCorrect: false },
            { text: { fr: "Le pouvoir fiscal, le pouvoir social et le pouvoir diplomatique", geo: "საგადასახადო ხელისუფლება, სოციალური ხელისუფლება და დიპლომატიური ხელისუფლება" }, isCorrect: false }
        ],
        remark: { fr: "« La séparation des pouvoirs — exécutif, législatif et judiciaire — garantit l'équilibre des institutions et protège les libertés fondamentales des citoyens. »", geo: "«ხელისუფლების გამიჯვნა — აღმასრულებელი, საკანონმდებლო და სასამართლო — უზრუნველყოფს ინსტიტუტების ბალანსს და იცავს მოქალაქეების ფუნდამენტური თავისუფლებებს.»" }
    },
    {
        id: "CSP-SIP-27",
        question: { fr: "Qui possède le pouvoir législatif ?", geo: "ვის აქვს საკანონმდებლო ხელისუფლება?" },
        options: [
            { text: { fr: "Le Parlement (l'Assemblée nationale et le Sénat)", geo: "პარლამენტი (ეროვნული ასამბლეა და სენატი)" }, isCorrect: true },
            { text: { fr: "Le président de la République et le gouvernement", geo: "რესპუბლიკის პრეზიდენტი და მთავრობა" }, isCorrect: false },
            { text: { fr: "Le Conseil constitutionnel", geo: "საკონსტიტუციო საბჭო" }, isCorrect: false },
            { text: { fr: "Le Conseil d'État", geo: "სახელმწიფო საბჭო" }, isCorrect: false }
        ],
        remark: { fr: "« Le pouvoir législatif est exercé par le Parlement, composé de l'Assemblée nationale et du Sénat, qui votent les lois et contrôlent le gouvernement. »", geo: "«საკანონმდებლო ხელისუფლებას ახორციელებს პარლამენტი, რომელიც შედგება ეროვნული ასამბლეისა და სენატისგან, რომლებიც კენჭისყრით იღებენ კანონებს და აკონტროლებენ მთავრობას.»" }
    },
    {
        id: "CSP-SIP-28",
        question: { fr: "Qui sanctionne l'auteur d'un vol ?", geo: "ვინ სჯის ქურდობის ჩამდენს?" },
        options: [
            { text: { fr: "Le juge (le tribunal compétent)", geo: "მოსამართლე (კომპეტენტური სასამართლო)" }, isCorrect: true },
            { text: { fr: "Le préfet du département", geo: "დეპარტამენტის პრეფექტი" }, isCorrect: false },
            { text: { fr: "Le maire de la commune", geo: "კომუნის მერი" }, isCorrect: false },
            { text: { fr: "Le ministre de l'Intérieur", geo: "შინაგან საქმეთა მინისტრი" }, isCorrect: false }
        ],
        remark: { fr: "« Seul un juge, au nom du peuple français, peut prononcer une condamnation pénale. La justice est rendue par des tribunaux indépendants du pouvoir politique. »", geo: "«მხოლოდ მოსამართლეს, ფრანგი ხალხის სახელით, შეუძლია სისხლისსამართლებრივი განაჩენის გამოტანა. მართლმსაჯულებას ახორციელებენ სასამართლოები, რომლებიც დამოუკიდებელნი არიან პოლიტიკური ხელისუფლებისგან.»" }
    },
    {
        id: "CSP-SIP-29",
        question: { fr: "Qui élit les députés ?", geo: "ვინ ირჩევს დეპუტატებს?" },
        options: [
            { text: { fr: "Les citoyens français au suffrage universel direct", geo: "ფრანგი მოქალაქეები პირდაპირი საყოველთაო კენჭისყრით" }, isCorrect: true },
            { text: { fr: "Le président de la République", geo: "რესპუბლიკის პრეზიდენტი" }, isCorrect: false },
            { text: { fr: "Le Sénat", geo: "სენატი" }, isCorrect: false },
            { text: { fr: "Les conseils régionaux", geo: "რეგიონული საბჭოები" }, isCorrect: false }
        ],
        remark: { fr: "« Les 577 députés de l'Assemblée nationale sont élus directement par les citoyens français, à raison d'un député par circonscription, pour 5 ans. »", geo: "«ეროვნული ასამბლეის 577 დეპუტატი პირდაპირ ირჩევა ფრანგი მოქალაქეების მიერ, თითო დეპუტატი ერთ საარჩევნო ოლქში, 5 წლის ვადით.»" }
    },
    {
        id: "CSP-SIP-30",
        question: { fr: "Qui vote les lois ?", geo: "ვინ კენჭისყრით იღებს კანონებს?" },
        options: [
            { text: { fr: "Le Parlement (l'Assemblée nationale et le Sénat)", geo: "პარლამენტი (ეროვნული ასამბლეა და სენატი)" }, isCorrect: true },
            { text: { fr: "Le président de la République seul", geo: "მხოლოდ რესპუბლიკის პრეზიდენტი" }, isCorrect: false },
            { text: { fr: "Le gouvernement (Premier ministre et ministres)", geo: "მთავრობა (პრემიერ-მინისტრი და მინისტრები)" }, isCorrect: false },
            { text: { fr: "Le Conseil constitutionnel", geo: "საკონსტიტუციო საბჭო" }, isCorrect: false }
        ],
        remark: { fr: "« Le Parlement vote la loi et contrôle l'action du gouvernement. Il est composé de l'Assemblée nationale et du Sénat. » (article 24 de la Constitution)", geo: "«პარლამენტი კანონს კენჭისყრით იღებს და აკონტროლებს მთავრობის საქმიანობას. ის შედგება ეროვნული ასამბლეისა და სენატისგან.» (კონსტიტუციის მუხლი 24)" }
    },
    {
        id: "CSP-SIP-31",
        question: { fr: "Qui réside au palais de l'Élysée ?", geo: "ვინ ცხოვრობს ელიზეს სასახლეში?" },
        options: [
            { text: { fr: "Le président de la République", geo: "რესპუბლიკის პრეზიდენტი" }, isCorrect: true },
            { text: { fr: "Le Premier ministre", geo: "პრემიერ-მინისტრი" }, isCorrect: false },
            { text: { fr: "Le président du Sénat", geo: "სენატის თავმჯდომარე" }, isCorrect: false },
            { text: { fr: "Le président de l'Assemblée nationale", geo: "ეროვნული ასამბლეის თავმჯდომარე" }, isCorrect: false }
        ],
        remark: { fr: "« Le palais de l'Élysée est la résidence officielle et le lieu de travail du président de la République française depuis 1873. »", geo: "«ელიზეს სასახლე არის ფრანგული რესპუბლიკის პრეზიდენტის ოფიციალური საცხოვრებელი და სამუშაო ადგილი 1873 წლიდან.»" }
    },
    {
        id: "CSP-SIP-32",
        question: { fr: "Combien y a-t-il de départements en France ?", geo: "რამდენი დეპარტამენტია საფრანგეთში?" },
        options: [
            { text: { fr: "101 départements (96 en métropole et 5 outre-mer)", geo: "101 დეპარტამენტი (96 მეტროპოლიაში და 5 საზღვარგარეთ)" }, isCorrect: true },
            { text: { fr: "87 départements", geo: "87 დეპარტამენტი" }, isCorrect: false },
            { text: { fr: "95 départements", geo: "95 დეპარტამენტი" }, isCorrect: false },
            { text: { fr: "120 départements", geo: "120 დეპარტამენტი" }, isCorrect: false }
        ],
        remark: { fr: "« La France compte 101 départements : 96 en métropole (dont la Corse) et 5 départements et régions d'outre-mer (DROM). »", geo: "«საფრანგეთს აქვს 101 დეპარტამენტი: 96 მეტროპოლიაში (კორსიკის ჩათვლით) და 5 საზღვარგარეთის დეპარტამენტი და რეგიონი (DROM).»" }
    },
    {
        id: "CSP-SIP-33",
        question: { fr: "Qui représente l'État dans un département ?", geo: "ვინ წარმოადგენს სახელმწიფოს დეპარტამენტში?" },
        options: [
            { text: { fr: "Le préfet", geo: "პრეფექტი" }, isCorrect: true },
            { text: { fr: "Le maire du chef-lieu", geo: "მთავარი ქალაქის მერი" }, isCorrect: false },
            { text: { fr: "Le président du conseil départemental", geo: "დეპარტამენტული საბჭოს თავმჯდომარე" }, isCorrect: false },
            { text: { fr: "Le député de la circonscription", geo: "საარჩევნო ოლქის დეპუტატი" }, isCorrect: false }
        ],
        remark: { fr: "« Le préfet est nommé par le gouvernement pour représenter l'État dans le département. Il veille à l'application des lois et coordonne les services de l'État. »", geo: "«პრეფექტი ინიშნება მთავრობის მიერ სახელმწიფოს წარმოსადგენად დეპარტამენტში. ის ზედამხედველობს კანონების გამოყენებაზე და კოორდინაციას უწევს სახელმწიფო სამსახურებს.»" }
    },
    {
        id: "CSP-SIP-34",
        question: { fr: "Qui dirige la commune ?", geo: "ვინ მართავს მუნიციპალიტეტს?" },
        options: [
            { text: { fr: "Le maire, élu par le conseil municipal", geo: "მერი, ეროვნული ასამბლეის მიერ არჩეული" }, isCorrect: true },
            { text: { fr: "Le préfet nommé par le gouvernement", geo: "მთავრობის მიერ დანიშნული პრეფექტი" }, isCorrect: false },
            { text: { fr: "Le président du département", geo: "დეპარტამენტის თავმჯდომარე" }, isCorrect: false },
            { text: { fr: "Le sous-préfet de l'arrondissement", geo: "სამაზრო ოლქის ვიცე-პრეფექტი" }, isCorrect: false }
        ],
        remark: { fr: "« Le maire est l'exécutif de la commune. Il est élu par le conseil municipal parmi ses membres et exerce ses fonctions pour une durée de 6 ans. »", geo: "«მერი არის კომუნის აღმასრულებელი ორგანო. ის ირჩევა მუნიციპალური საბჭოს მიერ საკუთარი წევრებიდან და ასრულებს თავის ფუნქციებს 6 წლის ვადით.»" }
    },
    {
        id: "CSP-SIP-35",
        question: { fr: "Est-ce que le président de la République a tous les pouvoirs ?", geo: "აქვს თუ არა რესპუბლიკის პრეზიდენტს ყველა უფლებამოსილება?" },
        options: [
            { text: { fr: "Non, les pouvoirs sont séparés entre l'exécutif, le législatif et le judiciaire", geo: "არა, ხელისუფლება გამიჯნულია აღმასრულებელ, საკანონმდებლო და სასამართლო შტოებს შორის" }, isCorrect: true },
            { text: { fr: "Oui, il est le chef de l'État et peut gouverner par décrets sans le Parlement", geo: "დიახ, ის სახელმწიფოს მეთაურია და შეუძლია პარლამენტის გარეშე ბრძანებულებებით მართოს" }, isCorrect: false },
            { text: { fr: "Oui, mais seulement en période de crise ou d'état d'urgence", geo: "დიახ, მაგრამ მხოლოდ კრიზისის ან საგანგებო მდგომარეობის პერიოდში" }, isCorrect: false },
            { text: { fr: "Non, mais il peut dissoudre la justice si nécessaire", geo: "არა, მაგრამ საჭიროების შემთხვევაში შეუძლია სასამართლოს დათხოვნა" }, isCorrect: false }
        ],
        remark: { fr: "« La séparation des pouvoirs interdit à quiconque, y compris au président de la République, de concentrer tous les pouvoirs. Chaque pouvoir contrôle et limite les autres. »", geo: "«ხელისუფლების გამიჯვნა კრძალავს ვისმე, მათ შორის რესპუბლიკის პრეზიდენტს, ყველა ხელისუფლების კონცენტრაციას. თითოეული ხელისუფლება აკონტროლებს და ზღუდავს სხვებს.»" }
    },
    {
        id: "CSP-SIP-36",
        question: { fr: "Qui est le préfet ?", geo: "ვინ არის პრეფექტი?" },
        options: [
            { text: { fr: "Le représentant de l'État nommé par le gouvernement dans un département ou une région", geo: "სახელმწიფოს წარმომადგენელი, დანიშნული მთავრობის მიერ დეპარტამენტში ან რეგიონში" }, isCorrect: true },
            { text: { fr: "L'élu local qui dirige le conseil départemental", geo: "ადგილობრივი არჩეული, რომელიც ხელმძღვანელობს დეპარტამენტულ საბჭოს" }, isCorrect: false },
            { text: { fr: "Le maire de la plus grande ville du département", geo: "დეპარტამენტის უდიდესი ქალაქის მერი" }, isCorrect: false },
            { text: { fr: "Un magistrat chargé de la justice dans le département", geo: "მაგისტრატი, პასუხისმგებელი მართლმსაჯულებაზე დეპარტამენტში" }, isCorrect: false }
        ],
        remark: { fr: "« Le préfet est un haut fonctionnaire de l'État nommé en Conseil des ministres. Il représente l'État et veille au respect des lois dans son département ou sa région. »", geo: "«პრეფექტი არის სახელმწიფოს მაღალი თანამდებობის პირი, დანიშნული მინისტრთა საბჭოზე. ის წარმოადგენს სახელმწიფოს და ზედამხედველობს კანონების დაცვაზე თავის დეპარტამენტში ან რეგიონში.»" }
    },
    {
        id: "CSP-SIP-37",
        question: { fr: "Quel est le rôle du Parlement ?", geo: "რა როლი აქვს პარლამენტს?" },
        options: [
            { text: { fr: "Voter les lois, voter le budget et contrôler l'action du gouvernement", geo: "კანონების კენჭისყრით მიღება, ბიუჯეტის კენჭისყრით მიღება და მთავრობის საქმიანობის კონტროლი" }, isCorrect: true },
            { text: { fr: "Nommer les membres du gouvernement et définir la politique étrangère", geo: "მთავრობის წევრების დანიშვნა და საგარეო პოლიტიკის განსაზღვრა" }, isCorrect: false },
            { text: { fr: "Juger les crimes et délits commis sur le territoire national", geo: "ეროვნულ ტერიტორიაზე ჩადენილი დანაშაულებისა და სამართალდარღვევების განხილვა" }, isCorrect: false },
            { text: { fr: "Gérer les collectivités territoriales (régions, départements, communes)", geo: "ტერიტორიული ერთეულების (რეგიონები, დეპარტამენტები, კომუნები) მართვა" }, isCorrect: false }
        ],
        remark: { fr: "« Le Parlement vote la loi, contrôle l'action du gouvernement et évalue les politiques publiques. » (article 24 de la Constitution)", geo: "«პარლამენტი კანონს კენჭისყრით იღებს, აკონტროლებს მთავრობის საქმიანობას და აფასებს საჯარო პოლიტიკას.» (კონსტიტუციის მუხლი 24)" }
    },
    {
        id: "CSP-SIP-38",
        question: { fr: "Quel est le régime politique de la France aujourd'hui ?", geo: "რა პოლიტიკური რეჟიმია დღეს საფრანგეთში?" },
        options: [
            { text: { fr: "Une République démocratique (la Ve République, depuis 1958)", geo: "დემოკრატიული რესპუბლიკა (მეხუთე რესპუბლიკა, 1958 წლიდან)" }, isCorrect: true },
            { text: { fr: "Une monarchie constitutionnelle", geo: "საკონსტიტუციო მონარქია" }, isCorrect: false },
            { text: { fr: "Une fédération d'États autonomes", geo: "ავტონომიური სახელმწიფოების ფედერაცია" }, isCorrect: false },
            { text: { fr: "Un régime présidentiel sans Parlement", geo: "საპრეზიდენტო რეჟიმი პარლამენტის გარეშე" }, isCorrect: false }
        ],
        remark: { fr: "« La France est une République indivisible, laïque, démocratique et sociale. La Ve République a été fondée en 1958 par le général de Gaulle. »", geo: "«საფრანგეთი არის განუყოფელი, საეკლესიო საქმეებისგან განცალკევებული, დემოკრატიული და სოციალური რესპუბლიკა. მეხუთე რესპუბლიკა დაფუძნდა 1958 წელს გენერალ დე გოლის მიერ.»" }
    },
    {
        id: "CSP-SIP-39",
        question: { fr: "Combien d'États font partie de l'Union européenne au 1er janvier 2025 ?", geo: "რამდენი სახელმწიფო შედის ევროკავშირის შემადგენლობაში 2025 წლის 1 იანვრის მდგომარეობით?" },
        options: [
            { text: { fr: "27 États membres", geo: "27 წევრი სახელმწიფო" }, isCorrect: true },
            { text: { fr: "25 États membres", geo: "25 წევრი სახელმწიფო" }, isCorrect: false },
            { text: { fr: "30 États membres", geo: "30 წევრი სახელმწიფო" }, isCorrect: false },
            { text: { fr: "15 États membres", geo: "15 წევრი სახელმწიფო" }, isCorrect: false }
        ],
        remark: { fr: "« L'Union européenne compte 27 États membres depuis le retrait du Royaume-Uni (Brexit) en 2020. Elle favorise la coopération économique et politique entre ses membres. »", geo: "«ევროკავშირი შედგება 27 წევრი სახელმწიფოსგან გაერთიანებული სამეფოს (Brexit) გასვლის შემდეგ 2020 წელს. ის ხელს უწყობს ეკონომიკურ და პოლიტიკურ თანამშრომლობას წევრებს შორის.»" }
    },
    {
        id: "CSP-SIP-40",
        question: { fr: "Quel État n'est pas membre de l'Union européenne ?", geo: "რომელი სახელმწიფო არ არის ევროკავშირის წევრი?" },
        options: [
            { text: { fr: "La Suisse", geo: "შვეიცარია" }, isCorrect: true },
            { text: { fr: "L'Autriche", geo: "ავსტრია" }, isCorrect: false },
            { text: { fr: "La Belgique", geo: "ბელგია" }, isCorrect: false },
            { text: { fr: "Le Portugal", geo: "პორტუგალია" }, isCorrect: false }
        ],
        remark: { fr: "« La Suisse n'est pas membre de l'Union européenne. Elle entretient des relations étroites avec l'UE par des accords bilatéraux, mais conserve son indépendance. »", geo: "«შვეიცარია არ არის ევროკავშირის წევრი. ის ინარჩუნებს მჭიდრო ურთიერთობებს ევროკავშირთან ორმხრივი შეთანხმებებით, მაგრამ ინარჩუნებს თავის დამოუკიდებლობას.»" }
    },
    {
        id: "CSP-SIP-41",
        question: { fr: "Quelle condition est nécessaire pour voter aux élections européennes ?", geo: "რა პირობაა საჭირო ევროპარლამენტის არჩევნებში ხმის მისაცემად?" },
        options: [
            { text: { fr: "Être citoyen d'un État membre de l'UE et avoir 18 ans minimum", geo: "ევროკავშირის წევრი სახელმწიფოს მოქალაქე ყოფნა და მინიმუმ 18 წლის ასაკი" }, isCorrect: true },
            { text: { fr: "Être exclusivement de nationalité française", geo: "მხოლოდ ფრანგული მოქალაქეობის ქონა" }, isCorrect: false },
            { text: { fr: "Résider en Europe depuis au moins 10 ans", geo: "ევროპაში მინიმუმ 10 წლის განმავლობაში ცხოვრება" }, isCorrect: false },
            { text: { fr: "Parler au moins deux langues officielles de l'Union européenne", geo: "ევროკავშირის მინიმუმ ორი ოფიციალური ენის ცოდნა" }, isCorrect: false }
        ],
        remark: { fr: "« Tout citoyen de l'Union européenne âgé de 18 ans ou plus, résidant dans un État membre, peut participer aux élections du Parlement européen. »", geo: "«ევროკავშირის ნებისმიერ მოქალაქეს, 18 წელს გადაცილებულს, რომელიც ცხოვრობს წევრ სახელმწიფოში, შეუძლია მონაწილეობა მიიღოს ევროპარლამენტის არჩევნებში.»" }
    },
    {
        id: "CSP-SIP-42",
        question: { fr: "À quelle fréquence les élections européennes sont-elles organisées ?", geo: "რამდენად ხშირად ტარდება ევროპული არჩევნები?" },
        options: [
            { text: { fr: "Tous les 5 ans", geo: "ყოველ 5 წელიწადში" }, isCorrect: true },
            { text: { fr: "Tous les 4 ans", geo: "ყოველ 4 წელიწადში" }, isCorrect: false },
            { text: { fr: "Tous les 7 ans", geo: "ყოველ 7 წელიწადში" }, isCorrect: false },
            { text: { fr: "Tous les 3 ans", geo: "ყოველ 3 წელიწადში" }, isCorrect: false }
        ],
        remark: { fr: "« Les citoyens de l'Union européenne élisent leurs représentants au Parlement européen tous les 5 ans au suffrage universel direct. »", geo: "«ევროკავშირის მოქალაქეები ყოველ 5 წელიწადში ირჩევენ თავიანთ წარმომადგენლებს ევროპარლამენტში პირდაპირი საყოველთაო კენჭისყრით.»" }
    },
    {
        id: "CSP-SIP-43",
        question: { fr: "Quel pays est un pays fondateur de l'Union européenne ?", geo: "რომელი ქვეყანაა ევროკავშირის დამფუძნებელი ქვეყანა?" },
        options: [
            { text: { fr: "La France (signataire du traité de Rome en 1957)", geo: "საფრანგეთი (1957 წლის რომის ხელშეკრულების ხელმომწერი)" }, isCorrect: true },
            { text: { fr: "Le Royaume-Uni", geo: "გაერთიანებული სამეფო" }, isCorrect: false },
            { text: { fr: "La Pologne", geo: "პოლონეთი" }, isCorrect: false },
            { text: { fr: "La Suède", geo: "შვედეთი" }, isCorrect: false }
        ],
        remark: { fr: "« La France est l'un des six pays fondateurs de la Communauté économique européenne (CEE), créée par le traité de Rome signé le 25 mars 1957. »", geo: "«საფრანგეთი არის ევროპული ეკონომიკური გაერთიანების (EEG) ექვსი დამფუძნებელი ქვეყნიდან ერთ-ერთი, შექმნილი 1957 წლის 25 მარტს ხელმოწერილი რომის ხელშეკრულებით.»" }
    },
    {
        id: "CSP-SIP-44",
        question: { fr: "Quelle est la monnaie utilisée en France ?", geo: "რომელი ვალუტა გამოიყენება საფრანგეთში?" },
        options: [
            { text: { fr: "L'euro (€)", geo: "ევრო (€)" }, isCorrect: true },
            { text: { fr: "Le franc français", geo: "ფრანგული ფრანკი" }, isCorrect: false },
            { text: { fr: "La livre sterling", geo: "გირვანქა სტერლინგი" }, isCorrect: false },
            { text: { fr: "Le dollar", geo: "დოლარი" }, isCorrect: false }
        ],
        remark: { fr: "« La France a adopté l'euro comme monnaie unique le 1er janvier 1999 pour les transactions financières, et les billets et pièces en euros ont été mis en circulation le 1er janvier 2002. »", geo: "«საფრანგეთმა მიიღო ევრო, როგორც ერთიანი ვალუტა, 1999 წლის 1 იანვარს ფინანსური ოპერაციებისთვის, ხოლო ევროს კუპიურები და მონეტები მიმოქცევაში შევიდა 2002 წლის 1 იანვარს.»" }
    },
    {
        id: "CSP-SIP-45",
        question: { fr: "Qui élit les députés européens ?", geo: "ვინ ირჩევს ევროპარლამენტარებს?" },
        options: [
            { text: { fr: "Les citoyens de l'Union européenne au suffrage universel direct", geo: "ევროკავშირის მოქალაქეები პირდაპირი საყოველთაო კენჭისყრით" }, isCorrect: true },
            { text: { fr: "Les gouvernements des États membres de l'UE", geo: "ევროკავშირის წევრი სახელმწიფოების მთავრობები" }, isCorrect: false },
            { text: { fr: "Le Parlement national de chaque pays", geo: "თითოეული ქვეყნის ეროვნული პარლამენტი" }, isCorrect: false },
            { text: { fr: "Le Conseil européen", geo: "ევროპული საბჭო" }, isCorrect: false }
        ],
        remark: { fr: "« Les 720 députés du Parlement européen sont élus au suffrage universel direct par les citoyens de l'Union européenne pour un mandat de 5 ans. »", geo: "«ევროპარლამენტის 720 დეპუტატი ირჩევა ევროკავშირის მოქალაქეების პირდაპირი საყოველთაო კენჭისყრით 5 წლის ვადით.»" }
    },
    {
        id: "CSP-SIP-46",
        question: { fr: "Quand célèbre-t-on la journée de l'Europe ?", geo: "როდის აღინიშნება ევროპის დღე?" },
        options: [
            { text: { fr: "Le 9 mai, date de la déclaration Schuman de 1950", geo: "9 მაისს, 1950 წლის შუმანის დეკლარაციის თარიღი" }, isCorrect: true },
            { text: { fr: "Le 14 juillet, date de la Révolution française", geo: "14 ივლისს, საფრანგეთის რევოლუციის თარიღი" }, isCorrect: false },
            { text: { fr: "Le 25 mars, date du traité de Rome", geo: "25 მარტს, რომის ხელშეკრულების თარიღი" }, isCorrect: false },
            { text: { fr: "Le 1er janvier, date de l'entrée en vigueur de l'euro", geo: "1 იანვარს, ევროს ამოქმედების თარიღი" }, isCorrect: false }
        ],
        remark: { fr: "« La journée de l'Europe est célébrée le 9 mai en souvenir de la déclaration Schuman du 9 mai 1950, qui a posé les bases de la construction européenne. »", geo: "«ევროპის დღე აღინიშნება 9 მაისს 1950 წლის 9 მაისის შუმანის დეკლარაციის ხსოვნად, რომელმაც საფუძველი ჩაუყარა ევროპულ მშენებლობას.»" }
    },
];
