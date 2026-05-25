// includes/CR/SIP.js

export const questionsCR_SIP = [
    {
        id: "CR-SIP-1",
        question: {
            fr: "Qu'est-ce que l'État de droit ?",
            geo: "რა არის სამართლებრივი სახელმწიფო (l'État de droit)?"
        },
        options: [
            { text: { fr: "Un système dans lequel la puissance publique est soumise au droit", geo: "სისტემა, რომელშიც საჯარო ხელისუფლება ექვემდებარება კანონს" }, isCorrect: true },
            { text: { fr: "Un système où le président décide des lois seul", geo: "სისტემა, სადაც პრეზიდენტი კანონებს ერთპიროვნულად იღებს" }, isCorrect: false },
            { text: { fr: "Un système sans lois ni règles", geo: "სისტემა კანონებისა და წესების გარეშე" }, isCorrect: false },
            { text: { fr: "Un système où la loi ne s'applique qu'aux citoyens", geo: "სისტემა, სადაც კანონი მხოლოდ მოქალაქეებზე ვრცელდება" }, isCorrect: false }
        ],
        remark: {
            fr: "« L’État de droit est un système institutionnel dans lequel la puissance publique est soumise au droit. » (formation-civique.interieur.gouv.fr)",
            geo: "«სამართლებრივი სახელმწიფო არის ინსტიტუციური სისტემა, რომელშიც საჯარო ხელისუფლება ექვემდებარება კანონს.»"
        }
    },
    {
        id: "CR-SIP-2",
        question: {
            fr: "Le président de la République a commis un crime. Quelle proposition est correcte ?",
            geo: "რესპუბლიკის პრეზიდენტმა ჩაიდინა დანაშაული. რომელი დებულებაა სწორი?"
        },
        options: [
            { text: { fr: "Il est soumis à la loi comme n'importe quel citoyen", geo: "ის ექვემდებარება კანონს, როგორც ნებისმიერი სხვა მოქალაქე" }, isCorrect: true },
            { text: { fr: "Il ne peut jamais être jugé", geo: "მისი გასამართლება არასოდეს შეიძლება" }, isCorrect: false },
            { text: { fr: "Il peut changer la loi pour ne pas aller en prison", geo: "მას შეუძლია შეცვალოს კანონი, რათა ციხეში არ მოხვდეს" }, isCorrect: false },
            { text: { fr: "Il décide lui-même de sa punition", geo: "ის თავად წყვეტს საკუთარ სასჯელს" }, isCorrect: false }
        ],
        remark: {
            fr: "« Les lois s’appliquent à tous, y compris aux gouvernants. Si un ministre ou le président de la République commet un délit ou un crime, il est jugé par un tribunal. »",
            geo: "«კანონები ვრცელდება ყველაზე, მათ შორის მმართველებზე. თუ მინისტრი ან პრეზიდენტი დანაშაულს ჩაიდენს, მას სასამართლო გაასამართლებს.»"
        }
    },
    {
        id: "CR-SIP-3",
        question: {
            fr: "La loi est l'expression de :",
            geo: "კანონი არის გამოხატულება:"
        },
        options: [
            { text: { fr: "La volonté générale", geo: "საერთო ნების" }, isCorrect: true },
            { text: { fr: "La volonté du président", geo: "პრეზიდენტის ნების" }, isCorrect: false },
            { text: { fr: "La volonté de l'Union européenne", geo: "ევროკავშირის ნების" }, isCorrect: false },
            { text: { fr: "La volonté du Premier ministre", geo: "პრემიერ-მინისტრის ნების" }, isCorrect: false }
        ],
        remark: {
            fr: "« La loi est l’expression de la volonté générale : tous les citoyens ont le droit de participer personnellement, ou par leurs représentants, à sa création. »",
            geo: "«კანონი არის საერთო ნების გამოხატულება: ყველა მოქალაქეს აქვს უფლება პირადად ან თავისი წარმომადგენლების მეშვეობით მონაწილეობა მიიღოს მის შექმნაში.»"
        }
    },
    {
        id: "CR-SIP-4",
        question: {
            fr: "Quelle est la durée du mandat du conseil municipal et du maire ?",
            geo: "რა არის მუნიციპალური საბჭოსა და მერის მანდატის ხანგრძლივობა?"
        },
        options: [
            { text: { fr: "6 ans", geo: "6 წელი" }, isCorrect: true },
            { text: { fr: "5 ans", geo: "5 წელი" }, isCorrect: false },
            { text: { fr: "4 ans", geo: "4 წელი" }, isCorrect: false },
            { text: { fr: "7 ans", geo: "7 წელი" }, isCorrect: false }
        ],
        remark: {
            fr: "« Les membres du conseil municipal (les conseillers municipaux) sont élus par les habitants de la commune pour un mandat de 6 ans. »",
            geo: "«მუნიციპალური საბჭოს წევრებს (მუნიციპალურ მრჩევლებს) ირჩევენ კომუნის მაცხოვრებლები 6 წლის ვადით.»"
        }
    },
    {
        id: "CR-SIP-5",
        question: {
            fr: "Que garantit l’État de droit ?",
            geo: "რას უზრუნველყოფს სამართლებრივი სახელმწიფო?"
        },
        options: [
            { text: { fr: "L'égalité de tous devant la loi", geo: "ყველას თანასწორობას კანონის წინაშე" }, isCorrect: true },
            { text: { fr: "Que le gouvernement ne paie pas d'impôts", geo: "რომ მთავრობა არ იხდის გადასახადებს" }, isCorrect: false },
            { text: { fr: "Le droit d'ignorer la loi", geo: "კანონის იგნორირების უფლებას" }, isCorrect: false },
            { text: { fr: "Le droit de vote à partir de 16 ans", geo: "ხმის მიცემის უფლებას 16 წლიდან" }, isCorrect: false }
        ],
        remark: {
            fr: "« L'État de droit garantit l'égalité de tous devant la loi et la protection des droits et libertés fondamentaux. »",
            geo: "«სამართლებრივი სახელმწიფო უზრუნველყოფს ყველას თანასწორობას კანონის წინაშე და ძირითადი უფლებებისა და თავისუფლებების დაცვას.»"
        }
    },
    {
        id: "CR-SIP-6",
        question: {
            fr: "Une personne peut-elle voter à la place d'une autre ?",
            geo: "შეუძლია თუ არა ერთ პირს ხმა მისცეს მეორის ნაცვლად?"
        },
        options: [
            { text: { fr: "Oui, en faisant une procuration", geo: "დიახ, მინდობილობის გაკეთებით" }, isCorrect: true },
            { text: { fr: "Non, c'est totalement interdit", geo: "არა, ეს სასტიკად აკრძალულია" }, isCorrect: false },
            { text: { fr: "Oui, mais uniquement pour les élections européennes", geo: "დიახ, მაგრამ მხოლოდ ევროპარლამენტის არჩევნებზე" }, isCorrect: false },
            { text: { fr: "Oui, avec la carte d'identité de l'autre personne le jour du vote", geo: "დიახ, მეორე პირის პირადობის მოწმობით ხმის მიცემის დღეს" }, isCorrect: false }
        ],
        remark: {
            fr: "« Si un citoyen ne peut pas se déplacer le jour d’une élection, il peut confier à un autre électeur le soin de voter à sa place. C’est ce qu’on appelle le vote par procuration. »",
            geo: "«თუ მოქალაქე არჩევნების დღეს ვერ ახერხებს მისვლას, მას შეუძლია ხმის მიცემა სხვა ამომრჩეველს მიანდოს. ამას ეწოდება ხმის მიცემა მინდობილობით.»"
        }
    },
    {
        id: "CR-SIP-7",
        question: {
            fr: "Est-ce que le vote est obligatoire ?",
            geo: "სავალდებულოა თუ არა ხმის მიცემა?"
        },
        options: [
            { text: { fr: "Non, c'est un droit et un devoir civique, mais pas une obligation", geo: "არა, ეს არის უფლება და სამოქალაქო მოვალეობა, მაგრამ არა ვალდებულება" }, isCorrect: true },
            { text: { fr: "Oui, sous peine d'amende", geo: "დიახ, წინააღმდეგ შემთხვევაში ჯარიმდება" }, isCorrect: false },
            { text: { fr: "Oui, pour les élections présidentielles uniquement", geo: "დიახ, საპრეზიდენტო არჩევნებისთვის" }, isCorrect: false },
            { text: { fr: "Non, seuls les hommes ont l'obligation de voter", geo: "არა, მხოლოდ მამაკაცებს აქვთ ხმის მიცემის ვალდებულება" }, isCorrect: false }
        ],
        remark: {
            fr: "« Voter n’est pas obligatoire en France : c’est un droit, mais aussi un devoir civique. »",
            geo: "«ხმის მიცემა საფრანგეთში სავალდებულო არ არის: ეს არის უფლება, მაგრამ ამავე დროს სამოქალაქო მოვალეობაც.»"
        }
    },
    {
        id: "CR-SIP-8",
        question: {
            fr: "À la fin de son mandat, le président de la République peut-il décider de rester au pouvoir ?",
            geo: "მანდატის დასრულების შემდეგ, შეუძლია თუ არა რესპუბლიკის პრეზიდენტს ძალაუფლებაში დარჩენა?"
        },
        options: [
            { text: { fr: "Non, il doit se présenter à nouveau aux élections s'il veut être réélu", geo: "არა, თუ მას სურს ხელახლა არჩევა, მან კვლავ უნდა მიიღოს მონაწილეობა არჩევნებში" }, isCorrect: true },
            { text: { fr: "Oui, s'il a l'accord de l'Assemblée nationale", geo: "დიახ, თუ მას ეროვნული ასამბლეის თანხმობა აქვს" }, isCorrect: false },
            { text: { fr: "Oui, pour une durée maximale de 2 ans", geo: "დიახ, მაქსიმუმ 2 წლის ვადით" }, isCorrect: false },
            { text: { fr: "Oui, s'il le décide seul", geo: "დიახ, თუ ის თავად მიიღებს ამ გადაწყვეტილებას" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le président de la République est élu pour 5 ans. Il ne peut faire que deux mandats de suite. »",
            geo: "«რესპუბლიკის პრეზიდენტი ირჩევა 5 წლის ვადით. მას შეუძლია მხოლოდ ორი ზედიზედ მანდატის შესრულება.»"
        }
    },
    {
        id: "CR-SIP-9",
        question: {
            fr: "Qui dirige l'action du Gouvernement ?",
            geo: "ვინ ხელმძღვანელობს მთავრობის საქმიანობას?"
        },
        options: [
            { text: { fr: "Le Premier ministre", geo: "პრემიერ-მინისტრი" }, isCorrect: true },
            { text: { fr: "Le président de l'Assemblée nationale", geo: "ეროვნული ასამბლეის პრეზიდენტი" }, isCorrect: false },
            { text: { fr: "Le ministre de l'Intérieur", geo: "შინაგან საქმეთა მინისტრი" }, isCorrect: false },
            { text: { fr: "Le maire de Paris", geo: "პარიზის მერი" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le Premier ministre dirige l’action du Gouvernement. »",
            geo: "«პრემიერ-მინისტრი ხელმძღვანელობს მთავრობის საქმიანობას.»"
        }
    },
    {
        id: "CR-SIP-10",
        question: {
            fr: "Qui nomme le Premier ministre ?",
            geo: "ვინ ნიშნავს პრემიერ-მინისტრს?"
        },
        options: [
            { text: { fr: "Le président de la République", geo: "რესპუბლიკის პრეზიდენტი" }, isCorrect: true },
            { text: { fr: "Les députés", geo: "დეპუტატები" }, isCorrect: false },
            { text: { fr: "Les citoyens lors d'un vote direct", geo: "მოქალაქეები პირდაპირი კენჭისყრით" }, isCorrect: false },
            { text: { fr: "Le Sénat", geo: "სენატი" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le président de la République nomme le Premier ministre. »",
            geo: "«რესპუბლიკის პრეზიდენტი ნიშნავს პრემიერ-მინისტრს.»"
        }
    },
    {
        id: "CR-SIP-11",
        question: {
            fr: "Quelle est l'organisation administrative de la France ?",
            geo: "როგორია საფრანგეთის ადმინისტრაციული მოწყობა?"
        },
        options: [
            { text: { fr: "L’État, les régions, les départements et les communes", geo: "სახელმწიფო, რეგიონები, დეპარტამენტები და კომუნები" }, isCorrect: true },
            { text: { fr: "L'État et les communes uniquement", geo: "მხოლოდ სახელმწიფო და კომუნები" }, isCorrect: false },
            { text: { fr: "L'État, les provinces et les mairies", geo: "სახელმწიფო, პროვინციები და მერიები" }, isCorrect: false },
            { text: { fr: "L'État et les cantons", geo: "სახელმწიფო და კანტონები" }, isCorrect: false }
        ],
        remark: {
            fr: "« La France est divisée en plusieurs niveaux d’administration pour être mieux gérée au quotidien : les communes, les départements, les régions et l’État. »",
            geo: "«საფრანგეთი იყოფა მართვის რამდენიმე დონედ ყოველდღიური უკეთესი ადმინისტრირებისთვის: კომუნები, დეპარტამენტები, რეგიონები და სახელმწიფო.»"
        }
    },
    {
        id: "CR-SIP-12",
        question: {
            fr: "Qu'est-ce que le pouvoir législatif ? Le pouvoir :",
            geo: "რა არის საკანონმდებლო ხელისუფლება? ეს არის ძალაუფლება:"
        },
        options: [
            { text: { fr: "De voter les lois", geo: "კანონების მიღების (ხმის მიცემის)" }, isCorrect: true },
            { text: { fr: "De faire appliquer les lois", geo: "კანონების აღსრულების" }, isCorrect: false },
            { text: { fr: "De punir ceux qui ne respectent pas la loi", geo: "მათი დასჯის, ვინც არ არღვევს კანონს" }, isCorrect: false },
            { text: { fr: "De diriger l'armée", geo: "არმიის ხელმძღვანელობის" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le pouvoir législatif a pour rôle de discuter et de voter les lois. Il est détenu par le Parlement (l’Assemblée nationale et le Sénat). »",
            geo: "«საკანონმდებლო ხელისუფლების როლია კანონების განხილვა და მიღება. მას ფლობს პარლამენტი (ეროვნული ასამბლეა და სენატი).»"
        }
    },
    {
        id: "CR-SIP-13",
        question: {
            fr: "Pourquoi séparer les trois pouvoirs dans une démocratie ?",
            geo: "რატომ ხდება სამი ხელისუფლების განცალკევება დემოკრატიაში?"
        },
        options: [
            { text: { fr: "Pour éviter qu'une seule personne ou qu'un seul groupe n'ait tout le pouvoir", geo: "რათა თავიდან ავიცილოთ მთელი ძალაუფლების ერთი პირის ან ჯგუფის ხელში კონცენტრირება" }, isCorrect: true },
            { text: { fr: "Pour créer plus de postes de ministres", geo: "რათა შეიქმნას მეტი მინისტრის პოსტი" }, isCorrect: false },
            { text: { fr: "Pour dépenser moins d'argent public", geo: "საჯარო ფულის დასაზოგად" }, isCorrect: false },
            { text: { fr: "Parce que c'est une exigence de l'Union européenne", geo: "რადგან ეს არის ევროკავშირის მოთხოვნა" }, isCorrect: false }
        ],
        remark: {
            fr: "« Pour éviter qu’une seule personne ou institution ne concentre tous les pouvoirs et ne devienne autoritaire, les pouvoirs sont séparés. »",
            geo: "«იმისათვის, რომ ერთმა პირმა ან ინსტიტუტმა არ მოახდინოს ყველა ძალაუფლების კონცენტრირება და არ გახდეს ავტორიტარული, ხელისუფლებები განცალკევებულია.»"
        }
    },
    {
        id: "CR-SIP-14",
        question: {
            fr: "Qui sanctionne l'auteur d'un vol ?",
            geo: "ვინ სჯის ქურდობის ჩამდენს?"
        },
        options: [
            { text: { fr: "Le pouvoir judiciaire (les juges)", geo: "სასამართლო ხელისუფლება (მოსამართლეები)" }, isCorrect: true },
            { text: { fr: "Le maire de la commune", geo: "კომუნის მერი" }, isCorrect: false },
            { text: { fr: "L'Assemblée nationale", geo: "ეროვნული ასამბლეა" }, isCorrect: false },
            { text: { fr: "Le président de la République", geo: "რესპუბლიკის პრეზიდენტი" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le pouvoir judiciaire a pour rôle de contrôler l’application de la loi et de sanctionner son non-respect. Il est exercé par les juges et les magistrats. »",
            geo: "«სასამართლო ხელისუფლების როლია კანონის აღსრულების კონტროლი და მისი დაურღვევლობის შემთხვევაში დასჯა. მას ახორციელებენ მოსამართლეები და მაგისტრატები.»"
        }
    },
    {
        id: "CR-SIP-15",
        question: {
            fr: "Quel est le rôle du gouvernement ?",
            geo: "რა არის მთავრობის როლი?"
        },
        options: [
            { text: { fr: "Déterminer et conduire la politique de la Nation (pouvoir exécutif)", geo: "ეროვნული პოლიტიკის განსაზღვრა და განხორციელება (აღმასრულებელი ხელისუფლება)" }, isCorrect: true },
            { text: { fr: "Voter les lois", geo: "კანონების მიღება" }, isCorrect: false },
            { text: { fr: "Rendre la justice", geo: "მართლმსაჯულების აღსრულება" }, isCorrect: false },
            { text: { fr: "Élire le président de la République", geo: "რესპუბლიკის პრეზიდენტის არჩევა" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le Gouvernement détermine et conduit la politique de la Nation. Il détient le pouvoir exécutif avec le président de la République. »",
            geo: "«მთავრობა განსაზღვრავს და ატარებს ერის პოლიტიკას. ის ფლობს აღმასრულებელ ხელისუფლებას რესპუბლიკის პრეზიდენტთან ერთად.»"
        }
    },
        {
        id: "CR-SIP-16",
        question: {
            fr: "Que se passe-t-il si un ministre ne respecte pas la loi ?",
            geo: "რა ხდება, თუ მინისტრი არღვევს კანონს?"
        },
        options: [
            { text: { fr: "Il est jugé par un tribunal comme tout citoyen", geo: "მას სასამართლო გაასამართლებს, როგორც ნებისმიერ მოქალაქეს" }, isCorrect: true },
            { text: { fr: "Il est protégé et ne peut pas être jugé", geo: "ის დაცულია და არ შეიძლება გასამართლდეს" }, isCorrect: false },
            { text: { fr: "Il est jugé par le président de la République", geo: "მას ასამართლებს რესპუბლიკის პრეზიდენტი" }, isCorrect: false },
            { text: { fr: "Il paie une amende à la police directement", geo: "ის იხდის ჯარიმას პირდაპირ პოლიციაში" }, isCorrect: false }
        ],
        remark: {
            fr: "« Les lois s’appliquent à tous, y compris aux gouvernants. Si un ministre ou le président de la République commet un délit ou un crime, il est jugé par un tribunal. »",
            geo: "«კანონები ვრცელდება ყველაზე, მათ შორის მმართველებზე. თუ მინისტრი ან პრეზიდენტი დანაშაულს ჩაიდენს, მას სასამართლო გაასამართლებს.»"
        }
    },
    {
        id: "CR-SIP-17",
        question: {
            fr: "Combien de députés composent l’Assemblée nationale ?",
            geo: "რამდენი დეპუტატისგან შედგება ეროვნული ასამბლეა?"
        },
        options: [
            { text: { fr: "577", geo: "577" }, isCorrect: true },
            { text: { fr: "348", geo: "348" }, isCorrect: false },
            { text: { fr: "400", geo: "400" }, isCorrect: false },
            { text: { fr: "650", geo: "650" }, isCorrect: false }
        ],
        remark: {
            fr: "« L'Assemblée nationale est composée de 577 députés, élus pour 5 ans par les citoyens lors des élections législatives. »",
            geo: "«ეროვნული ასამბლეა შედგება 577 დეპუტატისგან, რომლებსაც ირჩევენ მოქალაქეები 5 წლის ვადით საკანონმდებლო არჩევნებზე.»"
        }
    },
    {
        id: "CR-SIP-18",
        question: {
            fr: "Qui peut voter aux élections en France ?",
            geo: "ვის შეუძლია მონაწილეობა მიიღოს არჩევნებში საფრანგეთში?"
        },
        options: [
            { text: { fr: "Les citoyens français majeurs inscrits sur les listes électorales", geo: "სრულწლოვან საფრანგეთის მოქალაქეებს, რომლებიც რეგისტრირებულნი არიან საარჩევნო სიებში" }, isCorrect: true },
            { text: { fr: "Toutes les personnes vivant en France", geo: "საფრანგეთში მცხოვრებ ყველა ადამიანს" }, isCorrect: false },
            { text: { fr: "Seuls les citoyens français qui travaillent", geo: "მხოლოდ იმ საფრანგეთის მოქალაქეებს, რომლებიც მუშაობენ" }, isCorrect: false },
            { text: { fr: "Toutes les personnes de plus de 16 ans", geo: "16 წელს ზემოთ ყველა პირს" }, isCorrect: false }
        ],
        remark: {
            fr: "« Pour voter, il faut avoir la nationalité française, être majeur (avoir 18 ans) et être inscrit sur les listes électorales. »",
            geo: "«ხმის მისაცემად უნდა გქონდეთ საფრანგეთის მოქალაქეობა, იყოთ სრულწლოვანი (18 წლის) და რეგისტრირებული საარჩევნო სიებში.»"
        }
    },
    {
        id: "CR-SIP-19",
        question: {
            fr: "Pour combien de temps sont élus les sénateurs ?",
            geo: "რამდენი ხნით ირჩევიან სენატორები?"
        },
        options: [
            { text: { fr: "Pour 6 ans", geo: "6 წლით" }, isCorrect: true },
            { text: { fr: "Pour 5 ans", geo: "5 წლით" }, isCorrect: false },
            { text: { fr: "Pour 4 ans", geo: "4 წლით" }, isCorrect: false },
            { text: { fr: "Pour 7 ans", geo: "7 წლით" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le Sénat est composé de 348 sénateurs, élus pour 6 ans par les « grands électeurs » (les maires, conseillers régionaux, etc.). »",
            geo: "«სენატი შედგება 348 სენატორისგან, რომლებსაც ირჩევენ 6 წლის ვადით ე.წ. \"დიდი ამომრჩევლები\" (მერები, რეგიონული მრჩევლები და ა.შ.).»"
        }
    },
    {
        id: "CR-SIP-20",
        question: {
            fr: "La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?",
            geo: "ხელისუფლების განაწილება ფუნდამენტური პრინციპია. რომელია ეს სამი ხელისუფლება?"
        },
        options: [
            { text: { fr: "Le pouvoir exécutif, législatif et judiciaire", geo: "აღმასრულებელი, საკანონმდებლო და სასამართლო ხელისუფლება" }, isCorrect: true },
            { text: { fr: "Le pouvoir économique, médiatique et militaire", geo: "ეკონომიკური, მედია და სამხედრო ხელისუფლება" }, isCorrect: false },
            { text: { fr: "Le pouvoir municipal, régional et national", geo: "მუნიციპალური, რეგიონული და ეროვნული ხელისუფლება" }, isCorrect: false },
            { text: { fr: "Le pouvoir présidentiel, ministériel et sénatorial", geo: "საპრეზიდენტო, მინისტრთა და სენატის ხელისუფლება" }, isCorrect: false }
        ],
        remark: {
            fr: "« Dans une démocratie, il existe trois pouvoirs séparés : le pouvoir exécutif, le pouvoir législatif et le pouvoir judiciaire. »",
            geo: "«დემოკრატიაში არსებობს სამი განცალკევებული ხელისუფლება: აღმასრულებელი ხელისუფლება, საკანონმდებლო ხელისუფლება და სასამართლო ხელისუფლება.»"
        }
    },
    {
        id: "CR-SIP-21",
        question: {
            fr: "Est-ce que le président de la République a tous les pouvoirs ?",
            geo: "აქვს თუ არა რესპუბლიკის პრეზიდენტს ყველა ძალაუფლება?"
        },
        options: [
            { text: { fr: "Non, les pouvoirs sont séparés", geo: "არა, ძალაუფლებები განცალკევებულია" }, isCorrect: true },
            { text: { fr: "Oui, il dirige l'ensemble du pays seul", geo: "დიახ, ის მარტო მართავს მთელ ქვეყანას" }, isCorrect: false },
            { text: { fr: "Oui, mais uniquement en temps de guerre", geo: "დიახ, მაგრამ მხოლოდ ომის დროს" }, isCorrect: false },
            { text: { fr: "Non, c'est le Premier ministre qui a tous les pouvoirs", geo: "არა, ყველა ძალაუფლება პრემიერ-მინისტრს აქვს" }, isCorrect: false }
        ],
        remark: {
            fr: "« Pour éviter qu’une seule personne ou institution ne concentre tous les pouvoirs et ne devienne autoritaire, les pouvoirs sont séparés. »",
            geo: "«იმისათვის, რომ ერთმა პირმა ან ინსტიტუტმა არ მოახდინოს ყველა ძალაუფლების კონცენტრირება და არ გახდეს ავტორიტარული, ხელისუფლებები განცალკევებულია.»"
        }
    },
    {
        id: "CR-SIP-22",
        question: {
            fr: "Qui est le préfet ?",
            geo: "ვინ არის პრეფექტი?"
        },
        options: [
            { text: { fr: "Le représentant de l'État dans le département et la région", geo: "სახელმწიფოს წარმომადგენელი დეპარტამენტსა და რეგიონში" }, isCorrect: true },
            { text: { fr: "Le chef de la police municipale", geo: "მუნიციპალური პოლიციის უფროსი" }, isCorrect: false },
            { text: { fr: "L'adjoint du maire", geo: "მერის მოადგილე" }, isCorrect: false },
            { text: { fr: "Le responsable des impôts", geo: "საგადასახადო სამსახურის ხელმძღვანელი" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le préfet est le représentant de l’État dans le département et la région. Il fait appliquer les politiques du gouvernement sur le territoire. »",
            geo: "«პრეფექტი არის სახელმწიფოს წარმომადგენელი დეპარტამენტსა და რეგიონში. ის უზრუნველყოფს მთავრობის პოლიტიკის განხორციელებას ტერიტორიაზე.»"
        }
    },
    {
        id: "CR-SIP-23",
        question: {
            fr: "Quelle condition est nécessaire pour voter aux élections ?",
            geo: "რა პირობაა აუცილებელი არჩევნებში ხმის მისაცემად?"
        },
        options: [
            { text: { fr: "Être inscrit sur les listes électorales", geo: "საარჩევნო სიებში რეგისტრაცია" }, isCorrect: true },
            { text: { fr: "Avoir un emploi en France", geo: "საფრანგეთში დასაქმება" }, isCorrect: false },
            { text: { fr: "Être propriétaire de son logement", geo: "საცხოვრებლის საკუთრებაში ქონა" }, isCorrect: false },
            { text: { fr: "Payer des impôts depuis 5 ans", geo: "გადასახადების გადახდა 5 წლის განმავლობაში" }, isCorrect: false }
        ],
        remark: {
            fr: "« Pour voter, il faut avoir la nationalité française, être majeur (avoir 18 ans) et être obligatoirement inscrit sur les listes électorales de sa commune. »",
            geo: "«ხმის მისაცემად აუცილებელია გქონდეთ საფრანგეთის მოქალაქეობა, იყოთ სრულწლოვანი (18 წლის) და სავალდებულო წესით რეგისტრირებული თქვენი კომუნის საარჩევნო სიებში.»"
        }
    },
    {
        id: "CR-SIP-24",
        question: {
            fr: "Qui dirige la commune ?",
            geo: "ვინ ხელმძღვანელობს კომუნას?"
        },
        options: [
            { text: { fr: "Le maire et le conseil municipal", geo: "მერი და მუნიციპალური საბჭო" }, isCorrect: true },
            { text: { fr: "Le préfet", geo: "პრეფექტი" }, isCorrect: false },
            { text: { fr: "Le député", geo: "დეპუტატი" }, isCorrect: false },
            { text: { fr: "Le commissaire de police", geo: "პოლიციის კომისარი" }, isCorrect: false }
        ],
        remark: {
            fr: "« La commune est gérée par le conseil municipal, qui élit le maire parmi ses membres. »",
            geo: "«კომუნას მართავს მუნიციპალური საბჭო, რომელიც თავისი წევრებიდან ირჩევს მერს.»"
        }
    },
    {
        id: "CR-SIP-25",
        question: {
            fr: "Quel est le régime politique de la France aujourd'hui ?",
            geo: "როგორია დღეს საფრანგეთის პოლიტიკური რეჟიმი?"
        },
        options: [
            { text: { fr: "La Ve République", geo: "მეხუთე რესპუბლიკა" }, isCorrect: true },
            { text: { fr: "La monarchie constitutionnelle", geo: "კონსტიტუციური მონარქია" }, isCorrect: false },
            { text: { fr: "La VIe République", geo: "მეექვსე რესპუბლიკა" }, isCorrect: false },
            { text: { fr: "Un empire", geo: "იმპერია" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le régime politique actuel de la France est la Cinquième (Vème) République, instaurée par la Constitution de 1958. »",
            geo: "«საფრანგეთის ამჟამინდელი პოლიტიკური რეჟიმი არის მეხუთე (V) რესპუბლიკა, რომელიც დაარსდა 1958 წლის კონსტიტუციით.»"
        }
    },
    {
        id: "CR-SIP-26",
        question: {
            fr: "Qu'est-ce que l'Hôtel de Matignon ?",
            geo: "რა არის მატინიონის სასახლე (l'Hôtel de Matignon)?"
        },
        options: [
            { text: { fr: "La résidence officielle et le bureau du Premier ministre", geo: "პრემიერ-მინისტრის ოფიციალური რეზიდენცია და სამუშაო ადგილი" }, isCorrect: true },
            { text: { fr: "La résidence du président de la République", geo: "რესპუბლიკის პრეზიდენტის რეზიდენცია" }, isCorrect: false },
            { text: { fr: "Le bâtiment de l'Assemblée nationale", geo: "ეროვნული ასამბლეის შენობა" }, isCorrect: false },
            { text: { fr: "Le ministère de l'Intérieur", geo: "შინაგან საქმეთა სამინისტრო" }, isCorrect: false }
        ],
        remark: {
            fr: "« L'Hôtel de Matignon, situé à Paris, est la résidence officielle et le lieu de travail du Premier ministre. »",
            geo: "«მატინიონის სასახლე, რომელიც მდებარეობს პარიზში, არის პრემიერ-მინისტრის ოფიციალური რეზიდენცია და სამუშაო ადგილი.»"
        }
    },
    {
        id: "CR-SIP-27",
        question: {
            fr: "Le Parlement est composé :",
            geo: "პარლამენტი შედგება:"
        },
        options: [
            { text: { fr: "De l'Assemblée nationale et du Sénat", geo: "ეროვნული ასამბლეისა და სენატისგან" }, isCorrect: true },
            { text: { fr: "Du président de la République et du Gouvernement", geo: "რესპუბლიკის პრეზიდენტისა და მთავრობისგან" }, isCorrect: false },
            { text: { fr: "Des maires et des préfets", geo: "მერებისა და პრეფექტებისგან" }, isCorrect: false },
            { text: { fr: "Des juges et des avocats", geo: "მოსამართლეებისა და ადვოკატებისგან" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le Parlement (le pouvoir législatif) est composé de deux chambres : l’Assemblée nationale et le Sénat. »",
            geo: "«პარლამენტი (საკანონმდებლო ხელისუფლება) შედგება ორი პალატისგან: ეროვნული ასამბლეა და სენატი.»"
        }
    },
    {
        id: "CR-SIP-28",
        question: {
            fr: "Quel est le rôle du président de la République ?",
            geo: "რა არის რესპუბლიკის პრეზიდენტის როლი?"
        },
        options: [
            { text: { fr: "Il veille au respect de la Constitution et est le chef des armées", geo: "ის უზრუნველყოფს კონსტიტუციის დაცვას და არის შეიარაღებული ძალების მთავარსარდალი" }, isCorrect: true },
            { text: { fr: "Il vote toutes les lois seul", geo: "ის მარტო იღებს ყველა კანონს" }, isCorrect: false },
            { text: { fr: "Il dirige les tribunaux", geo: "ის ხელმძღვანელობს სასამართლოებს" }, isCorrect: false },
            { text: { fr: "Il gère les communes à la place des maires", geo: "ის მართავს კომუნებს მერების ნაცვლად" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le président de la République veille au respect de la Constitution. Il est le chef des armées et le garant de l'indépendance nationale. »",
            geo: "«რესპუბლიკის პრეზიდენტი უზრუნველყოფს კონსტიტუციის დაცვას. იგი არის შეიარაღებული ძალების მთავარსარდალი და ეროვნული დამოუკიდებლობის გარანტი.»"
        }
    },
    {
        id: "CR-SIP-29",
        question: {
            fr: "Quel est le rôle du Premier ministre ?",
            geo: "რა არის პრემიერ-მინისტრის როლი?"
        },
        options: [
            { text: { fr: "Il dirige l'action du Gouvernement", geo: "ის ხელმძღვანელობს მთავრობის საქმიანობას" }, isCorrect: true },
            { text: { fr: "Il remplace le président s'il est malade", geo: "ის ანაცვლებს პრეზიდენტს მისი ავადმყოფობის შემთხვევაში" }, isCorrect: false },
            { text: { fr: "Il juge les crimes graves", geo: "ის ასამართლებს მძიმე დანაშაულებს" }, isCorrect: false },
            { text: { fr: "Il choisit les maires de toutes les villes", geo: "ის ირჩევს ყველა ქალაქის მერს" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le Premier ministre dirige l’action du Gouvernement et s'assure de la mise en œuvre des lois. »",
            geo: "«პრემიერ-მინისტრი ხელმძღვანელობს მთავრობის საქმიანობას და უზრუნველყოფს კანონების შესრულებას.»"
        }
    },
    {
        id: "CR-SIP-30",
        question: {
            fr: "Qui est le chef du Gouvernement ?",
            geo: "ვინ არის მთავრობის მეთაური?"
        },
        options: [
            { text: { fr: "Le Premier ministre", geo: "პრემიერ-მინისტრი" }, isCorrect: true },
            { text: { fr: "Le président de la République", geo: "რესპუბლიკის პრეზიდენტი" }, isCorrect: false },
            { text: { fr: "Le ministre de l'Économie", geo: "ეკონომიკის მინისტრი" }, isCorrect: false },
            { text: { fr: "Le Défenseur des droits", geo: "უფლებათა დამცველი" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le chef du Gouvernement est le Premier ministre, qui est nommé par le président de la République. »",
            geo: "«მთავრობის მეთაური არის პრემიერ-მინისტრი, რომელსაც ნიშნავს რესპუბლიკის პრეზიდენტი.»"
        }
    },
        {
        id: "CR-SIP-31",
        question: {
            fr: "Combien y a-t-il de régions en France ?",
            geo: "რამდენი რეგიონია საფრანგეთში?"
        },
        options: [
            { text: { fr: "18 régions (13 en métropole et 5 outre-mer)", geo: "18 რეგიონი (13 მეტროპოლიაში და 5 ზღვისგადაღმა)" }, isCorrect: true },
            { text: { fr: "22 régions", geo: "22 რეგიონი" }, isCorrect: false },
            { text: { fr: "10 régions", geo: "10 რეგიონი" }, isCorrect: false },
            { text: { fr: "15 régions", geo: "15 რეგიონი" }, isCorrect: false }
        ],
        remark: {
            fr: "« La France est découpée en 18 régions : 13 régions en France métropolitaine (dont la Corse) et 5 régions d'outre-mer. »",
            geo: "«საფრანგეთი დაყოფილია 18 რეგიონად: 13 რეგიონი მეტროპოლიურ საფრანგეთში (მათ შორის კორსიკა) და 5 ზღვისგადაღმა რეგიონი.»"
        }
    },
    {
        id: "CR-SIP-32",
        question: {
            fr: "Quel est le rôle du Défenseur des droits ?",
            geo: "რა არის უფლებათა დამცველის (Défenseur des droits) როლი?"
        },
        options: [
            { text: { fr: "Il protège et défend les personnes dont les droits ne sont pas respectés", geo: "ის იცავს იმ ადამიანებს, რომელთა უფლებებიც ირღვევა" }, isCorrect: true },
            { text: { fr: "Il vote les lois à l'Assemblée", geo: "ის იღებს კანონებს ასამბლეაში" }, isCorrect: false },
            { text: { fr: "Il juge les criminels", geo: "ის ასამართლებს დამნაშავეებს" }, isCorrect: false },
            { text: { fr: "Il dirige les prisons", geo: "ის მართავს ციხეებს" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le Défenseur des droits est une institution indépendante de l'État. Son rôle est de défendre les personnes dont les droits ne sont pas respectés. »",
            geo: "«უფლებათა დამცველი არის სახელმწიფოსგან დამოუკიდებელი ინსტიტუტი. მისი როლია დაიცვას ის ადამიანები, რომელთა უფლებებიც არ არის დაცული.»"
        }
    },
    {
        id: "CR-SIP-33",
        question: {
            fr: "Depuis quand l'euro est-elle la monnaie unique ?",
            geo: "როდიდან არის ევრო ერთიანი ვალუტა?"
        },
        options: [
            { text: { fr: "Depuis 2002", geo: "2002 წლიდან" }, isCorrect: true },
            { text: { fr: "Depuis 1999", geo: "1999 წლიდან" }, isCorrect: false },
            { text: { fr: "Depuis 1992", geo: "1992 წლიდან" }, isCorrect: false },
            { text: { fr: "Depuis 2010", geo: "2010 წლიდან" }, isCorrect: false }
        ],
        remark: {
            fr: "« Depuis le 1er janvier 2002, l’euro est la monnaie unique utilisée par la majorité des pays de l’Union européenne. »",
            geo: "«2002 წლის 1-ლი იანვრიდან ევრო არის ერთიანი ვალუტა, რომელსაც იყენებს ევროკავშირის ქვეყნების უმეტესობა.»"
        }
    },
    {
        id: "CR-SIP-34",
        question: {
            fr: "Quel est le rôle principal du département ?",
            geo: "რა არის დეპარტამენტის მთავარი როლი?"
        },
        options: [
            { text: { fr: "Gérer l'action sociale (aides aux personnes âgées, handicapées, etc.)", geo: "სოციალური დახმარების მართვა (დახმარება მოხუცებისთვის, შშმ პირებისთვის და ა.შ.)" }, isCorrect: true },
            { text: { fr: "Diriger l'armée française", geo: "საფრანგეთის არმიის ხელმძღვანელობა" }, isCorrect: false },
            { text: { fr: "Émettre des passeports", geo: "პასპორტების გაცემა" }, isCorrect: false },
            { text: { fr: "Voter le budget de la Nation", geo: "ერის ბიუჯეტის მიღება" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le département gère principalement l'action sociale (aides aux personnes âgées, personnes handicapées, protection de l'enfance). »",
            geo: "«დეპარტამენტი ძირითადად განაგებს სოციალურ დახმარებას (მოხუცთა, შშმ პირთა დახმარება, ბავშვთა დაცვა).»"
        }
    },
    {
        id: "CR-SIP-35",
        question: {
            fr: "Quel est le rôle principal des communes ?",
            geo: "რა არის კომუნების მთავარი როლი?"
        },
        options: [
            { text: { fr: "Gérer la vie locale (écoles, état civil, urbanisme)", geo: "ადგილობრივი ცხოვრების მართვა (სკოლები, სამოქალაქო რეესტრი, ურბანიზმი)" }, isCorrect: true },
            { text: { fr: "Gérer les hôpitaux nationaux", geo: "ეროვნული საავადმყოფოების მართვა" }, isCorrect: false },
            { text: { fr: "Diriger la police nationale", geo: "ეროვნული პოლიციის ხელმძღვანელობა" }, isCorrect: false },
            { text: { fr: "Imprimer la monnaie", geo: "ფულის ბეჭდვა" }, isCorrect: false }
        ],
        remark: {
            fr: "« La commune a pour rôle d’organiser la vie locale : les écoles maternelles et élémentaires, l'état civil, et l’action sociale locale. »",
            geo: "«კომუნის როლია ადგილობრივი ცხოვრების ორგანიზება: საბავშვო ბაღები და დაწყებითი სკოლები, სამოქალაქო რეესტრი და ადგილობრივი სოციალური დახმარება.»"
        }
    },
    {
        id: "CR-SIP-36",
        question: {
            fr: "Combien de communes environ existe-t-il en France ?",
            geo: "დაახლოებით რამდენი კომუნა არსებობს საფრანგეთში?"
        },
        options: [
            { text: { fr: "Environ 35 000 communes", geo: "დაახლოებით 35 000 კომუნა" }, isCorrect: true },
            { text: { fr: "Environ 10 000 communes", geo: "დაახლოებით 10 000 კომუნა" }, isCorrect: false },
            { text: { fr: "Environ 50 000 communes", geo: "დაახლოებით 50 000 კომუნა" }, isCorrect: false },
            { text: { fr: "Environ 5 000 communes", geo: "დაახლოებით 5 000 კომუნა" }, isCorrect: false }
        ],
        remark: {
            fr: "« La France compte un peu moins de 35 000 communes. C'est l'échelon administratif le plus proche des citoyens. »",
            geo: "«საფრანგეთში დაახლოებით 35 000 კომუნაა. ეს არის ადმინისტრაციული დონე, რომელიც ყველაზე ახლოსაა მოქალაქეებთან.»"
        }
    },
    {
        id: "CR-SIP-37",
        question: {
            fr: "Quel traité concerne la construction de l'Union européenne ?",
            geo: "რომელი ხელშეკრულება ეხება ევროკავშირის შექმნას?"
        },
        options: [
            { text: { fr: "Le traité de Rome", geo: "რომის ხელშეკრულება" }, isCorrect: true },
            { text: { fr: "Le traité de Versailles", geo: "ვერსალის ხელშეკრულება" }, isCorrect: false },
            { text: { fr: "Le traité de Paris", geo: "პარიზის ხელშეკრულება" }, isCorrect: false },
            { text: { fr: "Le traité de Genève", geo: "ჟენევის ხელშეკრულება" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le traité de Rome (1957) a institué la Communauté économique européenne (CEE), ancêtre de l'Union européenne. »",
            geo: "«რომის ხელშეკრულებამ (1957) დააარსა ევროპის ეკონომიკური საზოგადოება (EEC), ევროკავშირის წინამორბედი.»"
        }
    },
    {
        id: "CR-SIP-38",
        question: {
            fr: "Quel État a quitté l'Union européenne en 2020 ?",
            geo: "რომელმა სახელმწიფომ დატოვა ევროკავშირი 2020 წელს?"
        },
        options: [
            { text: { fr: "Le Royaume-Uni", geo: "გაერთიანებულმა სამეფომ" }, isCorrect: true },
            { text: { fr: "L'Espagne", geo: "ესპანეთმა" }, isCorrect: false },
            { text: { fr: "La Grèce", geo: "საბერძნეთმა" }, isCorrect: false },
            { text: { fr: "L'Italie", geo: "იტალიამ" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le Royaume-Uni a officiellement quitté l'Union européenne le 31 janvier 2020, c'est ce qu'on appelle le Brexit. »",
            geo: "«გაერთიანებულმა სამეფომ ოფიციალურად დატოვა ევროკავშირი 2020 წლის 31 იანვარს, რასაც ბრექსიტი (Brexit) ეწოდება.»"
        }
    },
    {
        id: "CR-SIP-39",
        question: {
            fr: "Quelle est la devise de l’Union européenne ?",
            geo: "რა არის ევროკავშირის დევიზი?"
        },
        options: [
            { text: { fr: "Unie dans la diversité", geo: "ერთიანი მრავალფეროვნებაში" }, isCorrect: true },
            { text: { fr: "Liberté, Égalité, Fraternité", geo: "თავისუფლება, თანასწორობა, ძმობა" }, isCorrect: false },
            { text: { fr: "La paix pour tous", geo: "მშვიდობა ყველასათვის" }, isCorrect: false },
            { text: { fr: "Tous pour un", geo: "ყველა ერთისთვის" }, isCorrect: false }
        ],
        remark: {
            fr: "« La devise de l'Union européenne est \"Unie dans la diversité\". Elle souligne que les Européens s'unissent pour œuvrer en faveur de la paix. »",
            geo: "«ევროკავშირის დევიზია \"ერთიანი მრავალფეროვნებაში\". იგი ხაზს უსვამს, რომ ევროპელები ერთიანდებიან მშვიდობისთვის.»"
        }
    },
    {
        id: "CR-SIP-40",
        question: {
            fr: "Quel est l'hymne de l'Union européenne ?",
            geo: "რა არის ევროკავშირის ჰიმნი?"
        },
        options: [
            { text: { fr: "L'Ode à la joie", geo: "სიხარულის ოდა" }, isCorrect: true },
            { text: { fr: "La Marseillaise", geo: "მარსელიოზა" }, isCorrect: false },
            { text: { fr: "Le Chant des Partisans", geo: "პარტიზანთა სიმღერა" }, isCorrect: false },
            { text: { fr: "L'Internationale", geo: "ინტერნაციონალი" }, isCorrect: false }
        ],
        remark: {
            fr: "« L'hymne européen est la mélodie tirée de la Neuvième Symphonie composée en 1823 par Ludwig van Beethoven, appelée l'Ode à la joie. »",
            geo: "«ევროპული ჰიმნი არის 1823 წელს ლუდვიგ ვან ბეთჰოვენის მიერ დაწერილი მეცხრე სიმფონიის მელოდია, რომელსაც \"სიხარულის ოდა\" ეწოდება.»"
        }
    },
    {
        id: "CR-SIP-41",
        question: {
            fr: "De quoi est composé le drapeau européen ?",
            geo: "რისგან შედგება ევროპის დროშა?"
        },
        options: [
            { text: { fr: "De 12 étoiles dorées disposées en cercle", geo: "12 ოქროსფერი ვარსკვლავისგან წრეზე" }, isCorrect: true },
            { text: { fr: "De 27 étoiles blanches", geo: "27 თეთრი ვარსკვლავისგან" }, isCorrect: false },
            { text: { fr: "D'une croix dorée", geo: "ოქროსფერი ჯვრისგან" }, isCorrect: false },
            { text: { fr: "De trois bandes de couleurs", geo: "სამი ფერადი ზოლისგან" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le drapeau européen est constitué de 12 étoiles dorées disposées en cercle. Le nombre 12 symbolise la perfection et l'unité. »",
            geo: "«ევროპის დროშა შედგება წრეზე განლაგებული 12 ოქროსფერი ვარსკვლავისგან. რიცხვი 12 სრულყოფილებისა და ერთიანობის სიმბოლოა.»"
        }
    },
    {
        id: "CR-SIP-42",
        question: {
            fr: "De quelle couleur est le drapeau européen ?",
            geo: "რა ფერისაა ევროპის დროშა?"
        },
        options: [
            { text: { fr: "Fond bleu avec des étoiles dorées", geo: "ლურჯი ფონი ოქროსფერი ვარსკვლავებით" }, isCorrect: true },
            { text: { fr: "Fond rouge avec des étoiles blanches", geo: "წითელი ფონი თეთრი ვარსკვლავებით" }, isCorrect: false },
            { text: { fr: "Fond blanc avec des étoiles bleues", geo: "თეთრი ფონი ლურჯი ვარსკვლავებით" }, isCorrect: false },
            { text: { fr: "Fond vert et bleu", geo: "მწვანე და ლურჯი ფონი" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le drapeau représente un cercle de 12 étoiles dorées sur fond bleu. »",
            geo: "«დროშა წარმოადგენს ლურჯ ფონზე წრიულად განლაგებულ 12 ოქროსფერ ვარსკვლავს.»"
        }
    },
    {
        id: "CR-SIP-43",
        question: {
            fr: "En quelle année le traité de Maastricht, qui marque la fondation de l'Union européenne, a-t-il été signé ?",
            geo: "რომელ წელს მოეწერა ხელი მაასტრიხტის ხელშეკრულებას, რომელიც ევროკავშირის დაარსებას აღნიშნავს?"
        },
        options: [
            { text: { fr: "1992", geo: "1992 წელს" }, isCorrect: true },
            { text: { fr: "1957", geo: "1957 წელს" }, isCorrect: false },
            { text: { fr: "1989", geo: "1989 წელს" }, isCorrect: false },
            { text: { fr: "2002", geo: "2002 წელს" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le Traité de Maastricht a été signé en 1992. Il marque la création officielle de l'Union européenne. »",
            geo: "«მაასტრიხტის ხელშეკრულებას ხელი მოეწერა 1992 წელს. ის ევროკავშირის ოფიციალურ დაარსებას აღნიშნავს.»"
        }
    },
    {
        id: "CR-SIP-44",
        question: {
            fr: "Où est le siège du Parlement européen ?",
            geo: "სად მდებარეობს ევროპარლამენტის შტაბ-ბინა?"
        },
        options: [
            { text: { fr: "À Strasbourg", geo: "სტრასბურგში" }, isCorrect: true },
            { text: { fr: "À Paris", geo: "პარიზში" }, isCorrect: false },
            { text: { fr: "À Berlin", geo: "ბერლინში" }, isCorrect: false },
            { text: { fr: "À Londres", geo: "ლონდონში" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le siège officiel du Parlement européen se trouve en France, à Strasbourg. »",
            geo: "«ევროპარლამენტის ოფიციალური შტაბ-ბინა მდებარეობს საფრანგეთში, კერძოდ სტრასბურგში.»"
        }
    },
    {
        id: "CR-SIP-45",
        question: {
            fr: "Où est le siège de la Commission européenne ?",
            geo: "სად მდებარეობს ევროკომისიის შტაბ-ბინა?"
        },
        options: [
            { text: { fr: "À Bruxelles", geo: "ბრიუსელში" }, isCorrect: true },
            { text: { fr: "À Genève", geo: "ჟენევაში" }, isCorrect: false },
            { text: { fr: "À Madrid", geo: "მადრიდში" }, isCorrect: false },
            { text: { fr: "À Amsterdam", geo: "ამსტერდამში" }, isCorrect: false }
        ],
        remark: {
            fr: "« La Commission européenne a son siège principal à Bruxelles, en Belgique. »",
            geo: "«ევროკომისიის მთავარი შტაბ-ბინა მდებარეობს ბელგიაში, ქალაქ ბრიუსელში.»"
        }
    },
    {
        id: "CR-SIP-46",
        question: {
            fr: "Quel État n'est pas membre de l'Union européenne ?",
            geo: "რომელი სახელმწიფო არ არის ევროკავშირის წევრი?"
        },
        options: [
            { text: { fr: "La Suisse", geo: "შვეიცარია" }, isCorrect: true },
            { text: { fr: "La France", geo: "საფრანგეთი" }, isCorrect: false },
            { text: { fr: "L'Espagne", geo: "ესპანეთი" }, isCorrect: false },
            { text: { fr: "L'Allemagne", geo: "გერმანია" }, isCorrect: false }
        ],
        remark: {
            fr: "« La Suisse est un pays européen mais elle n'a jamais adhéré à l'Union européenne. »",
            geo: "«შვეიცარია ევროპული ქვეყანაა, მაგრამ ის არასდროს გაწევრიანებულა ევროკავშირში.»"
        }
    },
    {
        id: "CR-SIP-47",
        question: {
            fr: "Quand célèbre-t-on la journée de l'Europe ?",
            geo: "როდის აღინიშნება ევროპის დღე?"
        },
        options: [
            { text: { fr: "Le 9 mai", geo: "9 მაისს" }, isCorrect: true },
            { text: { fr: "Le 14 juillet", geo: "14 ივლისს" }, isCorrect: false },
            { text: { fr: "Le 11 novembre", geo: "11 ნოემბერს" }, isCorrect: false },
            { text: { fr: "Le 1er mai", geo: "1 მაისს" }, isCorrect: false }
        ],
        remark: {
            fr: "« La journée de l'Europe est célébrée chaque année le 9 mai, pour commémorer la Déclaration Schuman (1950) qui a été le point de départ de l'Europe unie. »",
            geo: "«ევროპის დღე აღინიშნება ყოველი წლის 9 მაისს, რათა გავიხსენოთ 1950 წლის შუმანის დეკლარაცია, რომელიც ერთიანი ევროპის საწყისი წერტილი გახდა.»"
        }
    },
    {
        id: "CR-SIP-48",
        question: {
            fr: "À quelle fréquence les élections européennes sont-elles organisées ?",
            geo: "რა სიხშირით ტარდება ევროპარლამენტის არჩევნები?"
        },
        options: [
            { text: { fr: "Tous les 5 ans", geo: "ყოველ 5 წელიწადში" }, isCorrect: true },
            { text: { fr: "Tous les 4 ans", geo: "ყოველ 4 წელიწადში" }, isCorrect: false },
            { text: { fr: "Tous les 6 ans", geo: "ყოველ 6 წელიწადში" }, isCorrect: false },
            { text: { fr: "Tous les 7 ans", geo: "ყოველ 7 წელიწადში" }, isCorrect: false }
        ],
        remark: {
            fr: "« Les députés européens sont élus au suffrage universel direct tous les 5 ans. »",
            geo: "«ევროპარლამენტის დეპუტატები ირჩევიან პირდაპირი საყოველთაო კენჭისყრით ყოველ 5 წელიწადში.»"
        }
    },
    {
        id: "CR-SIP-49",
        question: {
            fr: "Quelle condition est nécessaire pour voter aux élections européennes ?",
            geo: "რა პირობაა აუცილებელი ევროპარლამენტის არჩევნებში ხმის მისაცემად?"
        },
        options: [
            { text: { fr: "Avoir la nationalité d'un État membre de l'Union européenne", geo: "ევროკავშირის წევრი სახელმწიფოს მოქალაქეობა" }, isCorrect: true },
            { text: { fr: "Avoir plus de 21 ans", geo: "21 წელზე მეტი ასაკის ქონა" }, isCorrect: false },
            { text: { fr: "Parler anglais couramment", geo: "ინგლისურად თავისუფლად საუბარი" }, isCorrect: false },
            { text: { fr: "Payer des impôts à l'Europe", geo: "ევროპისთვის გადასახადების გადახდა" }, isCorrect: false }
        ],
        remark: {
            fr: "« Pour voter aux élections européennes en France, il faut être citoyen français ou citoyen d'un autre État membre de l'Union européenne vivant en France. »",
            geo: "«საფრანგეთში ევროპარლამენტის არჩევნებში მონაწილეობისთვის უნდა იყოთ საფრანგეთის ან ევროკავშირის სხვა წევრი სახელმწიფოს მოქალაქე, რომელიც ცხოვრობს საფრანგეთში.»"
        }
    },
    {
        id: "CR-SIP-50",
        question: {
            fr: "Quel pays est un pays fondateur de l'Union européenne ?",
            geo: "რომელი ქვეყანაა ევროკავშირის დამფუძნებელი?"
        },
        options: [
            { text: { fr: "La France", geo: "საფრანგეთი" }, isCorrect: true },
            { text: { fr: "L'Espagne", geo: "ესპანეთი" }, isCorrect: false },
            { text: { fr: "Le Royaume-Uni", geo: "გაერთიანებული სამეფო" }, isCorrect: false },
            { text: { fr: "La Grèce", geo: "საბერძნეთი" }, isCorrect: false }
        ],
        remark: {
            fr: "« Les 6 pays fondateurs sont la France, l'Allemagne, l'Italie, la Belgique, les Pays-Bas et le Luxembourg. »",
            geo: "«6 დამფუძნებელი ქვეყანაა: საფრანგეთი, გერმანია, იტალია, ბელგია, ნიდერლანდები და ლუქსემბურგი.»"
        }
    }
];