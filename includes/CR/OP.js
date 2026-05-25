// includes/CR/OP.js

export const misesEnSituation = [
    // ==========================================
    // THEME : PRINCIPES ET VALEURS (PVR)
    // ==========================================
    {
        id: "OP-PVR-1",
        type: "mise-en-situation",
        question: {
            fr: "Dans une mairie, une usagère demande à être reçue uniquement par une femme. Quelle doit être la réponse de l'agent ?",
            geo: "მერიაში მომხმარებელი ითხოვს, რომ მას მხოლოდ ქალი მოემსახუროს. რა უნდა უპასუხოს აგენტმა?"
        },
        options: [
            { text: { fr: "L'usager ne peut pas choisir le sexe de l'agent public au nom de la neutralité", geo: "მომხმარებელს არ შეუძლია აირჩიოს საჯარო მოხელის სქესი ნეიტრალიტეტის პრინციპიდან გამომდინარე" }, isCorrect: true },
            { text: { fr: "La mairie doit accepter pour respecter les croyances", geo: "მერია უნდა დათანხმდეს მრწამსის პატივისცემის გამო" }, isCorrect: false },
            { text: { fr: "L'agent doit appeler sa collègue pour éviter un conflit", geo: "აგენტმა უნდა დაუძახოს კოლეგას კონფლიქტის თავიდან ასაცილებლად" }, isCorrect: false },
            { text: { fr: "L'usagère doit payer une taxe pour choisir son interlocuteur", geo: "მომხმარებელმა უნდა გადაიხადოს მოსაკრებელი თანამოსაუბრის ასარჩევად" }, isCorrect: false }
        ],
        remark: {
            fr: "« La neutralité du service public s'impose aux agents mais aussi aux usagers qui ne peuvent récuser un agent pour son sexe ou sa religion. »",
            geo: "«საჯარო სამსახურის ნეიტრალიტეტი სავალდებულოა აგენტებისთვის, ასევე მომხმარებლებისთვის, რომლებსაც არ შეუძლიათ უარი თქვან აგენტზე სქესის ან რელიგიის გამო.»"
        }
    },
    {
        id: "OP-PVR-2",
        type: "mise-en-situation",
        question: {
            fr: "Votre voisin fait beaucoup de bruit tard le soir en criant qu'il est libre de faire ce qu'il veut chez lui. A-t-il raison ?",
            geo: "თქვენი მეზობელი გვიან ღამით ხმაურობს და ყვირის, რომ თავის სახლში თავისუფალია აკეთოს ის, რაც უნდა. მართალია ის?"
        },
        options: [
            { text: { fr: "Non, la liberté s'arrête là où elle nuit à celle des autres (le repos du voisinage)", geo: "არა, თავისუფლება მთავრდება იქ, სადაც ის სხვისას (მეზობლების დასვენებას) აზიანებს" }, isCorrect: true },
            { text: { fr: "Oui, la propriété privée est absolue en France", geo: "დიახ, საფრანგეთში კერძო საკუთრება აბსოლუტურია" }, isCorrect: false },
            { text: { fr: "Oui, s'il paie ses impôts, il peut faire du bruit", geo: "დიახ, თუ ის გადასახადებს იხდის, შეუძლია ხმაური" }, isCorrect: false },
            { text: { fr: "Seulement s'il s'agit d'une fête religieuse", geo: "მხოლოდ იმ შემთხვევაში, თუ ეს რელიგიური დღესასწაულია" }, isCorrect: false }
        ],
        remark: {
            fr: "« La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui. Le respect du voisinage est une règle de vie commune. »",
            geo: "«თავისუფლება ნიშნავს იმის კეთებას, რაც სხვას არ ვნებს. მეზობლების პატივისცემა ერთობლივი ცხოვრების წესია.»"
        }
    }, 
    {
        id: "OP-PVR-3",
        theme: "PVR",
        question: {
            fr: "Votre enfant veut porter un grand signe religieux à l'école publique. Est-ce possible ?",
            geo: "თქვენს შვილს სურს ატაროს დიდი რელიგიური სიმბოლო საჯარო სკოლაში. შესაძლებელია ეს?"
        },
        options: [
            { text: { fr: "Non, les signes religieux ostensibles sont interdits à l'école publique", geo: "არა, აშკარა რელიგიური სიმბოლოები აკრძალულია საჯარო სკოლაში" }, isCorrect: true },
            { text: { fr: "Oui, la liberté de culte l'autorise", geo: "დიახ, რელიგიის თავისუფლება ამის ნებას იძლევა" }, isCorrect: false },
            { text: { fr: "Seulement si l'élève a de bonnes notes", geo: "მხოლოდ იმ შემთხვევაში, თუ მოსწავლეს კარგი ნიშნები აქვს" }, isCorrect: false },
            { text: { fr: "Oui, mais il doit rester au fond de la classe", geo: "დიახ, მაგრამ ის კლასის ბოლოში უნდა იჯდეს" }, isCorrect: false }
        ],
        remark: { fr: "« La loi de 2004 interdit les signes religieux ostensibles dans les écoles publiques. »", geo: "«2004 წლის კანონი კრძალავს აშკარა რელიგიურ სიმბოლოებს საჯარო სკოლებში.»" }
    },
    {
        id: "OP-PVR-4",
        theme: "PVR",
        question: {
            fr: "Lors d'un débat, un citoyen critique violemment une religion. Est-ce autorisé ?",
            geo: "დებატების დროს მოქალაქე მკაცრად აკრიტიკებს რელიგიას. არის ეს ნებადართული?"
        },
        options: [
            { text: { fr: "Oui, la liberté d'expression autorise la critique des idées et des religions", geo: "დიახ, სიტყვის თავისუფლება იძლევა იდეებისა და რელიგიების კრიტიკის ნებას" }, isCorrect: true },
            { text: { fr: "Non, c'est un blasphème interdit", geo: "არა, ეს აკრძალული მკსულებლობაა" }, isCorrect: false },
            { text: { fr: "Seulement si le maire est présent", geo: "მხოლოდ იმ შემთხვევაში, თუ მერი ესწრება" }, isCorrect: false },
            { text: { fr: "Non, on ne doit jamais critiquer une croyance", geo: "არა, რელიგიური მრწამსი არასოდეს უნდა გააკრიტიკო" }, isCorrect: false }
        ],
        remark: { fr: "« En France, le blasphème n'existe pas. On peut critiquer une religion, mais pas insulter les personnes. »", geo: "«საფრანგეთში მკსულებლობის ცნება არ არსებობს. შეიძლება რელიგიის კრიტიკა, მაგრამ არა ადამიანების შეურაცხყოფა.»" }
    },
    {
        id: "OP-PVR-5",
        theme: "PVR",
        question: {
            fr: "Un employeur peut-il imposer des prières à ses salariés ?",
            geo: "შეუძლია თუ არა დამსაქმებელმა დაავალდებულოს თანამშრომლები ლოცვაზე?"
        },
        options: [
            { text: { fr: "Non, l'employeur doit respecter la liberté de conscience de chacun", geo: "არა, დამსაქმებელმა პატივი უნდა სცეს თითოეულის სინდისის თავისუფლებას" }, isCorrect: true },
            { text: { fr: "Oui, s'il est le propriétaire de l'entreprise", geo: "დიახ, თუ ის კომპანიის მფლობელია" }, isCorrect: false },
            { text: { fr: "Oui, mais uniquement pendant la pause déjeuner", geo: "დიახ, მაგრამ მხოლოდ შესვენების დროს" }, isCorrect: false },
            { text: { fr: "Seulement s'il s'agit d'une petite entreprise", geo: "მხოლოდ მცირე კომპანიებში" }, isCorrect: false }
        ],
        remark: { fr: "« La liberté de religion inclut la liberté de ne pas pratiquer. »", geo: "«რელიგიის თავისუფლება მოიცავს რელიგიური პრაქტიკის არქონის თავისუფლებასაც.»" }
    },
    // (J'ajoute les 10 autres PVR en mode compact pour toi...)
    { 
        id: "OP-PVR-6", 
        theme: "PVR", 
        question: { 
            fr: "Un voisin vous empêche de fêter Noël car il n'est pas chrétien. A-t-il raison ?", 
            geo: "მეზობელი გიშლით შობის აღნიშვნას, რადგან ის არ არის ქრისტიანი. მართალია ის?" 
        }, 
        options: [
            { text: { fr: "Non, chacun est libre de pratiquer son culte chez soi", geo: "არა, ყველას აქვს უფლება აღასრულოს თავისი კულტი სახლში" }, isCorrect: true }, 
            { text: { fr: "Oui, pour ne pas choquer les autres", geo: "დიახ, რათა სხვები არ შეწუხდნენ" }, isCorrect: false }, 
            { text: { fr: "Oui, la laïcité interdit les fêtes", geo: "დიახ, სეკულარიზმი კრძალავს დღესასწაულებს" }, isCorrect: false }, 
            { text: { fr: "Seulement si le bruit est trop fort", geo: "მხოლოდ თუ ხმაური ძალიან დიდია" }, isCorrect: false }
        ], 
        remark: { fr: "« La laïcité garantit la liberté de culte. »", geo: "«სეკულარიზმი უზრუნველყოფს რელიგიურ თავისუფლებას.»" } 
    },
    { 
        id: "OP-PVR-7", 
        theme: "PVR", 
        question: { 
            fr: "Peut-on refuser de travailler avec une femme ?", 
            geo: "შეიძლება თუ არა უარი ვთქვათ ქალთან მუშაობაზე?" 
        }, 
        options: [
            { text: { fr: "Non, c'est une discrimination punie par la loi", geo: "არა, ეს არის დისკრიმინაცია, რომელიც ისჯება კანონით" }, isCorrect: true }, 
            { text: { fr: "Oui, si notre religion l'interdit", geo: "დიახ, თუ ჩვენი რელიგია ამას კრძალავს" }, isCorrect: false }, 
            { text: { fr: "Seulement dans les métiers manuels", geo: "მხოლოდ ფიზიკურ სამუშაოებზე" }, isCorrect: false }, 
            { text: { fr: "Oui, si on préfère rester entre hommes", geo: "დიახ, თუ მხოლოდ მამაკაცებთან ყოფნა გვირჩევნია" }, isCorrect: false }
        ], 
        remark: { fr: "« L'égalité professionnelle est obligatoire. »", geo: "«პროფესიული თანასწორობა სავალდებულოა.»" } 
    },
    { 
        id: "OP-PVR-8", 
        theme: "PVR", 
        question: { 
            fr: "Une association refuse d'aider une personne car elle est athée (ne croit pas en Dieu).", 
            geo: "ასოციაცია უარს ეუბნება ადამიანს დახმარებაზე, რადგან ის ათეისტია." 
        },
        options: [
            { text: { fr: "C'est interdit, la fraternité s'applique à tous", geo: "ეს აკრძალულია, ძმობა ვრცელდება ყველაზე" }, isCorrect: true }, 
            { text: { fr: "C'est autorisé pour les associations privées", geo: "ეს ნებადართულია კერძო ასოციაციებისთვის" }, isCorrect: false }, 
            { text: { fr: "C'est obligatoire si l'association est religieuse", geo: "ეს სავალდებულოა, თუ ასოციაცია რელიგიურია" }, isCorrect: false }, 
            { text: { fr: "L'athéisme est interdit en France", geo: "ათეიზმი აკრძალულია საფრანგეთში" }, isCorrect: false }
        ], 
        remark: { fr: "« La solidarité nationale ne fait aucune distinction de religion. »", geo: "«ეროვნული სოლიდარობა არ განასხვავებს რელიგიებს.»" } 
    },
    { 
        id: "OP-PVR-9", 
        theme: "PVR", 
        question: { 
            fr: "Un élève refuse d'aller à la piscine car le cours est mixte. Que fait l'école ?", 
            geo: "მოსწავლე უარს ამბობს აუზზე წასვლაზე, რადგან გაკვეთილი შერეულია (გოგოები და ბიჭები). რას აკეთებს სკოლა?" 
        }, 
        options: [
            { text: { fr: "Elle impose le cours, la mixité est une règle de l'école républicaine", geo: "სკოლა ავალდებულებს დასწრებას, შერეული სწავლება რესპუბლიკური სკოლის წესია" }, isCorrect: true }, 
            { text: { fr: "Elle crée des horaires séparés", geo: "სკოლა ქმნის ცალკე განრიგს" }, isCorrect: false }, 
            { text: { fr: "L'élève est dispensé s'il a un mot de son chef religieux", geo: "მოსწავლე თავისუფლდება, თუ აქვს წერილი რელიგიური ლიდერისგან" }, isCorrect: false }, 
            { text: { fr: "L'école ferme la piscine", geo: "სკოლა კეტავს აუზს" }, isCorrect: false }
        ], 
        remark: { fr: "« Les programmes scolaires s'imposent à tous les élèves. »", geo: "«სასწავლო პროგრამები სავალდებულოა ყველა მოსწავლისთვის.»" } 
    },
    { 
        id: "OP-PVR-10", 
        theme: "PVR", 
        question: { 
            fr: "Lors d'un mariage civil, le mari refuse d'écouter l'adjointe au maire car c'est une femme.", 
            geo: "სამოქალაქო ქორწინებისას, ქმარი უარს ამბობს მოუსმინოს მერის მოადგილეს, რადგან ის ქალია." 
        }, 
        options: [
            { text: { fr: "Le mariage peut être annulé ou reporté pour non-respect des institutions", geo: "ქორწინება შეიძლება გაუქმდეს ან გადაიდოს ინსტიტუციების უპატივცემულობის გამო" }, isCorrect: true }, 
            { text: { fr: "C'est son droit, c'est un jour spécial", geo: "ეს მისი უფლებაა, განსაკუთრებული დღეა" }, isCorrect: false }, 
            { text: { fr: "On doit trouver un homme pour finir la cérémonie", geo: "ცერემონიის დასასრულებლად მამაკაცი უნდა ვიპოვოთ" }, isCorrect: false }, 
            { text: { fr: "La mariée doit décider", geo: "პატარძალმა უნდა გადაწყვიტოს" }, isCorrect: false }
        ], 
        remark: { fr: "« On doit le respect aux représentants de l'autorité publique. »", geo: "«საჯარო ხელისუფლების წარმომადგენლების მიმართ პატივისცემა სავალდებულოა.»" } 
    },
    { 
        id: "OP-PVR-11", 
        theme: "PVR", 
        question: { 
            fr: "Peut-on se promener dans la rue avec un visage totalement caché (niqab, cagoule) ?", 
            geo: "შეიძლება თუ არა ქუჩაში სიარული სრულად დაფარული სახით (ნიქაბი, ნიღაბი)?" 
        }, 
        options: [
            { text: { fr: "Non, c'est interdit pour des raisons de sécurité et de vie sociale", geo: "არა, ეს აკრძალულია უსაფრთხოების და სოციალური ცხოვრების წესების გამო" }, isCorrect: true }, 
            { text: { fr: "Oui, si c'est pour la religion", geo: "დიახ, თუ ეს რელიგიისთვისაა" }, isCorrect: false }, 
            { text: { fr: "Seulement s'il fait très froid", geo: "მხოლოდ თუ ძალიან ცივა" }, isCorrect: false }, 
            { text: { fr: "Oui, partout sauf à la banque", geo: "დიახ, ყველგან ბანკის გარდა" }, isCorrect: false }
        ], 
        remark: { fr: "« La loi de 2010 interdit la dissimulation du visage dans l'espace public. »", geo: "«2010 წლის კანონი კრძალავს სახის დაფარვას საჯარო სივრცეში.»" } 
    },
    { 
        id: "OP-PVR-12", 
        theme: "PVR", 
        question: { 
            fr: "Un père refuse que sa fille soit examinée par un médecin homme aux urgences.", 
            geo: "მამა უარს ამბობს, რომ მის შვილს სასწრაფო დახმარებაში მამაკაცმა ექიმმა გასინჯოს." 
        }, 
        options: [
            { text: { fr: "Aux urgences, on ne peut pas choisir, la santé passe avant", geo: "სასწრაფო დახმარებაში არჩევანი არ არსებობს, ჯანმრთელობა უპირატესია" }, isCorrect: true }, 
            { text: { fr: "L'hôpital doit attendre qu'une femme soit libre", geo: "საავადმყოფო უნდა დაელოდოს, სანამ ქალი ექიმი გათავისუფლდება" }, isCorrect: false }, 
            { text: { fr: "L'enfant rentre chez elle sans soins", geo: "ბავშვი სახლში მკურნალობის გარეშე ბრუნდება" }, isCorrect: false }, 
            { text: { fr: "Le père a toujours raison", geo: "მამა ყოველთვის მართალია" }, isCorrect: false }
        ], 
        remark: { fr: "« Le bon fonctionnement du service public prévaut. »", geo: "«საჯარო სამსახურის გამართული მუშაობა უპირატესია.»" } 
    },
    { 
        id: "OP-PVR-13", 
        theme: "PVR", 
        question: { 
            fr: "Une entreprise peut-elle licencier quelqu'un car il est devenu très religieux ?", 
            geo: "შეუძლია თუ არა კომპანიას გაათავისუფლოს ვინმე იმის გამო, რომ ის ძალიან რელიგიური გახდა?" 
        }, 
        options: [
            { text: { fr: "Non, c'est une discrimination interdite", geo: "არა, ეს აკრძალული დისკრიმინაციაა" }, isCorrect: true }, 
            { text: { fr: "Oui, car cela fait peur aux clients", geo: "დიახ, რადგან ეს კლიენტებს აშინებს" }, isCorrect: false }, 
            { text: { fr: "Oui, si le patron n'aime pas cette religion", geo: "დიახ, თუ უფროსს ეს რელიგია არ მოსწონს" }, isCorrect: false }, 
            { text: { fr: "Seulement s'il prie pendant ses heures de travail sans autorisation", geo: "მხოლოდ იმ შემთხვევაში, თუ ის სამუშაო საათებში უნებართვოდ ლოცულობს" }, isCorrect: true }
        ], 
        remark: { fr: "« On ne licencie pas pour des croyances, mais on peut sanctionner un comportement qui gêne le travail. »", geo: "«ადამიანს მრწამსის გამო არ ათავისუფლებენ, მაგრამ შეიძლება დაისაჯოს ქცევა, რომელიც ხელს უშლის მუშაობას.»" } 
    },
    { 
        id: "OP-PVR-14", 
        theme: "PVR", 
        question: { 
            fr: "Un candidat à la location est refusé car son nom sonne trop étranger. Est-ce légal ?", 
            geo: "ბინის ქირაობაზე უარი უთხრეს კანდიდატს, რადგან მისი სახელი ძალიან უცხოურად ჟღერს. არის ეს ლეგალური?" 
        }, 
        options: [
            { text: { fr: "Non, c'est une discrimination raciale interdite", geo: "არა, ეს აკრძალული რასობრივი დისკრიმინაციაა" }, isCorrect: true }, 
            { text: { fr: "Oui, le propriétaire est chez lui, il choisit", geo: "დიახ, მესაკუთრე თავის სახლშია და ის ირჩევს" }, isCorrect: false }, 
            { text: { fr: "Oui, s'il a déjà eu des problèmes avant", geo: "დიახ, თუ მას ადრე პრობლემები ჰქონდა" }, isCorrect: false }, 
            { text: { fr: "Seulement si l'appartement est petit", geo: "მხოლოდ თუ ბინა პატარაა" }, isCorrect: false }
        ], 
        remark: { fr: "« La discrimination au logement est un délit. »", geo: "«დისკრიმინაცია საცხოვრებლის საკითხში დანაშაულია.»" } 
    },
    { 
        id: "OP-PVR-15", 
        theme: "PVR", 
        question: { 
            fr: "Peut-on brûler un drapeau français pour protester ?", 
            geo: "შეიძლება თუ არა საფრანგეთის დროშის დაწვა პროტესტის ნიშნად?" 
        }, 
        options: [
            { text: { fr: "Non, l'outrage aux symboles nationaux est puni par la loi", geo: "არა, ეროვნული სიმბოლოების შეურაცხყოფა ისჯება კანონით" }, isCorrect: true }, 
            { text: { fr: "Oui, c'est la liberté d'expression", geo: "დიახ, ეს სიტყვის თავისუფლებაა" }, isCorrect: false }, 
            { text: { fr: "Seulement si on est en colère", geo: "მხოლოდ იმ შემთხვევაში, თუ გაბრაზებული ვართ" }, isCorrect: false }, 
            { text: { fr: "Oui, mais pas dans la rue", geo: "დიახ, მაგრამ არა ქუჩაში" }, isCorrect: false }
        ], 
        remark: { fr: "« Le drapeau est un symbole protégé. »", geo: "«დროშა დაცული სიმბოლოა.»" } 
    },
     {
        id: "OP-PVR-16",
        theme: "PVR",
        question: {
            fr: "Un agent de mairie porte une croix ou un voile visible pendant son travail. Que dit la loi ?",
            geo: "მერიის თანამშრომელს მუშაობისას უკეთია ჯვარი ან აცვია თავსაბურავი. რას ამბობს კანონი?"
        },
        options: [
            { text: { fr: "C'est interdit, l'agent public doit respecter une stricte neutralité", geo: "ეს აკრძალულია, საჯარო მოხელემ უნდა დაიცვას მკაცრი ნეიტრალიტეტი" }, isCorrect: true },
            { text: { fr: "C'est autorisé si c'est discret", geo: "ეს ნებადართულია, თუ ის შეუმჩნეველია" }, isCorrect: false },
            { text: { fr: "C'est autorisé uniquement le vendredi", geo: "ეს ნებადართულია მხოლოდ პარასკევს" }, isCorrect: false },
            { text: { fr: "L'agent peut faire ce qu'il veut", geo: "თანამშრომელს შეუძლია აკეთოს ის, რაც უნდა" }, isCorrect: false }
        ],
        remark: {
            fr: "« La laïcité impose la neutralité aux agents des services publics. »",
            geo: "«სეკულარიზმი ავალდებულებს ნეიტრალიტეტს საჯარო სამსახურის თანამშრომლებს.»"
        }
    },
    {
        id: "OP-PVR-17",
        theme: "PVR",
        question: {
            fr: "Un homme refuse d'être contrôlé par une femme policier. Que se passe-t-il ?",
            geo: "მამაკაცი უარს ამბობს ქალი პოლიციელის მიერ შემოწმებაზე. რა ხდება ამ დროს?"
        },
        options: [
            { text: { fr: "Il commet une infraction, on ne peut pas récuser un agent pour son sexe", geo: "ის სჩადის სამართალდარღვევას, აგენტზე უარის თქმა სქესის გამო არ შეიძლება" }, isCorrect: true },
            { text: { fr: "La police doit appeler un collègue homme", geo: "პოლიციამ უნდა დაუძახოს მამაკაც კოლეგას" }, isCorrect: false },
            { text: { fr: "L'homme a le droit de choisir selon sa religion", geo: "მამაკაცს აქვს არჩევანის უფლება თავისი რელიგიის მიხედვით" }, isCorrect: false },
            { text: { fr: "Le contrôle est annulé", geo: "შემოწმება უქმდება" }, isCorrect: false }
        ],
        remark: {
            fr: "« L'égalité femme-homme est absolue dans le service public. »",
            geo: "«ქალისა და მამაკაცის თანასწორობა აბსოლუტურია საჯარო სამსახურში.»"
        }
    },
        {
        id: "OP-PVR-17",
        type: "mise-en-situation",
        question: {
            fr: "Lors d'une fête de quartier, un voisin refuse de serrer la main d'une femme par motif religieux. Que dit la valeur d'Égalité ?",
            geo: "უბნის დღესასწაულზე მეზობელი უარს ამბობს ქალისთვის ხელის ჩამორთმევაზე რელიგიური მოტივით. რას ამბობს თანასწორობის ღირებულება?"
        },
        options: [
            { text: { fr: "C'est contraire aux valeurs de la République : les femmes et les hommes sont égaux", geo: "ეს ეწინააღმდეგება რესპუბლიკის ღირებულებებს: ქალი და მამაკაცი თანასწორია" }, isCorrect: true },
            { text: { fr: "C'est son droit, la religion passe avant les règles sociales", geo: "ეს მისი უფლებაა, რელიგია სოციალურ წესებზე მაღლა დგას" }, isCorrect: false },
            { text: { fr: "Cela n'est pas grave tant qu'il ne l'insulte pas", geo: "ეს არ არის სერიოზული, თუ ის მას არ შეურაცხყოფს" }, isCorrect: false },
            { text: { fr: "La loi ne s'applique pas dans les fêtes privées", geo: "კერძო წვეულებებზე კანონი არ ვრცელდება" }, isCorrect: false }
        ],
        remark: {
            fr: "« L'égalité entre les femmes et les hommes est un principe fondamental. Nul ne peut traiter différemment une personne en raison de son sexe. »",
            geo: "«ქალთა და მამაკაცთა თანასწორობა ფუნდამენტური პრინციპია. არავის შეუძლია ადამიანს სქესის გამო განსხვავებულად მოეპყროს.»"
        }
    },
    
    // ==========================================
    // THEME : DROITS ET DEVOIRS (DD)
    // ==========================================
    {
        id: "OP-DD-1",
        theme: "DD",
        question: {
            fr: "Vous voyez une personne âgée se faire voler son sac. Que faites-vous ?",
            geo: "ხედავთ, რომ მოხუცს ჩანთას ჰპარავენ. რას აკეთებთ?"
        },
        options: [
            { text: { fr: "J'appelle immédiatement le 17 (police) ou le 112", geo: "დაუყოვნებლივ ვრეკავ 17-ზე (პოლიცია) ან 112-ზე" }, isCorrect: true },
            { text: { fr: "Je filme la scène pour mes réseaux sociaux", geo: "ვიღებ ვიდეოს სოციალური ქსელებისთვის" }, isCorrect: false },
            { text: { fr: "Je m'en vais pour ne pas être témoin au tribunal", geo: "მივდივარ, რომ სასამართლოში მოწმე არ ვიყო" }, isCorrect: false },
            { text: { fr: "J'attends que le voleur soit loin pour aider la personne", geo: "ველოდები ქურდის წასვლას, რომ მერე დავეხმარო" }, isCorrect: false }
        ],
        remark: { fr: "« Porter secours ou alerter est un devoir civique (assistance à personne en danger). »", geo: "«დახმარება ან შეტყობინება სამოქალაქო მოვალეობაა.»" }
    },
    {
        id: "OP-DD-2",
        theme: "DD",
        question: {
            fr: "Votre enfant est victime de harcèlement sur internet. Quelle est la bonne réaction ?",
            geo: "თქვენი შვილი ინტერნეტ-ბულინგის მსხვერპლია. როგორია სწორი რეაქცია?"
        },
        options: [
            { text: { fr: "Je signale les contenus et je demande l'aide de l'école ou de la police", geo: "ვაცხადებ საეჭვო კონტენტზე და დახმარებას ვთხოვ სკოლას ან პოლიციას" }, isCorrect: true },
            { text: { fr: "Je lui dis de répondre par des insultes encore plus fortes", geo: "ვეუბნები, რომ კიდევ უფრო ძლიერი შეურაცხყოფით უპასუხოს" }, isCorrect: false },
            { text: { fr: "Je ne fais rien, c'est juste internet", geo: "არაფერს ვაკეთებ, ეს ხომ უბრალოდ ინტერნეტია" }, isCorrect: false },
            { text: { fr: "Je jette son téléphone pour régler le problème", geo: "ვუგდებ ტელეფონს პრობლემის მოსაგვარებლად" }, isCorrect: false }
        ],
        remark: { fr: "« Le cyber-harcèlement est un délit puni par la loi. »", geo: "«კიბერ-ბულინგი კანონით დასჯადი დანაშაულია.»" }
    },
    {
        id: "OP-DD-3",
        theme: "DD",
        question: {
            fr: "Vous avez des vieux meubles et de l'électroménager cassé. Où les mettre ?",
            geo: "გაქვთ ძველი ავეჯი და გაფუჭებული ტექნიკა. სად უნდა წაიღოთ?"
        },
        options: [
            { text: { fr: "Je les apporte à la déchetterie ou je contacte les encombrants", geo: "მიმაქვს ნაგავსაყრელზე (déchetterie) ან ვუკავშირდები მსხვილგაბარიტიანი ნარჩენების სამსახურს" }, isCorrect: true },
            { text: { fr: "Je les dépose sur le trottoir un soir sans prévenir", geo: "ვტოვებ ტროტუარზე საღამოს გაფრთხილების გარეშე" }, isCorrect: false },
            { text: { fr: "Je les jette dans la rivière la plus proche", geo: "ვაგდებ უახლოეს მდინარეში" }, isCorrect: false },
            { text: { fr: "Je les cache derrière un buisson dans un parc", geo: "ვმალავ ბუჩქებში პარკში" }, isCorrect: false }
        ],
        remark: { fr: "« Le dépôt sauvage d'encombrants est interdit et passible d'une forte amende. »", geo: "«ნარჩენების თვითნებური დატოვება აკრძალულია და ისჯება დიდი ჯარიმით.»" }
    },
    {
        id: "OP-DD-4",
        theme: "DD",
        question: {
            fr: "La police vous demande de vous arrêter pour un contrôle d'identité. Que faites-vous ?",
            geo: "პოლიცია გთხოვთ გაჩერებას პირადობის შესამოწმებლად. რას აკეთებთ?"
        },
        options: [
            { text: { fr: "J'obtempère calmement et je présente mes papiers", geo: "ვემორჩილები მშვიდად და წარვადგენ საბუთებს" }, isCorrect: true },
            { text: { fr: "Je refuse car je n'ai rien fait de mal", geo: "უარს ვამბობ, რადგან ცუდი არაფერი გამიკეთებია" }, isCorrect: false },
            { text: { fr: "Je m'enfuis car je suis pressé", geo: "გავრბივარ, რადგან მეჩქარება" }, isCorrect: false },
            { text: { fr: "Je crie pour attirer l'attention des passants", geo: "ვყვირი გამვლელების ყურადღების მისაქცევად" }, isCorrect: false }
        ],
        remark: { fr: "« Le refus d'obtempérer est un délit grave. »", geo: "«დაუმორჩილებლობა მძიმე დანაშაულია.»" }
    },
    {
        id: "OP-DD-5",
        theme: "DD",
        question: {
            fr: "Vous recevez une amende mais vous pensez que c'est une erreur. Que faites-vous ?",
            geo: "მიიღეთ ჯარიმა, მაგრამ ფიქრობთ, რომ ეს შეცდომაა. რას აკეთებთ?"
        },
        options: [
            { text: { fr: "Je conteste l'amende officiellement en suivant la procédure", geo: "ოფიციალურად ვაპროტესტებ ჯარიმას პროცედურის დაცვით" }, isCorrect: true },
            { text: { fr: "Je déchire l'amende et je ne paie rien", geo: "ვხევ ჯარიმას და არაფერს ვიხდი" }, isCorrect: false },
            { text: { fr: "J'appelle le maire pour qu'il l'annule", geo: "ვურეკავ მერს, რომ მან გააუქმოს" }, isCorrect: false },
            { text: { fr: "Je vais crier au commissariat", geo: "მივდივარ პოლიციაში საყვირალად" }, isCorrect: false }
        ],
        remark: { fr: "« En France, on peut contester une décision légalement, mais on ne doit pas ignorer la loi. »", geo: "«საფრანგეთში შეიძლება გადაწყვეტილების კანონიერად გასაჩივრება, მაგრამ კანონის იგნორირება არ შეიძლება.»" }
    },
    {
        id: "OP-DD-6",
        theme: "DD",
        question: {
            fr: "Un témoin de violences conjugales chez ses voisins doit :",
            geo: "მეზობლებთან ოჯახური ძალადობის მოწმემ უნდა:"
        },
        options: [
            { text: { fr: "Appeler la police ou la gendarmerie (le 17)", geo: "დაურეკოს პოლიციას ან ჟანდარმერიას (17)" }, isCorrect: true },
            { text: { fr: "Se dire que c'est une affaire privée et ne pas s'en mêler", geo: "თქვას, რომ ეს პირადი საქმეა და არ ჩაერიოს" }, isCorrect: false },
            { text: { fr: "Aller frapper son voisin pour le punir", geo: "მივიდეს და სცემოს მეზობელს მის დასასჯელად" }, isCorrect: false },
            { text: { fr: "En parler à tout le quartier avant d'agir", geo: "მოუყვეს მთელ უბანს მოქმედებამდე" }, isCorrect: false }
        ],
        remark: { fr: "« La protection des victimes est un devoir de l'État et un acte de civisme des citoyens. »", geo: "«მსხვერპლთა დაცვა სახელმწიფოს მოვალეობა და მოქალაქეთა სამოქალაქო პასუხისმგებლობაა.»" }
    },
    {
        id: "OP-DD-7",
        theme: "DD",
        question: {
            fr: "Vous trouvez un portefeuille par terre dans la rue. Quelle est l'attitude correcte ?",
            geo: "ქუჩაში იპოვეთ საფულე. როგორია სწორი ქცევა?"
        },
        options: [
            { text: { fr: "Je le rapporte au commissariat ou à la mairie (objets trouvés)", geo: "მიმაქვს პოლიციაში ან მერიაში (ნაპოვნი ნივთები)" }, isCorrect: true },
            { text: { fr: "Je garde l'argent et je jette le reste", geo: "ვიტოვებ ფულს და დანარჩენს ვაგდებ" }, isCorrect: false },
            { text: { fr: "Je le laisse par terre pour que quelqu'un d'autre s'en occupe", geo: "ვტოვებ მიწაზე, რომ სხვამ მიხედოს" }, isCorrect: false },
            { text: { fr: "Je le garde en attendant que le propriétaire m'appelle", geo: "ვიტოვებ და ველოდები პატრონის დარეკვას" }, isCorrect: false }
        ],
        remark: { fr: "« S'approprier un objet trouvé sans chercher à le rendre peut être considéré comme un vol. »", geo: "«ნაპოვნი ნივთის მითვისება შეიძლება ჩაითვალოს ქურდობად.»" }
    },
    {
        id: "OP-DD-8",
        theme: "DD",
        question: {
            fr: "On vous demande de signer une pétition pour changer une loi. Est-ce légal ?",
            geo: "გთხოვენ ხელი მოაწეროთ პეტიციას კანონის შესაცვლელად. არის ეს ლეგალური?"
        },
        options: [
            { text: { fr: "Oui, c'est l'exercice du droit d'expression et de participation démocratique", geo: "დიახ, ეს არის აზრის გამოხატვისა და დემოკრატიული მონაწილეობის უფლება" }, isCorrect: true },
            { text: { fr: "Non, seul le président peut proposer des changements", geo: "არა, ცვლილებების შეთავაზება მხოლოდ პრეზიდენტს შეუძლია" }, isCorrect: false },
            { text: { fr: "Seulement si on a la nationalité française", geo: "მხოლოდ იმ შემთხვევაში, თუ გაქვთ საფრანგეთის მოქალაქეობა" }, isCorrect: false },
            { text: { fr: "Non, c'est considéré comme une rébellion", geo: "არა, ეს ითვლება ამბოხებად" }, isCorrect: false }
        ],
        remark: { fr: "« Le droit de pétition est un droit citoyen en démocratie. »", geo: "«პეტიციის უფლება დემოკრატიაში მოქალაქის უფლებაა.»" }
    },
    {
        id: "OP-DD-9",
        theme: "DD",
        question: {
            fr: "Un ami vous propose d'acheter un téléphone très cher pour seulement 50€ sans boîte ni facture. Quel est le risque ?",
            geo: "მეგობარი გთავაზობთ ძალიან ძვირიანი ტელეფონის ყიდვას მხოლოდ 50 ევროდ, ყუთისა და ჩეკის გარეშე. რა არის რისკი?"
        },
        options: [
            { text: { fr: "D'être accusé de recel (acheter un objet volé), ce qui est un délit", geo: "დაგაბრალონ მოპარული ნივთის შეძენა (recel), რაც დანაშაულია" }, isCorrect: true },
            { text: { fr: "Aucun, c'est une bonne affaire", geo: "არანაირი, ეს კარგი გარიგებაა" }, isCorrect: false },
            { text: { fr: "De ne pas avoir de garantie constructeur uniquement", geo: "მხოლოდ გარანტიის არქონა" }, isCorrect: false },
            { text: { fr: "Que le téléphone ne marche pas", geo: "რომ ტელეფონმა არ იმუშაოს" }, isCorrect: false }
        ],
        remark: { fr: "« Le recel est puni par la loi au même titre que le vol. »", geo: "«მოპარული ნივთის შეძენა ისჯება ისევე, როგორც ქურდობა.»" }
    },
    {
        id: "OP-DD-10",
        theme: "DD",
        question: {
            fr: "Est-il permis de faire un barbecue sur son balcon en appartement ?",
            geo: "ნებადართულია თუ არა ბარბექიუს (მწვადების) გაკეთება ბინის აივანზე?"
        },
        options: [
            { text: { fr: "Cela dépend du règlement de copropriété, mais c'est souvent interdit pour la sécurité et la gêne du voisinage", geo: "ეს დამოკიდებულია კორპუსის შინაგანაწესზე, მაგრამ ხშირად აკრძალულია უსაფრთხოების და მეზობლების შეწუხების გამო" }, isCorrect: true },
            { text: { fr: "Oui, je suis chez moi, je fais ce que je veux", geo: "დიახ, ჩემს სახლში ვარ და რასაც მინდა იმას ვაკეთებ" }, isCorrect: false },
            { text: { fr: "Oui, si j'invite mes voisins", geo: "დიახ, თუ მეზობლებს დავპატიჟებ" }, isCorrect: false },
            { text: { fr: "Seulement le dimanche", geo: "მხოლოდ კვირა დღეს" }, isCorrect: false }
        ],
        remark: { fr: "« La liberté individuelle est limitée par le respect de la sécurité et de la tranquillité d'autrui. »", geo: "«ინდივიდუალური თავისუფლება შეზღუდულია სხვების უსაფრთხოებისა და სიმშვიდის პატივისცემით.»" }
    },
    {
        id: "OP-DD-11",
        theme: "DD",
        question: {
            fr: "Vous voulez manifester dans la rue pour exprimer votre mécontentement. Que devez-vous faire ?",
            geo: "გსურთ ქუჩაში მანიფესტაციის მოწყობა უკმაყოფილების გამოსახატად. რა უნდა გააკეთოთ?"
        },
        options: [
            { text: { fr: "Déclarer la manifestation à la mairie ou à la préfecture à l'avance", geo: "წინასწარ განაცხადოთ მანიფესტაციის შესახებ მერიაში ან პრეფექტურაში" }, isCorrect: true },
            { text: { fr: "Bloquer les routes sans prévenir pour être écouté", geo: "გადაკეტოთ გზები გაფრთხილების გარეშე ყურადღების მისაქცევად" }, isCorrect: false },
            { text: { fr: "Sortir avec des armes pour se protéger", geo: "გახვიდეთ იარაღით თავდაცვისთვის" }, isCorrect: false },
            { text: { fr: "Rien, on peut manifester n'importe où et n'importe quand", geo: "არაფერი, მანიფესტაცია ყველგან და ყოველთვის შეიძლება" }, isCorrect: false }
        ],
        remark: { fr: "« Le droit de manifester est garanti, mais il doit être déclaré pour assurer la sécurité publique. »", geo: "«მანიფესტაციის უფლება გარანტირებულია, მაგრამ ის უნდა იყოს დეკლარირებული საზოგადოებრივი უსაფრთხოებისთვის.»" }
    },
    {
        id: "OP-DD-12",
        theme: "DD",
        question: {
            fr: "Peut-on utiliser l'eau potable pour laver sa voiture en période de sécheresse ?",
            geo: "შეიძლება თუ არა სასმელი წყლის გამოყენება მანქანის გასარეცხად გვალვის პერიოდში?"
        },
        options: [
            { text: { fr: "Non, il faut respecter les restrictions préfectorales pour préserver l'eau", geo: "არა, აუცილებელია პრეფექტურის შეზღუდვების დაცვა წყლის დასაზოგად" }, isCorrect: true },
            { text: { fr: "Oui, si on paie sa facture d'eau", geo: "დიახ, თუ წყლის გადასახადს ვიხდით" }, isCorrect: false },
            { text: { fr: "Oui, mais uniquement la nuit", geo: "დიახ, მაგრამ მხოლოდ ღამით" }, isCorrect: false },
            { text: { fr: "Seulement si la voiture est très sale", geo: "მხოლოდ თუ მანქანა ძალიან ჭუჭყიანია" }, isCorrect: false }
        ],
        remark: { fr: "« La préservation de l'environnement est un devoir constitutionnel. »", geo: "«გარემოს დაცვა კონსტიტუციური მოვალეობაა.»" }
    },
    {
        id: "OP-DD-13",
        theme: "DD",
        question: {
            fr: "Votre employeur vous demande de commettre un acte illégal. Que faites-vous ?",
            geo: "დამსაქმებელი გთხოვთ უკანონო ქმედების ჩადენას. რას აკეთებთ?"
        },
        options: [
            { text: { fr: "Je refuse, car nul n'est tenu d'obéir à un ordre illégal", geo: "უარს ვამბობ, რადგან არავინ არის ვალდებული დაემორჩილოს უკანონო ბრძანებას" }, isCorrect: true },
            { text: { fr: "J'obéis car c'est mon patron et il est responsable", geo: "ვემორჩილები, რადგან ის ჩემი უფროსია და პასუხისმგებელიც ისაა" }, isCorrect: false },
            { text: { fr: "J'obéis mais je demande une augmentation", geo: "ვემორჩილები, მაგრამ ხელფასის მომატებას ვითხოვ" }, isCorrect: false },
            { text: { fr: "Je démissionne sans rien dire à personne", geo: "მივდივარ სამსახურიდან ისე, რომ არავის არაფერს ვეუბნები" }, isCorrect: false }
        ],
        remark: { fr: "« La responsabilité pénale est individuelle. On ne peut pas justifier un délit par l'ordre d'un supérieur. »", geo: "«სისხლისსამართლებრივი პასუხისმგებლობა ინდივიდუალურია. დანაშაული ვერ გამართლდება უფროსის ბრძანებით.»" }
    },
    {
        id: "OP-DD-14",
        theme: "DD",
        question: {
            fr: "En forêt, est-il permis d'allumer un feu pour faire un pique-nique ?",
            geo: "ნებადართულია თუ არა ტყეში ცეცხლის დანთება პიკნიკისთვის?"
        },
        options: [
            { text: { fr: "Non, c'est interdit car cela présente un risque d'incendie majeur", geo: "არა, ეს აკრძალულია, რადგან არსებობს ხანძრის დიდი რისკი" }, isCorrect: true },
            { text: { fr: "Oui, si on éteint bien le feu après", geo: "დიახ, თუ შემდეგ ცეცხლს კარგად ჩავაქრობთ" }, isCorrect: false },
            { text: { fr: "Seulement s'il n'y a pas de vent", geo: "მხოლოდ თუ ქარი არ არის" }, isCorrect: false },
            { text: { fr: "Oui, mais il faut rester à côté", geo: "დიახ, მაგრამ გვერდით უნდა ვიყოთ" }, isCorrect: false }
        ],
        remark: { fr: "« La protection des espaces naturels est une priorité en France. »", geo: "«ბუნებრივი სივრცეების დაცვა პრიორიტეტია საფრანგეთში.»" }
    },
    {
        id: "OP-DD-15",
        theme: "DD",
        question: {
            fr: "Vous trouvez une erreur en votre faveur sur votre déclaration d'impôts. Que faites-vous ?",
            geo: "საგადასახადო დეკლარაციაში იპოვეთ თქვენს სასარგებლოდ დაშვებული შეცდომა. რას აკეთებთ?"
        },
        options: [
            { text: { fr: "Je signale l'erreur pour corriger ma situation (droit à l'erreur)", geo: "ვაცხადებ შეცდომის შესახებ მდგომარეობის გამოსასწორებლად (შეცდომის უფლება)" }, isCorrect: true },
            { text: { fr: "Je ne dis rien pour payer moins", geo: "არაფერს ვამბობ, რომ ნაკლები გადავიხადო" }, isCorrect: false },
            { text: { fr: "J'en profite pour demander un remboursement", geo: "ვიყენებ ამ შემთხვევას თანხის უკან დასაბრუნებლად" }, isCorrect: false },
            { text: { fr: "Je supprime ma déclaration", geo: "ვშლი ჩემს დეკლარაციას" }, isCorrect: false }
        ],
        remark: { fr: "« L'honnêteté vis-à-vis des charges publiques est une base du contrat social. »", geo: "«საჯარო ხარჯების მიმართ პატიოსნება სოციალური კონტრაქტის საფუძველია.»" }
    },
        {
        id: "OP-DD-16",
        type: "mise-en-situation",
        question: {
            fr: "Vous êtes témoin d'une agression dans la rue. Que devez-vous faire selon la loi française ?",
            geo: "თქვენ ხართ ქუჩაში თავდასხმის მოწმე. რა უნდა გააკეთოთ საფრანგეთის კანონმდებლობით?"
        },
        options: [
            { text: { fr: "Appeler les secours ou la police (assistance à personne en danger)", geo: "გამოიძახოთ მაშველები ან პოლიცია (საფრთხეში მყოფი პირის დახმარება)" }, isCorrect: true },
            { text: { fr: "Partir pour ne pas avoir de problèmes avec la justice", geo: "წახვიდეთ, რომ მართლმსაჯულებასთან პრობლემები არ შეგექმნათ" }, isCorrect: false },
            { text: { fr: "Filmer la scène pour la mettre sur internet sans appeler la police", geo: "გადაიღოთ ვიდეო ინტერნეტისთვის პოლიციის გამოძახების გარეშე" }, isCorrect: false },
            { text: { fr: "Attendre que l'agression se termine pour intervenir seul", geo: "დაელოდოთ თავდასხმის დასრულებას, რომ მარტო ჩაერიოთ" }, isCorrect: false }
        ],
        remark: {
            fr: "« La non-assistance à personne en danger est un délit puni par le Code pénal. »",
            geo: "«საფრთხეში მყოფი პირის დაუხმარებლობა სისხლის სამართლის კოდექსით დასჯადი დანაშაულია.»"
        }
    },
    {
        id: "OP-DD-17",
        type: "mise-en-situation",
        question: {
            fr: "Un employeur vous propose de vous payer une partie de votre salaire en espèces sans fiche de paie. Est-ce légal ?",
            geo: "დამსაქმებელი გთავაზობთ ხელფასის ნაწილის ნაღდი ფულით გადახდას ჩეკის გარეშე. არის ეს ლეგალური?"
        },
        options: [
            { text: { fr: "Non, c'est du travail dissimulé (travail au noir), c'est interdit", geo: "არა, ეს არის დაფარული შრომა (შავი სამუშაო), რაც აკრძალულია" }, isCorrect: true },
            { text: { fr: "Oui, si l'employé et le patron sont d'accord", geo: "დიახ, თუ დასაქმებული და უფროსი თანახმა არიან" }, isCorrect: false },
            { text: { fr: "Oui, pour les trois premiers mois de travail", geo: "დიახ, მუშაობის პირველი სამი თვის განმავლობაში" }, isCorrect: false },
            { text: { fr: "Seulement si le salaire est très petit", geo: "მხოლოდ იმ შემთხვევაში, თუ ხელფასი ძალიან მცირეა" }, isCorrect: false }
        ],
        remark: {
            fr: "« Le travail non déclaré prive le salarié de sa protection sociale et constitue une fraude envers l'État. »",
            geo: "«არადეკლარირებული შრომა ართმევს დასაქმებულს სოციალურ დაცვას და წარმოადგენს სახელმწიფოს წინააღმდეგ თაღლითობას.»"
        }
    },
];

