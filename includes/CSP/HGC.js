// includes/CSP/HGC.js
// Source : formation-civique.interieur.gouv.fr — liste officielle CSP

export const questionsCSP_HGC = [
    {
        id: "CSP-HGC-1",
        question: { fr: "En quelle année a débuté la Révolution française ?", geo: "რომელ წელს დაიწყო საფრანგეთის რევოლუცია?" },
        options: [
            { text: { fr: "En 1789", geo: "1789 წელს" }, isCorrect: true },
            { text: { fr: "En 1793", geo: "1793 წელს" }, isCorrect: false },
            { text: { fr: "En 1776", geo: "1776 წელს" }, isCorrect: false },
            { text: { fr: "En 1804", geo: "1804 წელს" }, isCorrect: false }
        ],
        remark: { fr: "« La prise de la Bastille le 14 juillet 1789 marque le début symbolique de la Révolution française. »", geo: "« ბასტილიის აღება 1789 წლის 14 ივლისს სიმბოლურად აღნიშნავს საფრანგეთის რევოლუციის დასაწყისს. »" }
    },
    {
        id: "CSP-HGC-2",
        question: { fr: "Qui était Napoléon Ier ?", geo: "ვინ იყო ნაპოლეონ I?" },
        options: [
            { text: { fr: "Un général devenu empereur des Français (1804-1814)", geo: "გენერალი, რომელიც გახდა ფრანგთა იმპერატორი (1804-1814)" }, isCorrect: true },
            { text: { fr: "Le roi de France qui a régné pendant la Révolution", geo: "საფრანგეთის მეფე, რომელიც მეფობდა რევოლუციის დროს" }, isCorrect: false },
            { text: { fr: "Un philosophe des Lumières du XVIIIe siècle", geo: "XVIII საუკუნის განმანათლებლობის ფილოსოფოსი" }, isCorrect: false },
            { text: { fr: "Le premier président de la République française", geo: "საფრანგეთის რესპუბლიკის პირველი პრეზიდენტი" }, isCorrect: false }
        ],
        remark: { fr: "« Napoléon Ier a fondé le Premier Empire français en 1804 et a profondément réformé les institutions du pays avec le Code civil. »", geo: "« ნაპოლეონ I-მა 1804 წელს დააფუძნა საფრანგეთის პირველი იმპერია და სამოქალაქო კოდექსით ღრმად გარდაქმნა ქვეყნის ინსტიტუტები. »" }
    },
    {
        id: "CSP-HGC-3",
        question: { fr: "Lequel de ces personnages historiques est français ?", geo: "ამ ისტორიული პიროვნებებიდან რომელი არის ფრანგი?" },
        options: [
            { text: { fr: "Charles de Gaulle", geo: "შარლ დე გოლი" }, isCorrect: true },
            { text: { fr: "Winston Churchill", geo: "უინსტონ ჩერჩილი" }, isCorrect: false },
            { text: { fr: "Giuseppe Garibaldi", geo: "ჯუზეპე გარიბალდი" }, isCorrect: false },
            { text: { fr: "Otto von Bismarck", geo: "ოტო ფონ ბისმარკი" }, isCorrect: false }
        ],
        remark: { fr: "« Charles de Gaulle, général et homme d'État français, a dirigé la France libre durant la Seconde Guerre mondiale et fondé la Ve République en 1958. »", geo: "« შარლ დე გოლი, ფრანგი გენერალი და სახელმწიფო მოღვაწე, ხელმძღვანელობდა თავისუფალ საფრანგეთს მეორე მსოფლიო ომის დროს და 1958 წელს დააფუძნა მეხუთე რესპუბლიკა. »" }
    },
    {
        id: "CSP-HGC-4",
        question: { fr: "Dans quelle République est-on aujourd'hui ?", geo: "რომელ რესპუბლიკაში ვართ დღეს?" },
        options: [
            { text: { fr: "La Ve République (depuis 1958)", geo: "მეხუთე რესპუბლიკა (1958 წლიდან)" }, isCorrect: true },
            { text: { fr: "La IVe République", geo: "მეოთხე რესპუბლიკა" }, isCorrect: false },
            { text: { fr: "La IIIe République", geo: "მესამე რესპუბლიკა" }, isCorrect: false },
            { text: { fr: "La VIe République", geo: "მეექვსე რესპუბლიკა" }, isCorrect: false }
        ],
        remark: { fr: "« La Ve République, fondée en 1958 par le général de Gaulle, est régie par la Constitution du 4 octobre 1958, toujours en vigueur. »", geo: "« მეხუთე რესპუბლიკა, 1958 წელს გენერალ დე გოლის მიერ დაფუძნებული, მართავს 1958 წლის 4 ოქტომბრის კონსტიტუცია, რომელიც დღემდე მოქმედებს. »" }
    },
    {
        id: "CSP-HGC-5",
        question: { fr: "Qu'est-ce que la Shoah ?", geo: "რა არის შოა?" },
        options: [
            { text: { fr: "L'extermination systématique de millions de Juifs par les nazis durant la Seconde Guerre mondiale", geo: "მილიონობით ებრაელის სისტემატური მოსპობა ნაცისტების მიერ მეორე მსოფლიო ომის დროს" }, isCorrect: true },
            { text: { fr: "Le nom de la bataille finale de la Première Guerre mondiale en 1918", geo: "პირველი მსოფლიო ომის 1918 წლის საბოლოო ბრძოლის სახელი" }, isCorrect: false },
            { text: { fr: "Une loi française de 1945 interdisant les discriminations raciales", geo: "1945 წლის ფრანგული კანონი რასობრივი დისკრიმინაციის აკრძალვის შესახებ" }, isCorrect: false },
            { text: { fr: "Le traité de paix signé à la fin de la Seconde Guerre mondiale", geo: "მეორე მსოფლიო ომის ბოლოს ხელმოწერილი სამშვიდობო ხელშეკრულება" }, isCorrect: false }
        ],
        remark: { fr: "« La Shoah désigne le génocide de six millions de Juifs européens perpétré par le régime nazi entre 1941 et 1945. »", geo: "« შოა აღნიშნავს ნაცისტური რეჟიმის მიერ 1941-1945 წლებს შორის ჩადენილ ექვსი მილიონი ევროპელი ებრაელის გენოციდს. »" }
    },
    {
        id: "CSP-HGC-6",
        question: { fr: "Quel pays ou région du monde a été colonisé par la France ?", geo: "მსოფლიოს რომელი ქვეყანა ან რეგიონი იყო საფრანგეთის კოლონია?" },
        options: [
            { text: { fr: "L'Algérie (colonisée de 1830 à 1962)", geo: "ალჟირი (კოლონიზებული 1830-დან 1962 წლამდე)" }, isCorrect: true },
            { text: { fr: "Le Brésil", geo: "ბრაზილია" }, isCorrect: false },
            { text: { fr: "L'Inde entière", geo: "მთელი ინდოეთი" }, isCorrect: false },
            { text: { fr: "Les États-Unis", geo: "შეერთებული შტატები" }, isCorrect: false }
        ],
        remark: { fr: "« L'Algérie, colonisée par la France à partir de 1830, a obtenu son indépendance le 5 juillet 1962 après une longue guerre de libération. »", geo: "« ალჟირი, საფრანგეთის მიერ 1830 წლიდან კოლონიზებული, დამოუკიდებლობას მიაღწია 1962 წლის 5 ივლისს გრძელი განმათავისუფლებელი ომის შემდეგ. »" }
    },
    {
        id: "CSP-HGC-7",
        question: { fr: "Qui a rendu l'école gratuite, laïque et obligatoire ?", geo: "ვინ აქცია სკოლა უფასოდ, სეკულარულად და სავალდებულოდ სწავლად?" },
        options: [
            { text: { fr: "Jules Ferry, ministre de l'Instruction publique, dans les années 1880", geo: "ჟიულ ფერი, საჯარო განათლების მინისტრი, 1880-იან წლებში" }, isCorrect: true },
            { text: { fr: "Napoléon Ier, avec la création des lycées impériaux", geo: "ნაპოლეონ I, საიმპერატორო ლიცეუმების შექმნით" }, isCorrect: false },
            { text: { fr: "Victor Hugo, par ses discours au Parlement", geo: "ვიქტორ ჰიუგო, პარლამენტში სიტყვებით" }, isCorrect: false },
            { text: { fr: "Le général de Gaulle, après la Libération en 1944", geo: "გენერალი დე გოლი, 1944 წელს განთავისუფლების შემდეგ" }, isCorrect: false }
        ],
        remark: { fr: "« Les lois Jules Ferry de 1881 et 1882 ont instauré la gratuité, la laïcité et l'obligation scolaire pour tous les enfants de France. »", geo: "« 1881 და 1882 წლების ჟიულ ფერის კანონებმა დაადგინა სასწავლო სავალდებულოობა, სეკულარულობა და სახელმწიფო განათლების უფასოობა საფრანგეთის ყველა ბავშვისთვის. »" }
    },
    {
        id: "CSP-HGC-8",
        question: { fr: "Quand a eu lieu la Seconde Guerre mondiale ?", geo: "როდის მოხდა მეორე მსოფლიო ომი?" },
        options: [
            { text: { fr: "De 1939 à 1945", geo: "1939-დან 1945 წლამდე" }, isCorrect: true },
            { text: { fr: "De 1914 à 1918", geo: "1914-დან 1918 წლამდე" }, isCorrect: false },
            { text: { fr: "De 1936 à 1942", geo: "1936-დან 1942 წლამდე" }, isCorrect: false },
            { text: { fr: "De 1940 à 1947", geo: "1940-დან 1947 წლამდე" }, isCorrect: false }
        ],
        remark: { fr: "« La Seconde Guerre mondiale (1939-1945) a été le conflit le plus meurtrier de l'histoire, causant entre 70 et 85 millions de morts dans le monde. »", geo: "« მეორე მსოფლიო ომი (1939-1945) იყო ისტორიის ყველაზე სასტიკი კონფლიქტი, რომელმაც მსოფლიოში 70-85 მილიონი ადამიანის სიცოცხლე შეიწირა. »" }
    },
    {
        id: "CSP-HGC-9",
        question: { fr: "Quand a eu lieu la Première Guerre mondiale ?", geo: "როდის მოხდა პირველი მსოფლიო ომი?" },
        options: [
            { text: { fr: "De 1914 à 1918", geo: "1914-დან 1918 წლამდე" }, isCorrect: true },
            { text: { fr: "De 1939 à 1945", geo: "1939-დან 1945 წლამდე" }, isCorrect: false },
            { text: { fr: "De 1870 à 1871", geo: "1870-დან 1871 წლამდე" }, isCorrect: false },
            { text: { fr: "De 1912 à 1916", geo: "1912-დან 1916 წლამდე" }, isCorrect: false }
        ],
        remark: { fr: "« La Première Guerre mondiale (1914-1918), aussi appelée la Grande Guerre, a fait plus de 18 millions de morts et a profondément transformé l'Europe. »", geo: "« პირველი მსოფლიო ომი (1914-1918), ასევე ცნობილი როგორც დიდი ომი, 18 მილიონზე მეტი ადამიანის სიცოცხლე შეიწირა და ღრმად გარდაქმნა ევროპა. »" }
    },
    {
        id: "CSP-HGC-10",
        question: { fr: "En quelle année a été créée la Communauté Économique Européenne (CEE) ?", geo: "რომელ წელს შეიქმნა ევროპის ეკონომიკური გაერთიანება (EEG)?" },
        options: [
            { text: { fr: "En 1957, par le traité de Rome", geo: "1957 წელს, რომის ხელშეკრულებით" }, isCorrect: true },
            { text: { fr: "En 1945, après la Seconde Guerre mondiale", geo: "1945 წელს, მეორე მსოფლიო ომის შემდეგ" }, isCorrect: false },
            { text: { fr: "En 1992, par le traité de Maastricht", geo: "1992 წელს, მაასტრიხტის ხელშეკრულებით" }, isCorrect: false },
            { text: { fr: "En 1950, par la déclaration Schuman", geo: "1950 წელს, შუმანის დეკლარაციით" }, isCorrect: false }
        ],
        remark: { fr: "« Le traité de Rome, signé le 25 mars 1957, a institué la Communauté Économique Européenne, fondement de l'actuelle Union européenne. »", geo: "« რომის ხელშეკრულება, ხელმოწერილი 1957 წლის 25 მარტს, დააფუძნა ევროპის ეკონომიკური გაერთიანება, რომელიც დღევანდელი ევროკავშირის საფუძველია. »" }
    },
    {
        id: "CSP-HGC-11",
        question: { fr: "Le 11 novembre est un jour férié. À quoi correspond cette date ?", geo: "11 ნოემბერი დასვენების დღეა. რას შეესაბამება ეს თარიღი?" },
        options: [
            { text: { fr: "L'armistice de la Première Guerre mondiale, signé le 11 novembre 1918", geo: "პირველი მსოფლიო ომის ზავი, ხელმოწერილი 1918 წლის 11 ნოემბერს" }, isCorrect: true },
            { text: { fr: "La victoire des Alliés lors de la Seconde Guerre mondiale en 1945", geo: "მოკავშირეების გამარჯვება მეორე მსოფლიო ომში 1945 წელს" }, isCorrect: false },
            { text: { fr: "La signature du traité de Versailles en 1919", geo: "ვერსალის ხელშეკრულებაზე ხელმოწერა 1919 წელს" }, isCorrect: false },
            { text: { fr: "La libération de Paris pendant la Seconde Guerre mondiale", geo: "პარიზის განთავისუფლება მეორე მსოფლიო ომის დროს" }, isCorrect: false }
        ],
        remark: { fr: "« L'armistice du 11 novembre 1918, signé dans un wagon à Rethondes, a mis fin aux combats de la Première Guerre mondiale sur le front occidental. »", geo: "« 1918 წლის 11 ნოემბრის ზავი, ხელმოწერილი ვაგონში რეთონდში, დაასრულა ბრძოლები პირველი მსოფლიო ომის დასავლეთ ფრონტზე. »" }
    },
    {
        id: "CSP-HGC-12",
        question: { fr: "Qui a été le premier Président élu sous la Ve République ?", geo: "ვინ იყო პირველი არჩეული პრეზიდენტი მეხუთე რესპუბლიკის პერიოდში?" },
        options: [
            { text: { fr: "Charles de Gaulle (élu en 1958)", geo: "შარლ დე გოლი (არჩეულია 1958 წელს)" }, isCorrect: true },
            { text: { fr: "Georges Pompidou", geo: "ჟორჟ პომპიდუ" }, isCorrect: false },
            { text: { fr: "François Mitterrand", geo: "ფრანსუა მიტერანი" }, isCorrect: false },
            { text: { fr: "Vincent Auriol", geo: "ვენსან ოჟიოლი" }, isCorrect: false }
        ],
        remark: { fr: "« Charles de Gaulle, élu président de la République en décembre 1958, a exercé le pouvoir jusqu'en 1969, date de sa démission après un référendum. »", geo: "« შარლ დე გოლი, 1958 წლის დეკემბერში არჩეული რესპუბლიკის პრეზიდენტი, ახორციელებდა ხელისუფლებას 1969 წლამდე, სანამ არ გადადგა რეფერენდუმის შემდეგ. »" }
    },
    {
        id: "CSP-HGC-13",
        question: { fr: "En quelle année l'esclavage a-t-il été aboli définitivement en France ?", geo: "რომელ წელს გაუქმდა საბოლოოდ მონობა საფრანგეთში?" },
        options: [
            { text: { fr: "En 1848, sous la IIe République (décret Schœlcher)", geo: "1848 წელს, მეორე რესპუბლიკის დროს (შელშერის დეკრეტი)" }, isCorrect: true },
            { text: { fr: "En 1789, lors de la Révolution française", geo: "1789 წელს, საფრანგეთის რევოლუციის დროს" }, isCorrect: false },
            { text: { fr: "En 1905, avec la loi de séparation des Églises et de l'État", geo: "1905 წელს, ეკლესიისა და სახელმწიფოს გამიჯვნის კანონით" }, isCorrect: false },
            { text: { fr: "En 1794, puis rétabli par Napoléon", geo: "1794 წელს, შემდეგ კი ნაპოლეონმა აღადგინა" }, isCorrect: false }
        ],
        remark: { fr: "« Le décret Schœlcher du 27 avril 1848 a définitivement aboli l'esclavage dans toutes les colonies françaises, libérant environ 250 000 personnes. »", geo: "« 1848 წლის 27 აპრილის შელშერის დეკრეტმა საბოლოოდ გააუქმა მონობა ყველა ფრანგულ კოლონიაში, დაახლოებით 250 000 ადამიანს მიანიჭა თავისუფლება. »" }
    },
    {
        id: "CSP-HGC-14",
        question: { fr: "Depuis quelle année l'école publique est-elle gratuite ?", geo: "რომელი წლიდან არის საჯარო სკოლა უფასო?" },
        options: [
            { text: { fr: "Depuis 1881 (loi Jules Ferry)", geo: "1881 წლიდან (ჟიულ ფერის კანონი)" }, isCorrect: true },
            { text: { fr: "Depuis 1905", geo: "1905 წლიდან" }, isCorrect: false },
            { text: { fr: "Depuis 1944", geo: "1944 წლიდან" }, isCorrect: false },
            { text: { fr: "Depuis 1958", geo: "1958 წლიდან" }, isCorrect: false }
        ],
        remark: { fr: "« La loi du 16 juin 1881 a supprimé la rétribution scolaire, rendant l'enseignement primaire public entièrement gratuit en France. »", geo: "« 1881 წლის 16 ივნისის კანონმა გააუქმა სასკოლო გადასახადი, რითაც საფრანგეთში საჯარო დაწყებითი განათლება სრულად უფასო გახდა. »" }
    },
    {
        id: "CSP-HGC-15",
        question: { fr: "Combien y a-t-il eu de républiques en France ?", geo: "რამდენი რესპუბლიკა იყო საფრანგეთში?" },
        options: [
            { text: { fr: "Cinq républiques (Ire, IIe, IIIe, IVe et Ve)", geo: "ხუთი რესპუბლიკა (I, II, III, IV და V)" }, isCorrect: true },
            { text: { fr: "Trois républiques", geo: "სამი რესპუბლიკა" }, isCorrect: false },
            { text: { fr: "Quatre républiques", geo: "ოთხი რესპუბლიკა" }, isCorrect: false },
            { text: { fr: "Six républiques", geo: "ექვსი რესპუბლიკა" }, isCorrect: false }
        ],
        remark: { fr: "« La France a connu cinq républiques depuis 1792 : la Ire (1792), IIe (1848), IIIe (1870), IVe (1946) et Ve (1958), toujours en vigueur. »", geo: "« საფრანგეთს 1792 წლიდან ხუთი რესპუბლიკა ჰქონია: I (1792), II (1848), III (1870), IV (1946) და V (1958), რომელიც დღემდე მოქმედებს. »" }
    },
    {
        id: "CSP-HGC-16",
        question: { fr: "Qui était le roi de France au moment de la Révolution française ?", geo: "ვინ იყო საფრანგეთის მეფე საფრანგეთის რევოლუციის დროს?" },
        options: [
            { text: { fr: "Louis XVI", geo: "ლუი XVI" }, isCorrect: true },
            { text: { fr: "Louis XIV", geo: "ლუი XIV" }, isCorrect: false },
            { text: { fr: "Louis XVIII", geo: "ლუი XVIII" }, isCorrect: false },
            { text: { fr: "Napoléon Ier", geo: "ნაპოლეონ I" }, isCorrect: false }
        ],
        remark: { fr: "« Louis XVI, roi de France de 1774 à 1792, a été guillotiné le 21 janvier 1793 après avoir été jugé coupable de trahison par la Convention nationale. »", geo: "« ლუი XVI, საფრანგეთის მეფე 1774-დან 1792 წლამდე, გილიოტინით სიკვდილს მიასაჯეს 1793 წლის 21 იანვარს, მას შემდეგ რაც ეროვნულმა კონვენციამ ღალატში დამნაშავედ ცნო. »" }
    },
    {
        id: "CSP-HGC-17",
        question: { fr: "Qui a fondé la Ve République ?", geo: "ვინ დააფუძნა მეხუთე რესპუბლიკა?" },
        options: [
            { text: { fr: "Le général Charles de Gaulle, en 1958", geo: "გენერალი შარლ დე გოლი, 1958 წელს" }, isCorrect: true },
            { text: { fr: "Georges Pompidou, en 1969", geo: "ჟორჟ პომპიდუ, 1969 წელს" }, isCorrect: false },
            { text: { fr: "François Mitterrand, en 1981", geo: "ფრანსუა მიტერანი, 1981 წელს" }, isCorrect: false },
            { text: { fr: "Valéry Giscard d'Estaing, en 1974", geo: "ვალერი ჟისკარ დ'ესტენი, 1974 წელს" }, isCorrect: false }
        ],
        remark: { fr: "« La Constitution de la Ve République, rédigée sous l'autorité du général de Gaulle, a été approuvée par référendum le 28 septembre 1958 avec 79,25 % de « oui ». »", geo: "« მეხუთე რესპუბლიკის კონსტიტუცია, შემუშავებული გენერალ დე გოლის ხელმძღვანელობით, 1958 წლის 28 სექტემბრის რეფერენდუმზე 79,25% «დიახ»-ით დამტკიცდა. »" }
    },
    {
        id: "CSP-HGC-18",
        question: { fr: "Que célèbre-t-on le 14 juillet ?", geo: "რას აღნიშნავენ 14 ივლისს?" },
        options: [
            { text: { fr: "La prise de la Bastille en 1789 et la fête nationale française", geo: "ბასტილიის აღება 1789 წელს და საფრანგეთის ეროვნული დღესასწაული" }, isCorrect: true },
            { text: { fr: "La signature de la Constitution de la Ve République", geo: "მეხუთე რესპუბლიკის კონსტიტუციაზე ხელმოწერა" }, isCorrect: false },
            { text: { fr: "La victoire de la France lors de la Seconde Guerre mondiale", geo: "საფრანგეთის გამარჯვება მეორე მსოფლიო ომში" }, isCorrect: false },
            { text: { fr: "L'abolition de la peine de mort en 1981", geo: "სიკვდილით დასჯის გაუქმება 1981 წელს" }, isCorrect: false }
        ],
        remark: { fr: "« Le 14 juillet, fête nationale française depuis 1880, commémore la prise de la Bastille le 14 juillet 1789, symbole du début de la Révolution. »", geo: "« 14 ივლისი, ფრანგული ეროვნული დღესასწაული 1880 წლიდან, იხსენებს 1789 წლის 14 ივლისს ბასტილიის აღებას, რევოლუციის დასაწყისის სიმბოლოს. »" }
    },
    {
        id: "CSP-HGC-19",
        question: { fr: "Quelle guerre a eu lieu entre 1914 et 1918 ?", geo: "რა ომი იყო 1914-1918 წლებში?" },
        options: [
            { text: { fr: "La Première Guerre mondiale", geo: "პირველი მსოფლიო ომი" }, isCorrect: true },
            { text: { fr: "La Seconde Guerre mondiale", geo: "მეორე მსოფლიო ომი" }, isCorrect: false },
            { text: { fr: "La guerre franco-prussienne", geo: "ფრანკო-პრუსიული ომი" }, isCorrect: false },
            { text: { fr: "La guerre d'Algérie", geo: "ალჟირის ომი" }, isCorrect: false }
        ],
        remark: { fr: "« La Première Guerre mondiale (1914-1918), déclenchée après l'assassinat de l'archiduc François-Ferdinand, a opposé la Triple-Entente aux Empires centraux. »", geo: "« პირველი მსოფლიო ომი (1914-1918), გამოწვეული არქჰერცოგ ფრანც-ფერდინანდის მკვლელობის შემდეგ, დაუპირისპირა სამთა ანტანტა ცენტრალურ იმპერიებს. »" }
    },
    {
        id: "CSP-HGC-20",
        question: { fr: "Pourquoi l'année 1958 est importante pour la France ?", geo: "რატომ არის 1958 წელი მნიშვნელოვანი საფრანგეთისთვის?" },
        options: [
            { text: { fr: "C'est l'année de la fondation de la Ve République et de l'adoption de la Constitution actuelle", geo: "ეს არის მეხუთე რესპუბლიკის დაფუძნებისა და მოქმედი კონსტიტუციის მიღების წელი" }, isCorrect: true },
            { text: { fr: "C'est l'année de la libération de Paris pendant la Seconde Guerre mondiale", geo: "ეს არის პარიზის განთავისუფლების წელი მეორე მსოფლიო ომის დროს" }, isCorrect: false },
            { text: { fr: "C'est l'année de l'abolition de la peine de mort en France", geo: "ეს არის სიკვდილით დასჯის გაუქმების წელი საფრანგეთში" }, isCorrect: false },
            { text: { fr: "C'est l'année de l'entrée de la France dans l'Union européenne", geo: "ეს არის საფრანგეთის ევროკავშირში შესვლის წელი" }, isCorrect: false }
        ],
        remark: { fr: "« En 1958, la crise algérienne a conduit au retour du général de Gaulle au pouvoir et à l'élaboration d'une nouvelle Constitution, fondant la Ve République. »", geo: "« 1958 წელს ალჟირის კრიზისმა გამოიწვია გენერალ დე გოლის ხელისუფლებაში დაბრუნება და ახალი კონსტიტუციის შემუშავება, რომელმაც მეხუთე რესპუბლიკა დააფუძნა. »" }
    },
    {
        id: "CSP-HGC-21",
        question: { fr: "Quel fleuve coule en France ?", geo: "რომელი მდინარე მიედინება საფრანგეთში?" },
        options: [
            { text: { fr: "La Seine (qui traverse Paris)", geo: "სენა (რომელიც პარიზს კვეთს)" }, isCorrect: true },
            { text: { fr: "Le Rhin (fleuve frontalier avec l'Allemagne)", geo: "რაინი (გერმანიასთან სასაზღვრო მდინარე)" }, isCorrect: false },
            { text: { fr: "Le Danube", geo: "დუნაი" }, isCorrect: false },
            { text: { fr: "La Tamise", geo: "თემზა" }, isCorrect: false }
        ],
        remark: { fr: "« La Seine, d'une longueur de 775 km, prend sa source en Bourgogne, traverse Paris et se jette dans la Manche au niveau du Havre. »", geo: "« სენა, 775 კმ სიგრძის, სათავეს იღებს ბურგუნდიაში, გადის პარიზში და ჩაედინება ლა-მანშში ლე-ავრის მახლობლად. »" }
    },
    {
        id: "CSP-HGC-22",
        question: { fr: "Quelle ville est française ?", geo: "რომელი ქალაქია ფრანგული?" },
        options: [
            { text: { fr: "Lyon", geo: "ლიონი" }, isCorrect: true },
            { text: { fr: "Genève", geo: "ჟენევა" }, isCorrect: false },
            { text: { fr: "Barcelone", geo: "ბარსელონა" }, isCorrect: false },
            { text: { fr: "Bruxelles", geo: "ბრიუსელი" }, isCorrect: false }
        ],
        remark: { fr: "« Lyon, deuxième agglomération de France, est connue pour sa gastronomie, ses traboules et son quartier Renaissance inscrit au patrimoine mondial de l'UNESCO. »", geo: "« ლიონი, საფრანგეთის მეორე დიდი ქალაქი, ცნობილია გასტრონომიით, ტრაბულებით და იუნესკოს მსოფლიო მემკვიდრეობის სიაში შეტანილი რენესანსული კვარტლით. »" }
    },
    {
        id: "CSP-HGC-23",
        question: { fr: "Quel océan borde la côte ouest française ?", geo: "რომელი ოკეანე ესაზღვრება საფრანგეთის დასავლეთ სანაპიროს?" },
        options: [
            { text: { fr: "L'océan Atlantique", geo: "ატლანტის ოკეანე" }, isCorrect: true },
            { text: { fr: "L'océan Pacifique", geo: "წყნარი ოკეანე" }, isCorrect: false },
            { text: { fr: "L'océan Indien", geo: "ინდოეთის ოკეანე" }, isCorrect: false },
            { text: { fr: "L'océan Arctique", geo: "არქტიკის ოკეანე" }, isCorrect: false }
        ],
        remark: { fr: "« La façade atlantique de la France, longue de plus de 2 500 km, s'étend de la Manche au golfe de Gascogne, bordant la Bretagne, la Vendée et l'Aquitaine. »", geo: "« საფრანგეთის ატლანტიკური სანაპირო, 2500 კმ-ზე მეტი სიგრძის, ვრცელდება ლა-მანშიდან გასკონის ყურემდე, ბრეტანს, ვანდეს და აქვიტანიას ესაზღვრება. »" }
    },
    {
        id: "CSP-HGC-24",
        question: { fr: "Qu'est-ce que Paris ?", geo: "რა არის პარიზი?" },
        options: [
            { text: { fr: "La capitale et la plus grande ville de France, siège des institutions nationales", geo: "საფრანგეთის დედაქალაქი და უდიდესი ქალაქი, ეროვნული ინსტიტუტების ადგილსამყოფელი" }, isCorrect: true },
            { text: { fr: "La deuxième ville de France après Lyon", geo: "საფრანგეთის მეორე ქალაქი ლიონის შემდეგ" }, isCorrect: false },
            { text: { fr: "Une ville-région autonome sans maire", geo: "ავტონომიური ქალაქ-რეგიონი მერის გარეშე" }, isCorrect: false },
            { text: { fr: "Le siège de l'Union européenne", geo: "ევროკავშირის ადგილსამყოფელი" }, isCorrect: false }
        ],
        remark: { fr: "« Paris, capitale de la France depuis le Moyen Âge, est aussi la commune la plus peuplée du pays, avec plus de 2 millions d'habitants intramuros. »", geo: "« პარიზი, საფრანგეთის დედაქალაქი შუა საუკუნეებიდან, ასევე ქვეყნის ყველაზე მჭიდროდ დასახლებული კომუნაა, ქალაქის ფარგლებში 2 მილიონზე მეტი მცხოვრებით. »" }
    },
    {
        id: "CSP-HGC-25",
        question: { fr: "Quelle est la capitale de la France ?", geo: "რომელია საფრანგეთის დედაქალაქი?" },
        options: [
            { text: { fr: "Paris", geo: "პარიზი" }, isCorrect: true },
            { text: { fr: "Lyon", geo: "ლიონი" }, isCorrect: false },
            { text: { fr: "Marseille", geo: "მარსელი" }, isCorrect: false },
            { text: { fr: "Bordeaux", geo: "ბორდო" }, isCorrect: false }
        ],
        remark: { fr: "« Paris est la capitale politique, économique et culturelle de la France ; elle accueille le Parlement, l'Élysée et de nombreuses institutions internationales. »", geo: "« პარიზი საფრანგეთის პოლიტიკური, ეკონომიკური და კულტურული დედაქალაქია; ის მასპინძლობს პარლამენტს, ელიზეს სასახლეს და მრავალ საერთაშორისო ინსტიტუტს. »" }
    },
    {
        id: "CSP-HGC-26",
        question: { fr: "Sur quel continent se situe la France métropolitaine ?", geo: "რომელ კონტინენტზე მდებარეობს მეტროპოლიტური საფრანგეთი?" },
        options: [
            { text: { fr: "En Europe", geo: "ევროპაში" }, isCorrect: true },
            { text: { fr: "En Amérique du Nord", geo: "ჩრდილოეთ ამერიკაში" }, isCorrect: false },
            { text: { fr: "En Afrique", geo: "აფრიკაში" }, isCorrect: false },
            { text: { fr: "En Asie", geo: "აზიაში" }, isCorrect: false }
        ],
        remark: { fr: "« La France métropolitaine occupe la partie occidentale de l'Europe et partage ses frontières avec six pays : la Belgique, le Luxembourg, l'Allemagne, la Suisse, l'Italie et l'Espagne. »", geo: "« მეტროპოლიტური საფრანგეთი იკავებს ევროპის დასავლეთ ნაწილს და სასაზღვრო ხაზი ექვს ქვეყანასთან აქვს: ბელგია, ლუქსემბურგი, გერმანია, შვეიცარია, იტალია და ესპანეთი. »" }
    },
    {
        id: "CSP-HGC-27",
        question: { fr: "Quelle île est un département d'outre-mer français ?", geo: "რომელი კუნძულია საფრანგეთის საზღვარგარეთა დეპარტამენტი?" },
        options: [
            { text: { fr: "La Martinique", geo: "მარტინიკა" }, isCorrect: true },
            { text: { fr: "La Sicile", geo: "სიცილია" }, isCorrect: false },
            { text: { fr: "Malte", geo: "მალტა" }, isCorrect: false },
            { text: { fr: "Les Açores", geo: "აზორის კუნძულები" }, isCorrect: false }
        ],
        remark: { fr: "« La Martinique, département et région d'outre-mer depuis 1946, est une île des Antilles françaises dont les habitants sont citoyens français à part entière. »", geo: "« მარტინიკა, საზღვარგარეთა დეპარტამენტი და რეგიონი 1946 წლიდან, ფრანგული ანტილების კუნძულია, რომლის მცხოვრებნი სრულფასოვანი ფრანგი მოქალაქეები არიან. »" }
    },
    {
        id: "CSP-HGC-28",
        question: { fr: "Combien y a-t-il de régions en France métropolitaine ?", geo: "რამდენი რეგიონია მეტროპოლიტურ საფრანგეთში?" },
        options: [
            { text: { fr: "13 régions en France métropolitaine (depuis 2016)", geo: "13 რეგიონი მეტროპოლიტურ საფრანგეთში (2016 წლიდან)" }, isCorrect: true },
            { text: { fr: "22 régions", geo: "22 რეგიონი" }, isCorrect: false },
            { text: { fr: "8 régions", geo: "8 რეგიონი" }, isCorrect: false },
            { text: { fr: "18 régions", geo: "18 რეგიონი" }, isCorrect: false }
        ],
        remark: { fr: "« La réforme territoriale de 2015, entrée en vigueur le 1er janvier 2016, a réduit le nombre de régions métropolitaines de 22 à 13 par fusion de régions. »", geo: "« 2015 წლის ტერიტორიული რეფორმა, ამოქმედდა 2016 წლის 1 იანვარს, შეამცირა მეტროპოლიტური რეგიონების რაოდენობა 22-დან 13-მდე რეგიონების შერწყმით. »" }
    },
    {
        id: "CSP-HGC-29",
        question: { fr: "Quelle ville est un grand port maritime ?", geo: "რომელი ქალაქია დიდი საზღვაო ნავსადგური?" },
        options: [
            { text: { fr: "Marseille (le plus grand port de France et de la Méditerranée)", geo: "მარსელი (საფრანგეთისა და ხმელთაშუა ზღვის უდიდესი ნავსადგური)" }, isCorrect: true },
            { text: { fr: "Strasbourg (port fluvial sur le Rhin)", geo: "სტრასბური (სამდინარო ნავსადგური რაინზე)" }, isCorrect: false },
            { text: { fr: "Lyon (ville sans accès à la mer)", geo: "ლიონი (ქალაქი ზღვაზე გასასვლელის გარეშე)" }, isCorrect: false },
            { text: { fr: "Clermont-Ferrand (ville du Massif Central)", geo: "კლერმონ-ფერანი (მასიფ სანტრალის ქალაქი)" }, isCorrect: false }
        ],
        remark: { fr: "« Marseille, fondée par des colons grecs vers 600 av. J.-C., est le premier port de France et l'un des plus importants de la Méditerranée. »", geo: "« მარსელი, დაახლოებით ძვ.წ. 600 წელს ბერძენი კოლონისტების მიერ დაარსებული, საფრანგეთის პირველი ნავსადგურია და ხმელთაშუა ზღვის ერთ-ერთი ყველაზე მნიშვნელოვანი. »" }
    },
    {
        id: "CSP-HGC-30",
        question: { fr: "Quelle est la mer au sud de la France métropolitaine ?", geo: "რომელია მეტროპოლიური საფრანგეთის სამხრეთით მდებარე ზღვა?" },
        options: [
            { text: { fr: "La mer Méditerranée", geo: "ხმელთაშუა ზღვა" }, isCorrect: true },
            { text: { fr: "La mer du Nord", geo: "ჩრდილოეთის ზღვა" }, isCorrect: false },
            { text: { fr: "La mer Baltique", geo: "ბალტიის ზღვა" }, isCorrect: false },
            { text: { fr: "La mer Noire", geo: "შავი ზღვა" }, isCorrect: false }
        ],
        remark: { fr: "« La mer Méditerranée borde le sud de la France sur environ 1 700 km, des Pyrénées-Orientales jusqu'aux Alpes-Maritimes en passant par les côtes provençales. »", geo: "« ხმელთაშუა ზღვა ესაზღვრება საფრანგეთის სამხრეთს დაახლოებით 1700 კმ-ზე, აღმოსავლეთ პირინეებიდან ალპ-მარიტიმმდე პრованსის სანაპიროებზე გავლით. »" }
    },
    {
        id: "CSP-HGC-31",
        question: { fr: "Quelle ville est située au bord de la mer Méditerranée ?", geo: "რომელი ქალაქი მდებარეობს ხმელთაშუა ზღვის სანაპიროზე?" },
        options: [
            { text: { fr: "Marseille", geo: "მარსელი" }, isCorrect: true },
            { text: { fr: "Bordeaux (bord de l'Atlantique)", geo: "ბორდო (ატლანტის სანაპიროზე)" }, isCorrect: false },
            { text: { fr: "Nantes (bord de la Loire)", geo: "ნანტი (ლუარის სანაპიროზე)" }, isCorrect: false },
            { text: { fr: "Strasbourg (bord du Rhin)", geo: "სტრასბური (რაინის სანაპიროზე)" }, isCorrect: false }
        ],
        remark: { fr: "« Marseille, deuxième ville de France avec plus d'un million d'habitants, est installée sur la rade naturelle de la Méditerranée depuis l'Antiquité. »", geo: "« მარსელი, საფრანგეთის მეორე ქალაქი ერთ მილიონზე მეტი მცხოვრებით, უძველესი დროიდან ხმელთაშუა ზღვის ბუნებრივ ყურეში მდებარეობს. »" }
    },
    {
        id: "CSP-HGC-32",
        question: { fr: "Où se situe la Corse ?", geo: "სად მდებარეობს კორსიკა?" },
        options: [
            { text: { fr: "En mer Méditerranée ; c'est une île française, collectivité territoriale", geo: "ხმელთაშუა ზღვაში; ეს არის ფრანგული კუნძული, ტერიტორიული კოლექტივი" }, isCorrect: true },
            { text: { fr: "Dans l'océan Atlantique, au large de la Bretagne", geo: "ატლანტის ოკეანეში, ბრეტანის სანაპიროსთან" }, isCorrect: false },
            { text: { fr: "Dans la Manche, entre la France et l'Angleterre", geo: "ლა-მანშში, საფრანგეთსა და ინგლისს შორის" }, isCorrect: false },
            { text: { fr: "Dans la mer du Nord, au large de Dunkerque", geo: "ჩრდილოეთის ზღვაში, დუნკერკის სანაპიროსთან" }, isCorrect: false }
        ],
        remark: { fr: "« La Corse, île française de la Méditerranée, est la collectivité de Corse depuis 2018 ; elle est la patrie de Napoléon Bonaparte, né à Ajaccio en 1769. »", geo: "« კორსიკა, ხმელთაშუა ზღვის ფრანგული კუნძული, 2018 წლიდან კორსიკის კოლექტივია; ეს არის ნაპოლეონ ბონაპარტის სამშობლო, 1769 წელს აიაჩიოში დაბადებული. »" }
    },
    {
        id: "CSP-HGC-33",
        question: { fr: "Quelle chaîne de montagnes est située entre la France et l'Italie ?", geo: "რომელი მთის ქედი მდებარეობს საფრანგეთსა და იტალიას შორის?" },
        options: [
            { text: { fr: "Les Alpes", geo: "ალპები" }, isCorrect: true },
            { text: { fr: "Les Pyrénées (entre la France et l'Espagne)", geo: "პირინეები (საფრანგეთსა და ესპანეთს შორის)" }, isCorrect: false },
            { text: { fr: "Le Jura (entre la France et la Suisse)", geo: "ჟურა (საფრანგეთსა და შვეიცარიას შორის)" }, isCorrect: false },
            { text: { fr: "Les Vosges (en Alsace)", geo: "ვოჟი (ელზასში)" }, isCorrect: false }
        ],
        remark: { fr: "« Les Alpes, partagées entre la France, l'Italie et la Suisse, culminent au mont Blanc (4 808 m), le plus haut sommet de France et d'Europe occidentale. »", geo: "« ალპები, გაყოფილი საფრანგეთს, იტალიასა და შვეიცარიას შორის, მწვერვალს აღწევს მონ-ბლანზე (4808 მ), საფრანგეთისა და დასავლეთ ევროპის უმაღლეს მწვერვალზე. »" }
    },
    {
        id: "CSP-HGC-34",
        question: { fr: "Qui était Molière ?", geo: "ვინ იყო მოლიერი?" },
        options: [
            { text: { fr: "Un grand dramaturge et comédien français du XVIIe siècle (Le Misanthrope, Tartuffe)", geo: "XVII საუკუნის დიდი ფრანგი დრამატურგი და მსახიობი (მიზანთროპი, ტარტიუფი)" }, isCorrect: true },
            { text: { fr: "Un peintre français de la Renaissance", geo: "რენესანსის ფრანგი მხატვარი" }, isCorrect: false },
            { text: { fr: "Un philosophe des Lumières du XVIIIe siècle", geo: "XVIII საუკუნის განმანათლებლობის ფილოსოფოსი" }, isCorrect: false },
            { text: { fr: "Un romancier du XIXe siècle, auteur des Misérables", geo: "XIX საუკუნის რომანისტი, «უბედურთა» ავტორი" }, isCorrect: false }
        ],
        remark: { fr: "« Molière (1622-1673), dramaturge de génie protégé de Louis XIV, a écrit des comédies qui critiquent les mœurs de son époque et restent jouées dans le monde entier. »", geo: "« მოლიერი (1622-1673), ლუი XIV-ის მფარველობით მყოფი გენიალური დრამატურგი, წერდა კომედიებს, რომლებიც აკრიტიკებდნენ თავისი ეპოქის ზნეობას და მთელ მსოფლიოში იდგმება. »" }
    },
    {
        id: "CSP-HGC-35",
        question: { fr: "Qui était Charles Baudelaire ?", geo: "ვინ იყო შარლ ბოდლერი?" },
        options: [
            { text: { fr: "Un poète français du XIXe siècle, auteur des Fleurs du mal (1857)", geo: "XIX საუკუნის ფრანგი პოეტი, «ბოროტების ყვავილების» ავტორი (1857)" }, isCorrect: true },
            { text: { fr: "Un peintre impressionniste français du XIXe siècle", geo: "XIX საუკუნის ფრანგი იმპრესიონისტი მხატვარი" }, isCorrect: false },
            { text: { fr: "Un philosophe existentialiste du XXe siècle", geo: "XX საუკუნის ეგზისტენციალისტი ფილოსოფოსი" }, isCorrect: false },
            { text: { fr: "Un romancier du XIXe siècle, auteur du Père Goriot", geo: "XIX საუკუნის რომანისტი, «მამა გორიოს» ავტორი" }, isCorrect: false }
        ],
        remark: { fr: "« Les Fleurs du mal de Baudelaire (1857), poursuivies pour outrage aux bonnes mœurs, ont révolutionné la poésie française par leur exploration de la beauté et de la souffrance. »", geo: "« ბოდლერის «ბოროტების ყვავილები» (1857), სარჩელის საგანი კარგი ზნე-ჩვეულებების შეურაცხყოფისათვის, რევოლუცია მოახდინა ფრანგულ პოეზიაში სილამაზისა და ტანჯვის შესწავლით. »" }
    },
    {
        id: "CSP-HGC-36",
        question: { fr: "Qui était George Sand ?", geo: "ვინ იყო ჟორჟ სანდი?" },
        options: [
            { text: { fr: "Une romancière française du XIXe siècle, pionnière des droits des femmes (pseudonyme d'Amantine Dupin)", geo: "XIX საუკუნის ფრანგი რომანისტი, ქალთა უფლებების პიონერი (ამანტინ დიუპენის ფსევდონიმი)" }, isCorrect: true },
            { text: { fr: "Une peintre impressionniste française, élève de Monet", geo: "ფრანგი იმპრესიონისტი მხატვარი, მონეს მოწაფე" }, isCorrect: false },
            { text: { fr: "Une militante politique du XXe siècle, cofondatrice du parti socialiste", geo: "XX საუკუნის პოლიტიკური აქტივისტი, სოციალისტური პარტიის თანადამფუძნებელი" }, isCorrect: false },
            { text: { fr: "Une compositrice française, contemporaine de Chopin", geo: "ფრანგი კომპოზიტორი, შოპენის თანამედროვე" }, isCorrect: false }
        ],
        remark: { fr: "« George Sand (1804-1876), de son vrai nom Amantine Dupin, a défendu l'émancipation des femmes et des classes populaires à travers ses romans et ses engagements politiques. »", geo: "« ჟორჟ სანდი (1804-1876), ნამდვილი სახელით ამანტინ დიუპენი, იცავდა ქალებისა და სახალხო კლასების ემანსიპაციას რომანებისა და პოლიტიკური ჩართულობის მეშვეობით. »" }
    },
    {
        id: "CSP-HGC-37",
        question: { fr: "Qui était Simone de Beauvoir ?", geo: "ვინ იყო სიმონა დე ბოვუარი?" },
        options: [
            { text: { fr: "Une philosophe et écrivaine française du XXe siècle, figure du féminisme (Le Deuxième Sexe)", geo: "XX საუკუნის ფრანგი ფილოსოფოსი და მწერალი, ფემინიზმის ფიგურა (მეორე სქესი)" }, isCorrect: true },
            { text: { fr: "Une scientifique française, prix Nobel de physique", geo: "ფრანგი მეცნიერი, ნობელის პრემიის ლაურეატი ფიზიკაში" }, isCorrect: false },
            { text: { fr: "Une actrice française du cinéma de la Nouvelle Vague", geo: "ფრანგი მსახიობი «ახალი ტალღის» კინოს" }, isCorrect: false },
            { text: { fr: "Une politicienne française, première femme Première ministre", geo: "ფრანგი პოლიტიკოსი, პირველი ქალი პრემიერ-მინისტრი" }, isCorrect: false }
        ],
        remark: { fr: "« Le Deuxième Sexe de Simone de Beauvoir (1949) est une œuvre fondatrice du féminisme moderne qui analyse la condition de la femme dans la société patriarcale. »", geo: "« სიმონ დე ბოვუარის «მეორე სქესი» (1949) არის თანამედროვე ფემინიზმის დამფუძნებელი ნაშრომი, რომელიც პატრიარქალურ საზოგადოებაში ქალის მდგომარეობას აანალიზებს. »" }
    },
    {
        id: "CSP-HGC-38",
        question: { fr: "Qui était Albert Camus ?", geo: "ვინ იყო ალბერ კამიუ?" },
        options: [
            { text: { fr: "Un écrivain et philosophe français né en Algérie, prix Nobel de littérature 1957 (L'Étranger, La Peste)", geo: "ფრანგი მწერალი და ფილოსოფოსი, დაბადებული ალჟირში, 1957 წლის ნობელის პრემიის ლაურეატი ლიტერატურაში (უცხო, ჭირი)" }, isCorrect: true },
            { text: { fr: "Un peintre cubiste franco-espagnol du XXe siècle", geo: "XX საუკუნის ფრანკო-ესპანური კუბისტი მხატვარი" }, isCorrect: false },
            { text: { fr: "Un compositeur français de musique classique du XIXe siècle", geo: "XIX საუკუნის ფრანგი კლასიკური მუსიკის კომპოზიტორი" }, isCorrect: false },
            { text: { fr: "Un homme politique français, fondateur du Parti socialiste", geo: "ფრანგი პოლიტიკოსი, სოციალისტური პარტიის დამფუძნებელი" }, isCorrect: false }
        ],
        remark: { fr: "« Albert Camus (1913-1960), né à Mondovi en Algérie, a reçu le prix Nobel de littérature en 1957 pour une œuvre qui éclaire les problèmes posés à la conscience humaine. »", geo: "« ალბერ კამიუ (1913-1960), დაბადებული ალჟირის მონდოვიში, 1957 წელს მიიღო ნობელის პრემია ლიტერატურაში ნაშრომისათვის, რომელიც ადამიანის სინდისის წინაშე დასმულ პრობლემებს განანათლებს. »" }
    },
    {
        id: "CSP-HGC-39",
        question: { fr: "Qui était Paul Cézanne ?", geo: "ვინ იყო პოლ სეზანი?" },
        options: [
            { text: { fr: "Un peintre français post-impressionniste du XIXe siècle, précurseur du cubisme", geo: "XIX საუკუნის ფრანგი პოსტიმპრესიონისტი მხატვარი, კუბიზმის წინამორბედი" }, isCorrect: true },
            { text: { fr: "Un sculpteur français du XVIIIe siècle, auteur de la Vénus de Milo", geo: "XVIII საუკუნის ფრანგი მოქანდაკე, მილოსის ვენერას ავტორი" }, isCorrect: false },
            { text: { fr: "Un poète symboliste français du XIXe siècle", geo: "XIX საუკუნის ფრანგი სიმბოლისტი პოეტი" }, isCorrect: false },
            { text: { fr: "Un cinéaste français pionnier du 7e art", geo: "ფრანგი კინემატოგრაფისტი, მეშვიდე ხელოვნების პიონერი" }, isCorrect: false }
        ],
        remark: { fr: "« Paul Cézanne (1839-1906), peintre provençal fasciné par la montagne Sainte-Victoire, a influencé profondément Picasso et Braque, pères du cubisme. »", geo: "« პოლ სეზანი (1839-1906), პროვანსელი მხატვარი, სენ-ვიქტუარის მთით გატაცებული, ღრმად იმოქმედა პიკასო და ბრაკზე, კუბიზმის მამებზე. »" }
    },
    {
        id: "CSP-HGC-40",
        question: { fr: "Qui était Marc Chagall ?", geo: "ვინ იყო მარკ შაგალი?" },
        options: [
            { text: { fr: "Un peintre d'origine russe, naturalisé français, aux œuvres poétiques et colorées (1887-1985)", geo: "რუსული წარმოშობის მხატვარი, ნატურალიზებული ფრანგი, პოეტური და ფერადი ნამუშევრებით (1887-1985)" }, isCorrect: true },
            { text: { fr: "Un sculpteur espagnol du XXe siècle, contemporain de Picasso", geo: "XX საუკუნის ესპანელი მოქანდაკე, პიკასოს თანამედროვე" }, isCorrect: false },
            { text: { fr: "Un écrivain franco-belge, auteur de romans policiers", geo: "ფრანკო-ბელგიელი მწერალი, დეტექტიური რომანების ავტორი" }, isCorrect: false },
            { text: { fr: "Un musicien français du XXe siècle, compositeur de chansons réalistes", geo: "XX საუკუნის ფრანგი მუსიკოსი, რეალისტური სიმღერების კომპოზიტორი" }, isCorrect: false }
        ],
        remark: { fr: "« Marc Chagall (1887-1985), né en Biélorussie et naturalisé français, a enrichi l'art mondial d'un univers onirique mêlant judaïsme, folklore russe et modernisme. »", geo: "« მარკ შაგალი (1887-1985), დაბადებული ბელარუსიაში და ნატურალიზებული ფრანგი, მსოფლიო ხელოვნებას გაამდიდრა სიზმრისეული სამყაროთი, რომელშიც იუდაიზმი, რუსული ფოლკლორი და მოდერნიზმი ერწყმოდა. »" }
    },
    {
        id: "CSP-HGC-41",
        question: { fr: "Qui était Joséphine Baker ?", geo: "ვინ იყო ჟოზეფინ ბეიკერი?" },
        options: [
            { text: { fr: "Une chanteuse et danseuse américaine naturalisée française, résistante et militante pour les droits civiques, entrée au Panthéon en 2021", geo: "ამერიკელი მომღერალი და მოცეკვავე, ნატურალიზებული ფრანგი, წინააღმდეგობის მებრძოლი და სამოქალაქო უფლებების აქტივისტი, 2021 წელს პანთეონში შეყვანილი" }, isCorrect: true },
            { text: { fr: "Une actrice française du cinéma muet des années 1920", geo: "1920-იანი წლების ფრანგი მსახიობი მუნჯ კინოს" }, isCorrect: false },
            { text: { fr: "Une peintre française de l'école de Paris du début du XXe siècle", geo: "XX საუკუნის დასაწყისის პარიზის სკოლის ფრანგი მხატვარი" }, isCorrect: false },
            { text: { fr: "Une femme politique française, première sénatrice élue en France", geo: "ფრანგი პოლიტიკოსი, საფრანგეთში პირველი არჩეული ქალი სენატორი" }, isCorrect: false }
        ],
        remark: { fr: "« Joséphine Baker (1906-1975), première femme noire à entrer au Panthéon, est célébrée pour son talent artistique, son engagement dans la Résistance et sa lutte contre le racisme. »", geo: "« ჟოზეფინ ბეიქერი (1906-1975), პანთეონში შეყვანილი პირველი შავკანიანი ქალი, ცნობილია მხატვრული ნიჭით, წინააღმდეგობაში ჩართულობით და რასიზმის წინააღმდეგ ბრძოლით. »" }
    },
    {
        id: "CSP-HGC-42",
        question: { fr: "Qui était une chanteuse française célèbre ?", geo: "ვინ იყო ცნობილი ფრანგი მომღერალი?" },
        options: [
            { text: { fr: "Édith Piaf (1915-1963), icône de la chanson française (La Vie en rose, Non, je ne regrette rien)", geo: "ედიტ პიაფი (1915-1963), ფრანგული სიმღერის ხატი (La Vie en rose, Non, je ne regrette rien)" }, isCorrect: true },
            { text: { fr: "Coco Chanel, créatrice de mode internationale", geo: "კოკო შანელი, საერთაშორისო მოდის შემქმნელი" }, isCorrect: false },
            { text: { fr: "Simone Veil, femme politique et résistante", geo: "სიმონ ვეი, პოლიტიკოსი და წინააღმდეგობის მებრძოლი" }, isCorrect: false },
            { text: { fr: "Marie Curie, physicienne et chimiste, prix Nobel", geo: "მარი კიური, ფიზიკოსი და ქიმიკოსი, ნობელის პრემიის ლაურეატი" }, isCorrect: false }
        ],
        remark: { fr: "« Édith Piaf (1915-1963), surnommée « la Môme Piaf », est l'une des artistes françaises les plus célèbres dans le monde, symbole de la chanson réaliste française. »", geo: "« ედიტ პიაფი (1915-1963), მეტსახელად «la Môme Piaf», მსოფლიოში ყველაზე ცნობილი ფრანგი მხატვართაგანია, ფრანგული რეალისტური სიმღერის სიმბოლო. »" }
    },
    {
        id: "CSP-HGC-43",
        question: { fr: "Qu'est-ce que le Louvre ?", geo: "რა არის ლუვრი?" },
        options: [
            { text: { fr: "Un musée parisien, l'un des plus grands et des plus visités du monde, qui abrite la Joconde", geo: "პარიზული მუზეუმი, მსოფლიოში ერთ-ერთი ყველაზე დიდი და ვიზიტირებული, სადაც ინახება ჯოკონდა" }, isCorrect: true },
            { text: { fr: "Le palais officiel du président de la République française", geo: "საფრანგეთის რესპუბლიკის პრეზიდენტის ოფიციალური სასახლე" }, isCorrect: false },
            { text: { fr: "Une cathédrale gothique du XIIe siècle au cœur de Paris", geo: "XII საუკუნის გოთური კათედრალი პარიზის გულში" }, isCorrect: false },
            { text: { fr: "Un théâtre national subventionné par l'État français", geo: "ფრანგული სახელმწიფოს სუბსიდირებული ეროვნული თეატრი" }, isCorrect: false }
        ],
        remark: { fr: "« Le musée du Louvre, installé dans l'ancien palais royal, accueille plus de neuf millions de visiteurs par an et abrite environ 35 000 œuvres exposées. »", geo: "« ლუვრის მუზეუმი, ყოფილ სამეფო სასახლეში განლაგებული, წელიწადში ცხრა მილიონზე მეტ ვიზიტორს ღებულობს და დაახლოებით 35 000 გამოფენილ ნაწარმოებს ინახავს. »" }
    },
    {
        id: "CSP-HGC-44",
        question: { fr: "Qui était Jean de la Fontaine ?", geo: "ვინ იყო ჟან დე ლა ფონტენი?" },
        options: [
            { text: { fr: "Un écrivain français du XVIIe siècle, célèbre pour ses Fables mettant en scène des animaux", geo: "XVII საუკუნის ფრანგი მწერალი, ცნობილი ცხოველების შემსახავი იგავ-არაკებით" }, isCorrect: true },
            { text: { fr: "Un peintre de la cour de Versailles sous Louis XIV", geo: "ლუი XIV-ის ვერსალის კარის მხატვარი" }, isCorrect: false },
            { text: { fr: "Un philosophe des Lumières du XVIIIe siècle, ami de Voltaire", geo: "XVIII საუკუნის განმანათლებლობის ფილოსოფოსი, ვოლტერის მეგობარი" }, isCorrect: false },
            { text: { fr: "Un dramaturge romantique du XIXe siècle, contemporain de Victor Hugo", geo: "XIX საუკუნის რომანტიკული დრამატურგი, ვიქტორ ჰიუგოს თანამედროვე" }, isCorrect: false }
        ],
        remark: { fr: "« Les Fables de La Fontaine (1668-1694), inspirées d'Ésope et de Phèdre, utilisent des animaux pour critiquer la société humaine et sont apprises par cœur par des générations d'écoliers français. »", geo: "« ლა ფონტენის იგავ-არაკები (1668-1694), ეზოპოსა და ფედრეს შთაგონებული, ცხოველებს იყენებს ადამიანური საზოგადოების გასაკრიტიკებლად და თაობები ფრანგი სკოლის მოსწავლეები ზეპირად სწავლობს. »" }
    },
    {
        id: "CSP-HGC-45",
        question: { fr: "Quel écrivain est français ?", geo: "რომელი მწერალია ფრანგი?" },
        options: [
            { text: { fr: "Victor Hugo (Les Misérables, Notre-Dame de Paris)", geo: "ვიქტორ ჰიუგო (უბედურნი, პარიზის ღვთისმშობლის ტაძარი)" }, isCorrect: true },
            { text: { fr: "William Shakespeare (dramaturge anglais)", geo: "უილიამ შექსპირი (ინგლისელი დრამატურგი)" }, isCorrect: false },
            { text: { fr: "Lev Tolstoï (romancier russe)", geo: "ლევ ტოლსტოი (რუსი რომანისტი)" }, isCorrect: false },
            { text: { fr: "Miguel de Cervantes (romancier espagnol)", geo: "მიგელ დე სერვანტეს (ესპანელი რომანისტი)" }, isCorrect: false }
        ],
        remark: { fr: "« Victor Hugo (1802-1885), romancier, poète et homme politique français, est l'une des figures majeures du romantisme et l'auteur le plus lu de la littérature française. »", geo: "« ვიქტორ ჰიუგო (1802-1885), ფრანგი რომანისტი, პოეტი და პოლიტიკოსი, რომანტიზმის ერთ-ერთი მთავარი ფიგურა და ფრანგული ლიტერატურის ყველაზე წაკითხული ავტორია. »" }
    },
    {
        id: "CSP-HGC-46",
        question: { fr: "Dans quelle ville se trouve la tour Eiffel ?", geo: "რომელ ქალაქში მდებარეობს ეიფელის კოშკი?" },
        options: [
            { text: { fr: "À Paris", geo: "პარიზში" }, isCorrect: true },
            { text: { fr: "À Lyon", geo: "ლიონში" }, isCorrect: false },
            { text: { fr: "À Marseille", geo: "მარსელში" }, isCorrect: false },
            { text: { fr: "À Bordeaux", geo: "ბორდოში" }, isCorrect: false }
        ],
        remark: { fr: "« La tour Eiffel, construite par Gustave Eiffel pour l'Exposition universelle de 1889, est le monument le plus visité du monde avec plus de sept millions de visiteurs par an. »", geo: "« ეიფელის კოშკი, გუსტავ ეიფელის მიერ 1889 წლის მსოფლიო გამოფენისთვის აშენებული, მსოფლიოში ყველაზე ვიზიტირებული ძეგლია, წელიწადში შვიდ მილიონზე მეტი ვიზიტორით. »" }
    },
    {
        id: "CSP-HGC-47",
        question: { fr: "Quand célèbre-t-on Noël ?", geo: "როდის აღვნიშნავთ შობა-ახალ წელს?" },
        options: [
            { text: { fr: "Le 25 décembre", geo: "25 დეკემბერს" }, isCorrect: true },
            { text: { fr: "Le 24 décembre", geo: "24 დეკემბერს" }, isCorrect: false },
            { text: { fr: "Le 1er janvier", geo: "1 იანვარს" }, isCorrect: false },
            { text: { fr: "Le 6 janvier (Épiphanie)", geo: "6 იანვარს (ნათლისღება)" }, isCorrect: false }
        ],
        remark: { fr: "« Noël, fête chrétienne célébrant la naissance de Jésus-Christ, est également un jour férié en France le 25 décembre, marqué par des traditions familiales et des échanges de cadeaux. »", geo: "« შობა, ქრისტიანული დღესასწაული იესო ქრისტეს დაბადების სადღეგრძელოდ, ასევე დასვენების დღეა საფრანგეთში 25 დეკემბერს, ოჯახური ტრადიციებითა და საჩუქრების გაცვლით. »" }
    }
];
