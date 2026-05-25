// includes/CR/VSF.js

export const questionsCR_VSF = [
    {
        id: "CR-VSF-1",
        question: {
            fr: "Quel mariage est reconnu par l'État ?",
            geo: "რომელი ქორწინებაა აღიარებული სახელმწიფოს მიერ?"
        },
        options: [
            { text: { fr: "Le mariage civil (célébré à la mairie)", geo: "სამოქალაქო ქორწინება (რომელიც მერიაში რეგისტრირდება)" }, isCorrect: true },
            { text: { fr: "Le mariage religieux uniquement", geo: "მხოლოდ რელიგიური ქორწინება" }, isCorrect: false },
            { text: { fr: "Le PACS", geo: "სამოქალაქო სოლიდარობის პაქტი (PACS)" }, isCorrect: false },
            { text: { fr: "Le mariage coutumier", geo: "ტრადიციული (ჩვეულებითი) ქორწინება" }, isCorrect: false }
        ],
        remark: {
            fr: "« Seul le mariage civil, célébré à la mairie par le maire ou l'un de ses adjoints, est reconnu par la loi en France. »",
            geo: "«საფრანგეთში კანონით აღიარებულია მხოლოდ სამოქალაქო ქორწინება, რომელიც რეგისტრირდება მერიაში მერის ან მისი მოადგილის მიერ.»"
        }
    },
    {
        id: "CR-VSF-2",
        question: {
            fr: "Auprès de quelle institution les parents peuvent-ils inscrire leur enfant à l'école publique ?",
            geo: "რომელ ინსტიტუციაში შეუძლიათ მშობლებს შვილის საჯარო სკოლაში ჩარიცხვა?"
        },
        options: [
            { text: { fr: "À la mairie de leur commune", geo: "თავიანთი კომუნის მერიაში" }, isCorrect: true },
            { text: { fr: "À la préfecture", geo: "პრეფექტურაში" }, isCorrect: false },
            { text: { fr: "Au commissariat de police", geo: "პოლიციის განყოფილებაში" }, isCorrect: false },
            { text: { fr: "Au tribunal", geo: "სასამართლოში" }, isCorrect: false }
        ],
        remark: {
            fr: "« L'inscription à l'école publique maternelle ou élémentaire se fait à la mairie de votre domicile, qui vous indiquera l'école de votre secteur. »",
            geo: "«საჯარო საბავშვო ბაღში ან დაწყებით სკოლაში რეგისტრაცია ხდება თქვენი საცხოვრებელი ადგილის მერიაში, რომელიც მიგითითებთ თქვენი უბნის სკოლას.»"
        }
    },
    {
        id: "CR-VSF-3",
        question: {
            fr: "En cas de divorce, qui exerce l'autorité parentale ?",
            geo: "განქორწინების შემთხვევაში, ვინ ახორციელებს მშობლის უფლებამოსილებას?"
        },
        options: [
            { text: { fr: "Les deux parents ensemble (en règle générale)", geo: "ორივე მშობელი ერთად (როგორც წესი)" }, isCorrect: true },
            { text: { fr: "Seulement la mère", geo: "მხოლოდ დედა" }, isCorrect: false },
            { text: { fr: "Seulement le père", geo: "მხოლოდ მამა" }, isCorrect: false },
            { text: { fr: "Le maire de la commune", geo: "კომუნის მერი" }, isCorrect: false }
        ],
        remark: {
            fr: "« Même en cas de séparation ou de divorce, le père et la mère continuent d'exercer en commun l'autorité parentale sur leurs enfants. »",
            geo: "«დაშორების ან განქორწინების შემთხვევაშიც კი, მამა და დედა აგრძელებენ ბავშვებზე მშობლის უფლებამოსილების ერთობლივად განხორციელებას.»"
        }
    },
    {
        id: "CR-VSF-4",
        question: {
            fr: "Quelle aide permet aux personnes qui ont des difficultés financières d'avoir un avocat ?",
            geo: "რომელი დახმარება აძლევს საშუალებას ფინანსური სირთულეების მქონე პირებს, აიყვანონ ადვოკატი?"
        },
        options: [
            { text: { fr: "L'aide juridictionnelle", geo: "იურიდიული დახმარება (L'aide juridictionnelle)" }, isCorrect: true },
            { text: { fr: "Le Revenu de Solidarité Active (RSA)", geo: "სოლიდარობის აქტიური შემოსავალი (RSA)" }, isCorrect: false },
            { text: { fr: "La Caisse d'Allocations Familiales (CAF)", geo: "ოჯახის დახმარების სალარო (CAF)" }, isCorrect: false },
            { text: { fr: "L'Assurance maladie", geo: "სამედიცინო დაზღვევა" }, isCorrect: false }
        ],
        remark: {
            fr: "« L’aide juridictionnelle permet aux personnes ayant de faibles revenus de bénéficier d'une prise en charge de leurs frais de justice par l'État. »",
            geo: "«იურიდიული დახმარება საშუალებას აძლევს დაბალი შემოსავლის მქონე პირებს, რომ მათი სასამართლო ხარჯები სახელმწიფომ დაფაროს.»"
        }
    },
    {
        id: "CR-VSF-5",
        question: {
            fr: "Où faut-il déclarer la naissance d'un enfant ?",
            geo: "სად უნდა დარეგისტრირდეს ბავშვის დაბადება?"
        },
        options: [
            { text: { fr: "À la mairie du lieu de naissance", geo: "დაბადების ადგილის მერიაში" }, isCorrect: true },
            { text: { fr: "À la préfecture", geo: "პრეფექტურაში" }, isCorrect: false },
            { text: { fr: "À la police", geo: "პოლიციაში" }, isCorrect: false },
            { text: { fr: "Au consulat", geo: "საკონსულოში" }, isCorrect: false }
        ],
        remark: {
            fr: "« La déclaration de naissance est obligatoire. Elle doit être faite à la mairie du lieu de naissance dans les 5 jours qui suivent l'accouchement. »",
            geo: "«დაბადების რეგისტრაცია სავალდებულოა. იგი უნდა გაკეთდეს დაბადების ადგილის მერიაში მშობიარობიდან 5 დღის განმავლობაში.»"
        }
    },
    {
        id: "CR-VSF-6",
        question: {
            fr: "Quelle est l'une des conditions pour passer l'examen du permis de conduire ?",
            geo: "რა არის მართვის მოწმობის გამოცდის ჩაბარების ერთ-ერთი პირობა?"
        },
        options: [
            { text: { fr: "Avoir réussi l'épreuve théorique (le code de la route)", geo: "თეორიული გამოცდის (საგზაო მოძრაობის წესების) წარმატებით ჩაბარება" }, isCorrect: true },
            { text: { fr: "Avoir la nationalité française", geo: "საფრანგეთის მოქალაქეობის ქონა" }, isCorrect: false },
            { text: { fr: "Avoir un emploi à temps plein", geo: "სრულ განაკვეთზე მუშაობა" }, isCorrect: false },
            { text: { fr: "Être marié", geo: "ქორწინებაში ყოფნა" }, isCorrect: false }
        ],
        remark: {
            fr: "« Pour se présenter à l'épreuve pratique du permis de conduire, il faut avoir l'âge requis et avoir obtenu au préalable le code de la route. »",
            geo: "«მართვის მოწმობის პრაქტიკულ გამოცდაზე გასასვლელად, უნდა გქონდეთ შესაბამისი ასაკი და წინასწარ ჩაბარებული გქონდეთ საგზაო მოძრაობის წესები.»"
        }
    },
    {
        id: "CR-VSF-7",
        question: {
            fr: "Un bail locatif est valide s'il est :",
            geo: "იჯარის ხელშეკრულება (ბინა) ძალაშია, თუ ის:"
        },
        options: [
            { text: { fr: "Rédigé par écrit et signé par le propriétaire et le locataire", geo: "შედგენილია წერილობით და ხელმოწერილია მესაკუთრისა და დამქირავებლის მიერ" }, isCorrect: true },
            { text: { fr: "Fait uniquement à l'oral", geo: "დადებულია მხოლოდ ზეპირად" }, isCorrect: false },
            { text: { fr: "Signé par le maire de la ville", geo: "ხელმოწერილია ქალაქის მერის მიერ" }, isCorrect: false },
            { text: { fr: "Signé uniquement par le locataire", geo: "ხელმოწერილია მხოლოდ დამქირავებლის მიერ" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le bail est un contrat de location obligatoirement écrit et signé entre le propriétaire (bailleur) et le locataire, définissant les règles de la location. »",
            geo: "«იჯარა არის სავალდებულო წერილობითი და ხელმოწერილი ხელშეკრულება მესაკუთრესა და დამქირავებელს შორის, რომელიც განსაზღვრავს ქირაობის წესებს.»"
        }
    },
    {
        id: "CR-VSF-8",
        question: {
            fr: "Où peut-on déposer un lave-vaisselle cassé ?",
            geo: "სად შეიძლება გაფუჭებული ჭურჭლის სარეცხი მანქანის გადაგდება?"
        },
        options: [
            { text: { fr: "À la déchetterie ou au service des encombrants", geo: "ნაგავსაყრელზე (déchetterie) ან მსხვილგაბარიტიანი ნარჩენების სამსახურში" }, isCorrect: true },
            { text: { fr: "Dans les poubelles vertes ordinaires", geo: "ჩვეულებრივ მწვანე ურნებში" }, isCorrect: false },
            { text: { fr: "Sur le trottoir sans prévenir personne", geo: "ტროტუარზე, გაფრთხილების გარეშე" }, isCorrect: false },
            { text: { fr: "Dans la forêt", geo: "ტყეში" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le respect de l'environnement est un devoir. Les gros appareils électroménagers doivent être apportés à la déchetterie ou collectés par les encombrants. »",
            geo: "«გარემოს პატივისცემა მოვალეობაა. მსხვილი საყოფაცხოვრებო ტექნიკა უნდა მიიტანოთ ნაგავსაყრელზე ან გადასცეთ მსხვილგაბარიტიანი ნარჩენების სამსახურს.»"
        }
    },
    {
        id: "CR-VSF-9",
        question: {
            fr: "Quel numéro d'urgence permet d'appeler la police ?",
            geo: "პოლიციის გამოსაძახებლად გადაუდებელი დახმარების რომელი ნომერი გამოიყენება?"
        },
        options: [
            { text: { fr: "Le 17", geo: "17" }, isCorrect: true },
            { text: { fr: "Le 15", geo: "15" }, isCorrect: false },
            { text: { fr: "Le 18", geo: "18" }, isCorrect: false },
            { text: { fr: "Le 114", geo: "114" }, isCorrect: false }
        ],
        remark: {
            fr: "« En cas de danger, d'agression ou de vol, le numéro d'urgence pour joindre la police ou la gendarmerie est le 17 (ou le 112, numéro européen). »",
            geo: "«საფრთხის, თავდასხმის ან ქურდობის შემთხვევაში, პოლიციის ან ჟანდარმერიის დასაკავშირებლად გადაუდებელი ნომერია 17 (ან 112, ევროპული ნომერი).»"
        }
    },
    {
        id: "CR-VSF-10",
        question: {
            fr: "Concernant l'accès aux soins, quelle proposition est correcte ?",
            geo: "მკურნალობაზე ხელმისაწვდომობასთან დაკავშირებით, რომელი დებულებაა სწორი?"
        },
        options: [
            { text: { fr: "En France, toute personne a le droit d'être soignée", geo: "საფრანგეთში ყველას აქვს მკურნალობის უფლება" }, isCorrect: true },
            { text: { fr: "Seuls les citoyens français ont le droit d'être soignés", geo: "მკურნალობის უფლება მხოლოდ საფრანგეთის მოქალაქეებს აქვთ" }, isCorrect: false },
            { text: { fr: "L'hôpital public refuse les personnes sans emploi", geo: "საჯარო საავადმყოფო უარს ეუბნება დაუსაქმებელ პირებს" }, isCorrect: false },
            { text: { fr: "Les urgences sont fermées le week-end", geo: "გადაუდებელი დახმარება დაკეტილია შაბათ-კვირას" }, isCorrect: false }
        ],
        remark: {
            fr: "« La santé est un droit fondamental. En France, le système de santé garantit l’accès aux soins pour tous, quelle que soit la situation de la personne. »",
            geo: "«ჯანმრთელობა ფუნდამენტური უფლებაა. საფრანგეთში ჯანდაცვის სისტემა უზრუნველყოფს მკურნალობაზე ხელმისაწვდომობას ყველასთვის, მიუხედავად პიროვნების სტატუსისა.»"
        }
    },
    {
        id: "CR-VSF-11",
        question: {
            fr: "À qui est accessible la contraception ?",
            geo: "ვისთვის არის ხელმისაწვდომი კონტრაცეფცია?"
        },
        options: [
            { text: { fr: "À toutes les femmes et tous les hommes, y compris les mineurs", geo: "ყველა ქალისა და მამაკაცისთვის, არასრულწლოვნების ჩათვლით" }, isCorrect: true },
            { text: { fr: "Uniquement aux femmes mariées", geo: "მხოლოდ გათხოვილი ქალებისთვის" }, isCorrect: false },
            { text: { fr: "Uniquement aux adultes majeurs", geo: "მხოლოდ სრულწლოვნებისთვის" }, isCorrect: false },
            { text: { fr: "Seulement aux personnes qui ont déjà des enfants", geo: "მხოლოდ იმ პირებისთვის, ვისაც უკვე ჰყავს შვილები" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le droit de disposer de son corps est fondamental. La contraception est accessible à tous et de manière confidentielle et gratuite pour les mineurs. »",
            geo: "«საკუთარი სხეულის განკარგვის უფლება ფუნდამენტურია. კონტრაცეფცია ყველასთვის ხელმისაწვდომია, არასრულწლოვნებისთვის კი - კონფიდენციალური და უფასო.»"
        }
    },
    {
        id: "CR-VSF-12",
        question: {
            fr: "Qu’est-ce que le principe de confidentialité dans le domaine de la santé ?",
            geo: "რას ნიშნავს კონფიდენციალურობის პრინციპი ჯანდაცვის სფეროში?"
        },
        options: [
            { text: { fr: "Le secret médical : le médecin ne peut pas divulguer d'informations sur son patient", geo: "სამედიცინო საიდუმლოება: ექიმს არ შეუძლია პაციენტის შესახებ ინფორმაციის გამჟღავნება" }, isCorrect: true },
            { text: { fr: "Le droit de se soigner sous un faux nom", geo: "ცრუ სახელით მკურნალობის უფლება" }, isCorrect: false },
            { text: { fr: "L'obligation pour l'hôpital de cacher les prix des soins", geo: "საავადმყოფოს ვალდებულება, დამალოს მკურნალობის ფასები" }, isCorrect: false },
            { text: { fr: "L'interdiction de parler à son médecin de sa famille", geo: "ექიმთან ოჯახზე საუბრის აკრძალვა" }, isCorrect: false }
        ],
        remark: {
            fr: "« Les professionnels de santé sont soumis au secret médical. Ils n’ont pas le droit de communiquer des informations sur la santé d'un patient. »",
            geo: "«ჯანდაცვის პროფესიონალები ექვემდებარებიან სამედიცინო საიდუმლოებას. მათ არ აქვთ პაციენტის ჯანმრთელობის შესახებ ინფორმაციის გაცემის უფლება.»"
        }
    },
    {
        id: "CR-VSF-13",
        question: {
            fr: "L'inscription à l'Assurance maladie est :",
            geo: "სამედიცინო დაზღვევაში (Assurance maladie) რეგისტრაცია არის:"
        },
        options: [
            { text: { fr: "Obligatoire pour toute personne résidant en France de manière stable", geo: "სავალდებულო საფრანგეთში სტაბილურად მცხოვრები ნებისმიერი პირისთვის" }, isCorrect: true },
            { text: { fr: "Facultative (seulement si on le souhaite)", geo: "ნებაყოფლობითი (მხოლოდ სურვილის შემთხვევაში)" }, isCorrect: false },
            { text: { fr: "Réservée uniquement aux citoyens français", geo: "განკუთვნილი მხოლოდ საფრანგეთის მოქალაქეებისთვის" }, isCorrect: false },
            { text: { fr: "Réservée uniquement aux femmes enceintes", geo: "განკუთვნილი მხოლოდ ორსული ქალებისთვის" }, isCorrect: false }
        ],
        remark: {
            fr: "« Toute personne travaillant ou résidant en France de manière stable et régulière a l'obligation de s'affilier à l'Assurance maladie (Sécurité sociale). »",
            geo: "«საფრანგეთში მომუშავე ან სტაბილურად და ლეგალურად მცხოვრებ ნებისმიერ პირს აქვს ვალდებულება, დარეგისტრირდეს სამედიცინო დაზღვევაში (სოციალური დაცვა).»"
        }
    },
    {
        id: "CR-VSF-14",
        question: {
            fr: "Qui peut demander un congé parental d'éducation ?",
            geo: "ვის შეუძლია მოითხოვოს მშობლის შვებულება ბავშვის აღსაზრდელად?"
        },
        options: [
            { text: { fr: "La mère, le père, ou les deux", geo: "დედას, მამას, ან ორივეს ერთად" }, isCorrect: true },
            { text: { fr: "Uniquement la mère", geo: "მხოლოდ დედას" }, isCorrect: false },
            { text: { fr: "Uniquement les femmes sans emploi", geo: "მხოლოდ დაუსაქმებელ ქალებს" }, isCorrect: false },
            { text: { fr: "Les grands-parents de l'enfant", geo: "ბავშვის ბებია-ბაბუას" }, isCorrect: false }
        ],
        remark: {
            fr: "« À la suite d'une naissance ou d'une adoption, le père et la mère ont les mêmes droits. Le congé parental peut être pris par l'un ou l'autre. »",
            geo: "«დაბადების ან შვილად აყვანის შემდეგ მამას და დედას ერთნაირი უფლებები აქვთ. მშობლის შვებულება შეუძლია აიღოს ერთ-ერთმა მათგანმა.»"
        }
    },
    {
        id: "CR-VSF-15",
        question: {
            fr: "Quelles sont les affaires traitées par le conseil de prud'hommes ?",
            geo: "რა საქმეებს განიხილავს შრომითი დავების სასამართლო (le conseil de prud'hommes)?"
        },
        options: [
            { text: { fr: "Les conflits liés au contrat de travail entre salariés et employeurs", geo: "დასაქმებულებსა და დამსაქმებლებს შორის შრომით ხელშეკრულებასთან დაკავშირებულ კონფლიქტებს" }, isCorrect: true },
            { text: { fr: "Les divorces et les séparations", geo: "განქორწინებებსა და დაშორებებს" }, isCorrect: false },
            { text: { fr: "Les crimes et les vols graves", geo: "დანაშაულებსა და მძიმე ქურდობებს" }, isCorrect: false },
            { text: { fr: "Les conflits entre locataires et propriétaires", geo: "დამქირავებლებსა და მესაკუთრეებს შორის კონფლიქტებს" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le conseil de prud'hommes est un tribunal chargé de juger les conflits individuels liés au contrat de travail dans le secteur privé. »",
            geo: "«შრომითი დავების სასამართლო არის ტრიბუნალი, რომელსაც ევალება კერძო სექტორში შრომით ხელშეკრულებასთან დაკავშირებული ინდივიდუალური კონფლიქტების განხილვა.»"
        }
    },
    {
        id: "CR-VSF-16",
        question: {
            fr: "Travailler sans être déclaré est :",
            geo: "მუშაობა დეკლარირების (ოფიციალური რეგისტრაციის) გარეშე არის:"
        },
        options: [
            { text: { fr: "Totalement interdit par la loi (travail au noir)", geo: "კანონით სასტიკად აკრძალული (\"შავი სამუშაო\")" }, isCorrect: true },
            { text: { fr: "Autorisé si on veut payer moins d'impôts", geo: "ნებადართული, თუ გვსურს ნაკლები გადასახადის გადახდა" }, isCorrect: false },
            { text: { fr: "Obligatoire pour les étudiants étrangers", geo: "სავალდებულო უცხოელი სტუდენტებისთვის" }, isCorrect: false },
            { text: { fr: "Toléré si c'est pour quelques heures par semaine", geo: "დასაშვები, თუ ეს მხოლოდ კვირაში რამდენიმე საათს ეხება" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le travail dissimulé (ou travail au noir) est interdit. L'employeur et le salarié risquent de lourdes sanctions pénales et financières. »",
            geo: "«დამალული მუშაობა (ანუ შავი სამუშაო) აკრძალულია. დამსაქმებელიც და დასაქმებულიც სერიოზული სისხლისსამართლებრივი და ფინანსური სანქციების რისკის ქვეშ არიან.»"
        }
    },
        {
        id: "CR-VSF-17",
        question: {
            fr: "Lorsqu'un employeur veut qu'un salarié travaille plus longtemps que la durée prévue dans le contrat de travail :",
            geo: "როდესაც დამსაქმებელს სურს, რომ დასაქმებულმა იმუშაოს შრომითი ხელშეკრულებით გათვალისწინებულ დროზე მეტხანს:"
        },
        options: [
            { text: { fr: "Il doit payer des heures supplémentaires ou accorder un repos compensateur", geo: "მან უნდა გადაიხადოს ზეგანაკვეთური სამუშაოსთვის ან მისცეს კომპენსაციის სახით დასვენების დრო" }, isCorrect: true },
            { text: { fr: "Il peut le forcer sans le payer plus", geo: "მას შეუძლია აიძულოს დამატებითი ანაზღაურების გარეშე" }, isCorrect: false },
            { text: { fr: "Il doit demander l'autorisation au maire", geo: "მან ნებართვა უნდა სთხოვოს მერს" }, isCorrect: false },
            { text: { fr: "C'est totalement interdit en France", geo: "ეს სრულიად აკრძალულია საფრანგეთში" }, isCorrect: false }
        ],
        remark: {
            fr: "« Les heures travaillées au-delà de la durée légale ou contractuelle sont des heures supplémentaires. Elles doivent être rémunérées ou compensées par du repos. »",
            geo: "«ზეგანაკვეთური საათები უნდა ანაზღაურდეს ან დაკომპენსირდეს დასვენებით.»"
        }
    },
    {
        id: "CR-VSF-18",
        question: {
            fr: "Quelle est la mission de France Travail (anciennement Pôle emploi) ?",
            geo: "რა არის France Travail-ის (ყოფილი Pôle emploi) მისია?"
        },
        options: [
            { text: { fr: "Accompagner les demandeurs d'emploi et verser les allocations chômage", geo: "დაეხმაროს სამუშაოს მაძიებლებს და გასცეს უმუშევრობის შემწეობა" }, isCorrect: true },
            { text: { fr: "Donner des amendes aux chômeurs", geo: "დააჯარიმოს უმუშევრები" }, isCorrect: false },
            { text: { fr: "Remplacer les syndicats dans les entreprises", geo: "შეცვალოს პროფკავშირები კომპანიებში" }, isCorrect: false },
            { text: { fr: "Payer les retraites", geo: "გადაიხადოს პენსიები" }, isCorrect: false }
        ],
        remark: {
            fr: "« France Travail a pour mission d'accompagner les demandeurs d'emploi dans leur recherche et de leur verser des allocations s'ils y ont droit. »",
            geo: "«France Travail-ის მისიაა სამუშაოს მაძიებლების დახმარება სამსახურის ძიებაში და მათთვის შემწეობის გადახდა, თუ მათ ამის უფლება აქვთ.»"
        }
    },
    {
        id: "CR-VSF-19",
        question: {
            fr: "Dans une entreprise, le droit syndical permet :",
            geo: "კომპანიაში, პროფკავშირის უფლება (le droit syndical) საშუალებას გაძლევთ:"
        },
        options: [
            { text: { fr: "De se syndiquer et de défendre ses droits professionnels", geo: "გაწევრიანდეთ პროფკავშირებში და დაიცვათ თქვენი პროფესიული უფლებები" }, isCorrect: true },
            { text: { fr: "De ne pas payer d'impôts", geo: "არ გადაიხადოთ გადასახადები" }, isCorrect: false },
            { text: { fr: "De travailler moins d'heures pour le même salaire", geo: "იმუშაოთ ნაკლები საათი იგივე ხელფასით" }, isCorrect: false },
            { text: { fr: "De licencier son patron", geo: "გაათავისუფლოთ სამსახურიდან თქვენი უფროსი" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le droit syndical permet aux salariés de se grouper en syndicat pour défendre leurs intérêts professionnels, leurs droits et leurs conditions de travail. »",
            geo: "«პროფკავშირის უფლება საშუალებას აძლევს დასაქმებულებს გაერთიანდნენ პროფკავშირში თავიანთი პროფესიული ინტერესების, უფლებებისა და სამუშაო პირობების დასაცავად.»"
        }
    },
    {
        id: "CR-VSF-20",
        question: {
            fr: "Dans une entreprise, le droit de grève autorise :",
            geo: "კომპანიაში გაფიცვის უფლება (le droit de grève) იძლევა ნებას:"
        },
        options: [
            { text: { fr: "À cesser le travail collectivement pour défendre des revendications professionnelles", geo: "კოლექტიურად შეწყვიტოთ მუშაობა პროფესიული მოთხოვნების დასაცავად" }, isCorrect: true },
            { text: { fr: "À casser le matériel de l'entreprise", geo: "დააზიანოთ კომპანიის აღჭურვილობა" }, isCorrect: false },
            { text: { fr: "À empêcher ses collègues de travailler par la force", geo: "ძალით შეუშალოთ ხელი კოლეგებს მუშაობაში" }, isCorrect: false },
            { text: { fr: "À prendre des congés sans prévenir personne", geo: "აიღოთ შვებულება გაფრთხილების გარეშე" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le droit de grève est un droit constitutionnel. C'est une cessation collective et concertée du travail pour appuyer des revendications professionnelles. »",
            geo: "«გაფიცვის უფლება კონსტიტუციური უფლებაა. ეს არის სამუშაოს კოლექტიური და შეთანხმებული შეწყვეტა პროფესიული მოთხოვნების მხარდასაჭერად.»"
        }
    },
    {
        id: "CR-VSF-21",
        question: {
            fr: "Quelles sont les conditions pour toucher les allocations chômage ?",
            geo: "რა არის უმუშევრობის შემწეობის მიღების პირობები?"
        },
        options: [
            { text: { fr: "Avoir travaillé un certain temps et être inscrit à France Travail", geo: "გარკვეული პერიოდი მუშაობა და დარეგისტრირება France Travail-ში" }, isCorrect: true },
            { text: { fr: "Être citoyen français exclusivement", geo: "მხოლოდ საფრანგეთის მოქალაქეობა" }, isCorrect: false },
            { text: { fr: "Avoir plus de 50 ans", geo: "50 წელზე მეტი ასაკი" }, isCorrect: false },
            { text: { fr: "Ne jamais avoir travaillé avant", geo: "აქამდე არასდროს გქონდეს ნამუშევარი" }, isCorrect: false }
        ],
        remark: {
            fr: "« Pour percevoir les allocations chômage, il faut avoir travaillé suffisamment longtemps, avoir perdu son emploi involontairement et être inscrit à France Travail. »",
            geo: "«უმუშევრობის შემწეობის მისაღებად აუცილებელია გქონდეთ ნამუშევარი საკმარისი დროის განმავლობაში, უნებლიედ დაკარგოთ სამსახური და დარეგისტრირდეთ France Travail-ში.»"
        }
    },
    {
        id: "CR-VSF-22",
        question: {
            fr: "Qu'est-ce que l'école maternelle ?",
            geo: "რა არის საბავშვო ბაღი (l'école maternelle)?"
        },
        options: [
            { text: { fr: "L'école pour les enfants de 3 à 6 ans, qui précède l'école élémentaire", geo: "სკოლა 3-დან 6 წლამდე ბავშვებისთვის, რომელიც წინ უსწრებს დაწყებით სკოლას" }, isCorrect: true },
            { text: { fr: "L'école pour les enfants de 0 à 3 ans", geo: "სკოლა 0-დან 3 წლამდე ბავშვებისთვის (ბაგა)" }, isCorrect: false },
            { text: { fr: "Une école réservée aux mères", geo: "სკოლა განკუთვნილი მხოლოდ დედებისთვის" }, isCorrect: false },
            { text: { fr: "Le collège", geo: "კოლეჯი" }, isCorrect: false }
        ],
        remark: {
            fr: "« L'école maternelle accueille les jeunes enfants de 3 à 6 ans. L'instruction y est obligatoire à partir de l'âge de 3 ans. »",
            geo: "«საბავშვო ბაღი იღებს 3-დან 6 წლამდე ბავშვებს. სწავლება სავალდებულოა 3 წლის ასაკიდან.»"
        }
    },
    {
        id: "CR-VSF-23",
        question: {
            fr: "Comment s'appelle le diplôme passé par les élèves à la fin du collège ?",
            geo: "რა ჰქვია დიპლომს, რომელსაც მოსწავლეები აბარებენ კოლეჯის (le collège) დასრულებისას?"
        },
        options: [
            { text: { fr: "Le Diplôme National du Brevet (DNB)", geo: "ეროვნული ბრევეტის დიპლომი (DNB)" }, isCorrect: true },
            { text: { fr: "Le Baccalauréat", geo: "ბაკალავრიატი (Le Baccalauréat)" }, isCorrect: false },
            { text: { fr: "Le CAP", geo: "CAP" }, isCorrect: false },
            { text: { fr: "La Licence", geo: "ლისანსი (ბაკალავრი)" }, isCorrect: false }
        ],
        remark: {
            fr: "« À la fin du collège (en classe de 3ème), les élèves passent les épreuves du diplôme national du brevet (DNB). »",
            geo: "«კოლეჯის დასასრულს (მე-3 კლასში) მოსწავლეები აბარებენ ეროვნული ბრევეტის დიპლომის (DNB) გამოცდებს.»"
        }
    },
    {
        id: "CR-VSF-24",
        question: {
            fr: "Les parents d'élève ont le droit de :",
            geo: "მოსწავლის მშობლებს აქვთ უფლება:"
        },
        options: [
            { text: { fr: "Voter pour élire leurs représentants au conseil d'école ou d'administration", geo: "ხმა მისცენ თავიანთი წარმომადგენლების ასარჩევად სკოლის ან ადმინისტრაციულ საბჭოში" }, isCorrect: true },
            { text: { fr: "Choisir les professeurs de leur enfant", geo: "აირჩიონ თავიანთი შვილის მასწავლებლები" }, isCorrect: false },
            { text: { fr: "Assister aux cours avec leur enfant tous les jours", geo: "ყოველდღე დაესწრონ გაკვეთილებს თავიანთ შვილთან ერთად" }, isCorrect: false },
            { text: { fr: "Décider des notes de leur enfant", geo: "გადაწყვიტონ თავიანთი შვილის ნიშნები" }, isCorrect: false }
        ],
        remark: {
            fr: "« Les parents sont membres de la communauté éducative. Ils peuvent voter et se présenter pour être représentants des parents d'élèves. »",
            geo: "«მშობლები საგანმანათლებლო საზოგადოების წევრები არიან. მათ შეუძლიათ ხმის მიცემა და მშობელთა წარმომადგენლებად კენჭისყრა.»"
        }
    },
    {
        id: "CR-VSF-25",
        question: {
            fr: "Qui peut manger à la cantine scolaire ?",
            geo: "ვის შეუძლია სკოლის სასადილოში (la cantine) ჭამა?"
        },
        options: [
            { text: { fr: "Tous les élèves inscrits", geo: "ყველა რეგისტრირებულ მოსწავლეს" }, isCorrect: true },
            { text: { fr: "Seulement les enfants dont les parents travaillent", geo: "მხოლოდ იმ ბავშვებს, რომელთა მშობლებიც მუშაობენ" }, isCorrect: false },
            { text: { fr: "Seulement les garçons", geo: "მხოლოდ ბიჭებს" }, isCorrect: false },
            { text: { fr: "Seulement les élèves qui ont de bonnes notes", geo: "მხოლოდ იმ მოსწავლეებს, რომლებსაც კარგი ნიშნები აქვთ" }, isCorrect: false }
        ],
        remark: {
            fr: "« La cantine (restauration scolaire) est un service ouvert à tous les élèves inscrits. Des tarifs adaptés selon les revenus (quotient familial) sont souvent proposés. »",
            geo: "«სასადილო არის სერვისი, რომელიც ღიაა ყველა დარეგისტრირებული მოსწავლისთვის. ხშირად შეთავაზებულია შემოსავალზე (ოჯახის კოეფიციენტზე) მორგებული ტარიფები.»"
        }
    },
    {
        id: "CR-VSF-26",
        question: {
            fr: "À quel âge commence l'instruction obligatoire des enfants ?",
            geo: "რა ასაკიდან იწყება ბავშვებისთვის სავალდებულო განათლება?"
        },
        options: [
            { text: { fr: "À 3 ans", geo: "3 წლიდან" }, isCorrect: true },
            { text: { fr: "À 6 ans", geo: "6 წლიდან" }, isCorrect: false },
            { text: { fr: "À 11 ans", geo: "11 წლიდან" }, isCorrect: false },
            { text: { fr: "À 16 ans", geo: "16 წლიდან" }, isCorrect: false }
        ],
        remark: {
            fr: "« Depuis 2019, l'instruction est obligatoire pour tous les enfants (filles et garçons) à partir de l'âge de 3 ans et jusqu'à 16 ans. »",
            geo: "«2019 წლიდან განათლება სავალდებულოა ყველა ბავშვისთვის (გოგონებისთვის და ბიჭებისთვის) 3-დან 16 წლამდე.»"
        }
    },
    {
        id: "CR-VSF-27",
        question: {
            fr: "Quel est l'âge de la majorité ?",
            geo: "რა არის სრულწლოვანების ასაკი?"
        },
        options: [
            { text: { fr: "18 ans", geo: "18 წელი" }, isCorrect: true },
            { text: { fr: "16 ans", geo: "16 წელი" }, isCorrect: false },
            { text: { fr: "21 ans", geo: "21 წელი" }, isCorrect: false },
            { text: { fr: "15 ans", geo: "15 წელი" }, isCorrect: false }
        ],
        remark: {
            fr: "« En France, l'âge de la majorité légale civile et pénale est fixé à 18 ans. »",
            geo: "«საფრანგეთში სამოქალაქო და სისხლის სამართლის სრულწლოვანების კანონიერი ასაკი დადგენილია 18 წლით.»"
        }
    },
    {
        id: "CR-VSF-28",
        question: {
            fr: "À l'école, il est interdit aux parents de :",
            geo: "სკოლაში მშობლებს ეკრძალებათ:"
        },
        options: [
            { text: { fr: "Faire usage de violence physique ou verbale envers le personnel", geo: "პერსონალის მიმართ ფიზიკური ან სიტყვიერი ძალადობის გამოყენება" }, isCorrect: true },
            { text: { fr: "Rencontrer les professeurs", geo: "მასწავლებლებთან შეხვედრა" }, isCorrect: false },
            { text: { fr: "Aider leur enfant à faire ses devoirs", geo: "ბავშვისთვის საშინაო დავალების შესრულებაში დახმარება" }, isCorrect: false },
            { text: { fr: "S'informer sur les résultats scolaires", geo: "სასკოლო შედეგების შესახებ ინფორმაციის მიღება" }, isCorrect: false }
        ],
        remark: {
            fr: "« L'école est un lieu de respect mutuel. Toute violence, insulte ou menace envers le personnel éducatif est strictement interdite et punie par la loi. »",
            geo: "«სკოლა ურთიერთპატივისცემის ადგილია. საგანმანათლებლო პერსონალის მიმართ ნებისმიერი ძალადობა, შეურაცხყოფა ან მუქარა სასტიკად აკრძალულია და ისჯება კანონით.»"
        }
    },
    {
        id: "CR-VSF-29",
        question: {
            fr: "Quel motif d'absence est accepté par l'école ?",
            geo: "გაცდენის რომელი მიზეზია მისაღები სკოლისთვის?"
        },
        options: [
            { text: { fr: "La maladie de l'enfant ou un événement familial grave", geo: "ბავშვის ავადმყოფობა ან სერიოზული ოჯახური მოვლენა" }, isCorrect: true },
            { text: { fr: "Partir en vacances en dehors des congés scolaires", geo: "არდადეგების გარეთ დასასვენებლად წასვლა" }, isCorrect: false },
            { text: { fr: "Ne pas avoir envie de se lever le matin", geo: "დილით ადგომის სურვილის არქონა" }, isCorrect: false },
            { text: { fr: "Aller faire les courses avec ses parents", geo: "მშობლებთან ერთად საყიდლებზე წასვლა" }, isCorrect: false }
        ],
        remark: {
            fr: "« L'assiduité est obligatoire. Seules certaines absences sont justifiées, comme la maladie de l'enfant ou une réunion solennelle de famille. »",
            geo: "«სკოლაში სიარული სავალდებულოა. მხოლოდ გარკვეული გაცდენებია გამართლებული, როგორიცაა ბავშვის ავადმყოფობა ან მნიშვნელოვანი საოჯახო შეკრება.»"
        }
    },
    {
        id: "CR-VSF-30",
        question: {
            fr: "Des parents ne respectent pas l'obligation d'instruction pour leurs enfants. Quelle sanction maximale risquent-ils ?",
            geo: "მშობლები არ ასრულებენ შვილების განათლების მიცემის ვალდებულებას. რა არის ის მაქსიმალური სანქცია, რაც მათ ემუქრებათ?"
        },
        options: [
            { text: { fr: "6 mois de prison et 7 500 euros d'amende", geo: "6 თვე ციხე და 7500 ევრო ჯარიმა" }, isCorrect: true },
            { text: { fr: "L'expulsion du pays", geo: "ქვეყნიდან გაძევება" }, isCorrect: false },
            { text: { fr: "La confiscation de leurs biens", geo: "ქონების ჩამორთმევა" }, isCorrect: false },
            { text: { fr: "Aucune sanction, c'est leur droit", geo: "არანაირი სანქცია, ეს მათი უფლებაა" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le non-respect de l'obligation d'instruction est un délit puni par la loi. La sanction peut aller jusqu'à 6 mois d'emprisonnement et 7 500 € d'amende. »",
            geo: "«განათლების ვალდებულების შეუსრულებლობა კანონით დასჯადი დანაშაულია. სანქცია შეიძლება იყოს 6 თვემდე პატიმრობა და 7500 ევროს ოდენობის ჯარიმა.»"
        }
    },
    {
        id: "CR-VSF-31",
        question: {
            fr: "Quand ont lieu les vacances scolaires de Noël ?",
            geo: "როდის არის საშობაო სასკოლო არდადეგები?"
        },
        options: [
            { text: { fr: "À la fin du mois de décembre", geo: "დეკემბრის ბოლოს" }, isCorrect: true },
            { text: { fr: "En novembre", geo: "ნოემბერში" }, isCorrect: false },
            { text: { fr: "Au mois de janvier uniquement", geo: "მხოლოდ იანვარში" }, isCorrect: false },
            { text: { fr: "Pendant un mois complet en hiver", geo: "მთელი ერთი თვე ზამთარში" }, isCorrect: false }
        ],
        remark: {
            fr: "« Les vacances de Noël durent deux semaines à la fin de l'année civile, autour de la fête de Noël (25 décembre) et du jour de l'An. »",
            geo: "«საშობაო არდადეგები გრძელდება ორი კვირა კალენდარული წლის ბოლოს, შობის დღესასწაულისა (25 დეკემბერი) და ახალი წლის გარშემო.»"
        }
    },
    {
        id: "CR-VSF-32",
        question: {
            fr: "À l'école, un enfant en situation de handicap :",
            geo: "სკოლაში, შეზღუდული შესაძლებლობის მქონე (შშმ) ბავშვს:"
        },
        options: [
            { text: { fr: "A le droit d'être scolarisé et de bénéficier d'un accompagnement adapté", geo: "აქვს სკოლაში სიარულის უფლება და შეუძლია მიიღოს შესაბამისი დახმარება" }, isCorrect: true },
            { text: { fr: "N'est pas autorisé à aller à l'école publique", geo: "არ აქვს საჯარო სკოლაში სიარულის უფლება" }, isCorrect: false },
            { text: { fr: "Doit payer plus cher l'école publique", geo: "საჯარო სკოლაში მეტი უნდა გადაიხადოს" }, isCorrect: false },
            { text: { fr: "Doit obligatoirement faire l'école à la maison", geo: "სავალდებულოა მხოლოდ სახლში სწავლება" }, isCorrect: false }
        ],
        remark: {
            fr: "« L’école publique est inclusive. Tout enfant en situation de handicap a le droit d'être inscrit à l'école de son quartier et de bénéficier des aménagements nécessaires. »",
            geo: "«საჯარო სკოლა ინკლუზიურია. შშმ ბავშვს აქვს უფლება ჩაირიცხოს თავისი უბნის სკოლაში და ისარგებლოს აუცილებელი პირობებით.»"
        }
    }
];