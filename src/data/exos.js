export const exercices = [

    // =========================================================================
    // 🥚 NIVEAU 1 : VARIABLES & BASES (1-12)
    // =========================================================================
    {
        titre: "Hello World",
        consigne: "Le classique ! Créez une variable <code>message</code> contenant le texte 'Bonjour Python' et affichez-la.",
        code: "message = \"...\"",
        validation: { type: "output_includes", values: ["Bonjour Python"] }
    },
    {
        titre: "La Calculatrice",
        consigne: "Déclarez <code>a = 10</code> et <code>b = 5</code>. Calculez et affichez leur somme et leur produit sur deux lignes différentes.",
        code: "# votre code ici",
        validation: { type: "output_list", values: ["15", "50"] }
    },
    {
        titre: "Echange de variables",
        consigne: "Écrire une fonction <code>echange(a,b)</code> qui retourne les deux valeurs inversées (b, a).",
        code: "# votre code ici",
        validation: { type: "function", tests: ["assert echange(10, 20) == (20, 10)", "assert echange('A', 'B') == ('B', 'A')"] }
    },
    {
        titre: "Moyenne de l'élève",
        consigne: "Un élève a eu 12, 15 et 17. Calculez la moyenne dans une variable <code>m</code> et affichez-la.",
        code: "n1 = 12\nn2 = 15\nn3 = 17\nm = ...\nprint(m)",
        validation: { type: "function", tests: ["assert abs(m - 14.66) < 0.1"] }
    },
    {
        titre: "Géométrie : Le Cercle",
        consigne: "Calculez l'aire d'un cercle de rayon 10. Formule : $A = \\pi \\times r^2$. Utilisez <code>math.pi</code>.",
        code: "import math\nrayon = 10\naire = ...\nprint(aire)",
        validation: { type: "function", tests: ["assert abs(aire - 314.15) < 0.1"] }
    },
    {
        titre: "Conversion Température",
        consigne: "Fonction <code>celsius_vers_fahrenheit(c)</code>. Formule : $(c \\times 1.8) + 32$.",
        code: "def celsius_vers_fahrenheit(c):\n    return 0",
        validation: { type: "function", tests: ["assert celsius_vers_fahrenheit(0) == 32", "assert celsius_vers_fahrenheit(100) == 212"] }
    },
    {
        titre: "Pythagore",
        consigne: "Calculez l'hypoténuse d'un triangle (a=3, b=4). Utilisez <code>math.sqrt()</code>.",
        code: "import math\na = 3\nb = 4\nhyp = ... \nprint(hyp)",
        validation: { type: "function", tests: ["assert hyp == 5.0"] }
    },
    {
        titre: "Prix TTC",
        consigne: "Fonction <code>prix_ttc(ht, tva)</code>. Retournez le prix TTC arrondi à 2 décimales avec <code>round(val, 2)</code>.",
        code: "def prix_ttc(ht, tva):\n    # Formule : ht * (1 + tva/100)\n    return 0",
        validation: { type: "function", tests: ["assert prix_ttc(100, 20) == 120.0", "assert prix_ttc(10, 5.5) == 10.55"] }
    },
    {
        titre: "Secondes en Heures",
        consigne: "Fonction <code>conversion(sec)</code> retournant un tuple (h, m, s). Utilisez <code>//</code> et <code>%</code>.",
        code: "# votre code ici",
        validation: { type: "function", tests: ["assert conversion(3661) == (1, 1, 1)", "assert conversion(7200) == (2, 0, 0)"] }
    },
    {
        titre: "Volume de la Terre",
        consigne: "Rayon = 6371 km. Calculez le volume en milliards de km³. Arrondissez à l'entier.",
        code: "import math\n# votre code ici",
        validation: { type: "output_includes", values: ["1083"] }
    },
    {
        titre: "String Extraction",
        consigne: "Affichez la première et la dernière lettre du mot 'Python' en utilisant les indices.",
        code: "mot = \"Python\"\nfirst = ...\nlast = ...\nprint(first + last)",
        validation: { type: "output_includes", values: ["Pn"] }
    },
    {
        titre: "Concaténation",
        consigne: "Créez une fonction <code>bonjour(nom)</code> qui retourne 'Bonjour [nom] !'.",
        code: "def bonjour(nom):\n    return \"...\"",
        validation: { type: "function", tests: ["assert bonjour('Thomas') == 'Bonjour Thomas !'"] }
    },

    // =========================================================================
    // 🐸 NIVEAU 2 : CONDITIONS & LOGIQUE (13-24)
    // =========================================================================
    {
        titre: "Majeur ou Mineur",
        consigne: "Fonction <code>est_majeur(age)</code> retournant True si age >= 18, sinon False.",
        code: "def est_majeur(age):\n    return False",
        validation: { type: "function", tests: ["assert est_majeur(18) == True", "assert est_majeur(15) == False"] }
    },
    {
        titre: "Positif ou Négatif",
        consigne: "Fonction <code>verifier_signe(n)</code> retournant 'Positif', 'Négatif' ou 'Nul'.",
        code: "def verifier_signe(n):\n    if n > 0:\n        return 'Positif'\n    # Suite...",
        validation: { type: "function", tests: ["assert verifier_signe(10) == 'Positif'", "assert verifier_signe(-5) == 'Négatif'", "assert verifier_signe(0) == 'Nul'"] }
    },
    {
        titre: "Pair ou Impair",
        consigne: "Fonction <code>est_pair(n)</code> retournant True si n est pair (modulo 2).",
        code: "def est_pair(n):\n    # Utilisez %\n    return False",
        validation: { type: "function", tests: ["assert est_pair(10) == True", "assert est_pair(7) == False"] }
    },
    {
        titre: "Le Maximum",
        consigne: "Fonction <code>max_trois(a, b, c)</code> retournant le plus grand nombre sans utiliser <code>max()</code>.",
        code: "def max_trois(a, b, c):\n    if a >= b and a >= c:\n        return a\n    # Suite...",
        validation: { type: "function", tests: ["assert max_trois(1, 5, 2) == 5", "assert max_trois(10, 10, 3) == 10"] }
    },
    {
        titre: "Tarif Cinéma",
        consigne: "-12 ans: 5€, -18 ans: 8€, sinon 12€. Fonction <code>tarif(age)</code>.",
        code: "def tarif(age):\n    return 0",
        validation: { type: "function", tests: ["assert tarif(10) == 5", "assert tarif(15) == 8", "assert tarif(20) == 12"] }
    },
    {
        titre: "Année Bissextile",
        consigne: "Une année est bissextile si divisible par 4, sauf si divisible par 100 mais pas par 400.",
        code: "def est_bissextile(annee):\n    return False",
        validation: { type: "function", tests: ["assert est_bissextile(2020) == True", "assert est_bissextile(1900) == False", "assert est_bissextile(2000) == True"] }
    },
    {
        titre: "Mention Bac",
        consigne: "<10 Recalé, 10-12 Passable, 12-14 AB, 14-16 B, >16 TB.",
        code: "def mention(note):\n    if note < 10: return 'Recalé'\n    # ...",
        validation: { type: "function", tests: ["assert mention(15) == 'B'", "assert mention(10) == 'Passable'"] }
    },
    {
        titre: "Triangle",
        consigne: "Fonction <code>type_triangle(a, b, c)</code>. Retourne 'Equilatéral', 'Isocèle' ou 'Quelconque'. Vérifiez d'abord si le triangle est possible !",
        code: "def type_triangle(a, b, c):\n    if a > b+c or b > a+c or c > a+b:\n        return 'Impossible'\n    pass",
        validation: { type: "function", tests: ["assert type_triangle(5,5,5) == 'Equilatéral'", "assert type_triangle(5,5,2) == 'Isocèle'"] }
    },
    {
        titre: "Login Simple",
        consigne: "Fonction <code>login(user, pwd)</code>. Doit retourner True si user='admin' et pwd='1234'.",
        code: "def login(user, pwd):\n    return False",
        validation: { type: "function", tests: ["assert login('admin', '1234') == True", "assert login('admin', '0000') == False"] }
    },
    {
        titre: "Pierre-Feuille-Ciseaux",
        consigne: "Fonction <code>pfc(j1, j2)</code>. Retourne 'J1', 'J2' ou 'Nul'. Valeurs possibles : 'P', 'F', 'C'.",
        code: "def pfc(j1, j2):\n    if j1 == j2: return 'Nul'\n    # Logique...",
        validation: { type: "function", tests: ["assert pfc('P', 'C') == 'J1'", "assert pfc('P', 'F') == 'J2'"] }
    },
    {
        titre: "Distributeur Billet",
        consigne: "Algorithme glouton. Retourner le nombre de billets de 50, 20 et 10 pour un montant donné.",
        code: "def distributeur(montant):\n    # nb50 = ...\n    return (0, 0, 0)",
        validation: { type: "function", tests: ["assert distributeur(130) == (2, 1, 1)", "assert distributeur(60) == (1, 0, 1)"] }
    },
    {
        titre: "Signe du Produit",
        consigne: "Devinez le signe de a*b SANS calculer le produit. Retourne 'Positif', 'Négatif' ou 'Nul'.",
        code: "def signe_produit(a, b):\n    # Logique pure\n    pass",
        validation: { type: "function", tests: ["assert signe_produit(-2, -5) == 'Positif'", "assert signe_produit(-2, 5) == 'Négatif'"] }
    },

    // =========================================================================
    // 🗿 NIVEAU 3 : BOUCLES (25-36)
    // =========================================================================
    {
        titre: "Compter jusqu'à 10",
        consigne: "Affichez les nombres de 1 à 10 avec une boucle <code>for</code>.",
        code: "for i in range(...):\n    print(i)",
        validation: { type: "output_list", values: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] }
    },
    {
        titre: "Table de 7",
        consigne: "Affichez la table de 7 : '7 x 1 = 7' jusqu'à 10.",
        code: "for i in range(1, 11):\n    print(f\"7 x {i} = ...\")",
        validation: { type: "output_includes", values: ["7 x 1 = 7", "7 x 10 = 70"] }
    },
    {
        titre: "Somme des entiers",
        consigne: "Fonction <code>somme(n)</code> calculant 1 + 2 + ... + n avec une boucle.",
        code: "def somme(n):\n    total = 0\n    for i in range(1, n+1):\n        total += i\n    return total",
        validation: { type: "function", tests: ["assert somme(5) == 15", "assert somme(100) == 5050"] }
    },
    {
        titre: "Factorielle",
        consigne: "Fonction <code>factorielle(n)</code> calculant n! (1*2*...*n).",
        code: "def factorielle(n):\n    res = 1\n    # Boucle...\n    return res",
        validation: { type: "function", tests: ["assert factorielle(5) == 120", "assert factorielle(0) == 1"] }
    },
    {
        titre: "Compte à rebours",
        consigne: "Utilisez une boucle <code>while</code> pour afficher de 5 à 1, puis 'Bonne année !'.",
        code: "n = 5\nwhile n > 0:\n    # print...\n    # n = n - 1\nprint('Bonne année !')",
        validation: { type: "output_list", values: ["5", "4", "3", "2", "1", "Bonne année !"] }
    },
    {
        titre: "Puissance de 2",
        consigne: "Trouver la plus petite puissance de 2 supérieure à 1000 avec un <code>while</code>.",
        code: "def sup_mille():\n    n = 1\n    while ...:\n        n = n * 2\n    return n",
        validation: { type: "function", tests: ["assert sup_mille() == 1024"] }
    },
    {
        titre: "Compter les voyelles",
        consigne: "Comptez le nombre de voyelles dans une phrase.",
        code: "def nb_voyelles(txt):\n    count = 0\n    voyelles = 'aeiouy'\n    for lettre in txt:\n        if lettre in voyelles:\n             count += 1\n    return count",
        validation: { type: "function", tests: ["assert nb_voyelles('python') == 2", "assert nb_voyelles('aaa') == 3"] }
    },
    {
        titre: "Somme des carrés",
        consigne: "Calculez la somme des carrés de 1 à n (1² + 2² + ...).",
        code: "def somme_carres(n):\n    return 0",
        validation: { type: "function", tests: ["assert somme_carres(3) == 14"] } // 1+4+9
    },
    {
        titre: "Nombre Premier",
        consigne: "Fonction <code>est_premier(n)</code>. Retourne True si n n'a aucun diviseur entre 2 et n-1.",
        code: "def est_premier(n):\n    if n < 2: return False\n    for i in range(2, n):\n        if n % i == 0:\n            return False\n    return True",
        validation: { type: "function", tests: ["assert est_premier(13) == True", "assert est_premier(15) == False"] }
    },
    {
        titre: "Pyramide",
        consigne: "Affichez une pyramide de '*' de hauteur n. Ex pour n=3 :\n*\n**\n***",
        code: "n = 5\nfor i in range(1, n+1):\n    print('*' * i)",
        validation: { type: "output_includes", values: ["*", "**", "***", "*****"] }
    },
    {
        titre: "Syracuse",
        consigne: "Affichez les termes de la suite de Syracuse partant de 6 tant que u != 1.",
        code: "u = 6\nwhile u != 1:\n    print(int(u))\n    if u % 2 == 0: u = u / 2\n    else: u = 3*u + 1",
        validation: { type: "output_includes", values: ["6", "3", "10", "5", "16", "8", "4", "2"] }
    },
    {
        titre: "Devinette (Bot)",
        consigne: "Le nombre secret est 42. Faites une boucle qui teste 1, 2, 3... jusqu'à trouver 42 et l'afficher.",
        code: "secret = 42\ni = 1\nwhile ...:\n    i += 1\nprint(f'Trouvé : {i}')",
        validation: { type: "output_includes", values: ["Trouvé : 42"] }
    },

    // =========================================================================
    // 👑 NIVEAU 4 : LISTES & CHAINES (37-48)
    // =========================================================================
    {
        titre: "Liste de Courses",
        consigne: "Créez une liste contenant 'Pomme', 'Poire', 'Banane'. Affichez le 2ème élément.",
        code: "fruits = ['Pomme', 'Poire', 'Banane']\nprint(fruits[...])",
        validation: { type: "output_includes", values: ["Poire"] }
    },
    {
        titre: "Somme Liste",
        consigne: "Fonction <code>somme_liste(L)</code> qui retourne la somme des éléments d'une liste.",
        code: "def somme_liste(L):\n    s = 0\n    for x in L:\n        s += x\n    return s",
        validation: { type: "function", tests: ["assert somme_liste([10, 10, 5]) == 25"] }
    },
    {
        titre: "Filtrer les Positifs",
        consigne: "Fonction qui retourne une nouvelle liste ne contenant que les nombres positifs.",
        code: "def garder_positifs(L):\n    res = []\n    for x in L:\n        # if ... append\n    return res",
        validation: { type: "function", tests: ["assert garder_positifs([-1, 2, -3, 4]) == [2, 4]"] }
    },
    {
        titre: "Le plus grand",
        consigne: "Trouvez le maximum d'une liste sans <code>max()</code>.",
        code: "def maximum(L):\n    m = L[0]\n    for x in L:\n        if x > m: m = x\n    return m",
        validation: { type: "function", tests: ["assert maximum([1, 10, 5]) == 10"] }
    },
    {
        titre: "Inverser une chaîne",
        consigne: "Fonction <code>miroir(txt)</code> qui retourne le texte à l'envers.",
        code: "def miroir(txt):\n    return txt[::-1]",
        validation: { type: "function", tests: ["assert miroir('Python') == 'nohtyP'"] }
    },
    {
        titre: "Palindrome",
        consigne: "Un mot qui se lit pareil dans les deux sens (ex: 'radar').",
        code: "def est_palindrome(txt):\n    return txt == txt[::-1]",
        validation: { type: "function", tests: ["assert est_palindrome('kayak') == True", "assert est_palindrome('test') == False"] }
    },
    {
        titre: "Index d'un élément",
        consigne: "Trouver l'index de la valeur 'cible' dans la liste. Retourner -1 si absent.",
        code: "def trouver_index(L, cible):\n    for i in range(len(L)):\n        if L[i] == cible: return i\n    return -1",
        validation: { type: "function", tests: ["assert trouver_index(['a','b'], 'b') == 1"] }
    },
    {
        titre: "Compréhension",
        consigne: "Créez une liste des carrés de 0 à 9 en une seule ligne : [0, 1, 4, ..., 81].",
        code: "carres = [x**2 for x in range(10)]\nprint(carres)",
        validation: { type: "output_includes", values: ["[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]"] }
    },
    {
        titre: "Anagrammes",
        consigne: "Deux mots sont anagrammes s'ils ont les mêmes lettres. Utilisez <code>sorted()</code>.",
        code: "def anagrammes(a, b):\n    return sorted(a) == sorted(b)",
        validation: { type: "function", tests: ["assert anagrammes('chien', 'niche') == True"] }
    },
    {
        titre: "Compter les mots",
        consigne: "Retourner le nombre de mots dans une phrase (séparés par des espaces).",
        code: "def nb_mots(phrase):\n    mots = phrase.split(' ')\n    return len(mots)",
        validation: { type: "function", tests: ["assert nb_mots('Bonjour tout le monde') == 4"] }
    },
    {
        titre: "Tri manuel",
        consigne: "Triez une liste [5, 1, 3] sans utiliser <code>sort()</code> (Tri à bulles simple).",
        code: "L = [5, 1, 3]\n# Algorithme de tri à faire\nL.sort() # Triche autorisée pour cet exo d'initiation :)\nprint(L)",
        validation: { type: "output_includes", values: ["[1, 3, 5]"] }
    },
    {
        titre: "Nombres Premiers (Liste)",
        consigne: "Retournez la liste de tous les nombres premiers jusqu'à 50.",
        code: "def liste_premiers(n):\n    res = []\n    # Réutilisez votre logique est_premier\n    return res",
        validation: { type: "function", tests: ["assert 47 in liste_premiers(50)", "assert 4 not in liste_premiers(50)"] }
    },

    // =========================================================================
    // 👽 NIVEAU 5 : EXPERT & ALGOS (49-60)
    // =========================================================================
    {
        titre: "Fibonacci",
        consigne: "Calculer le n-ième terme de la suite : u0=0, u1=1, un = un-1 + un-2.",
        code: "def fibo(n):\n    a, b = 0, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a",
        validation: { type: "function", tests: ["assert fibo(10) == 55"] }
    },
    {
        titre: "PGCD (Euclide)",
        consigne: "Trouver le Plus Grand Commun Diviseur de a et b.",
        code: "def pgcd(a, b):\n    while b > 0:\n        a, b = b, a % b\n    return a",
        validation: { type: "function", tests: ["assert pgcd(48, 18) == 6"] }
    },
    {
        titre: "Nombre Parfait",
        consigne: "Un nombre est parfait s'il est égal à la somme de ses diviseurs (hors lui-même).",
        code: "def est_parfait(n):\n    s = 0\n    for i in range(1, n):\n        if n % i == 0: s += i\n    return s == n",
        validation: { type: "function", tests: ["assert est_parfait(6) == True", "assert est_parfait(28) == True", "assert est_parfait(10) == False"] }
    },
    {
        titre: "Nombre d'Armstrong",
        consigne: "Ex: 153 = 1³ + 5³ + 3³. Vérifiez si un nombre est Armstrong.",
        code: "def est_armstrong(n):\n    s = 0\n    temp = n\n    while temp > 0:\n        chiffre = temp % 10\n        s += chiffre ** 3\n        temp //= 10\n    return s == n",
        validation: { type: "function", tests: ["assert est_armstrong(153) == True"] }
    },
    {
        titre: "Dichotomie",
        consigne: "Trouver une valeur x dans une liste triée en coupant en deux à chaque fois.",
        code: "def recherche_dicho(L, cible):\n    debut = 0\n    fin = len(L) - 1\n    while debut <= fin:\n        milieu = (debut + fin) // 2\n        if L[milieu] == cible: return milieu\n        elif L[milieu] < cible: debut = milieu + 1\n        else: fin = milieu - 1\n    return -1",
        validation: { type: "function", tests: ["assert recherche_dicho([1,3,5,7,9], 7) == 3"] }
    },
    {
        titre: "Loto (Random)",
        consigne: "Générez 5 nombres uniques entre 1 et 49.",
        code: "import random\ndef loto():\n    return random.sample(range(1, 50), 5)",
        validation: { type: "function", tests: ["assert len(set(loto())) == 5"] }
    },
    {
        titre: "Simulation Pile/Face",
        consigne: "Lancez 1000 fois une pièce. Vérifiez si on est proche de 50/50.",
        code: "import random\ndef simulation():\n    pile = 0\n    for i in range(1000):\n        if random.random() < 0.5: pile += 1\n    return pile",
        validation: { type: "function", tests: ["assert 400 < simulation() < 600"] }
    },
    {
        titre: "Distance 2D",
        consigne: "Calculez la distance entre deux points (x1, y1) et (x2, y2).",
        code: "import math\ndef distance(x1, y1, x2, y2):\n    return math.sqrt((x2-x1)**2 + (y2-y1)**2)",
        validation: { type: "function", tests: ["assert distance(0,0, 3,4) == 5.0"] }
    },
    {
        titre: "Nombres Amis",
        consigne: "Deux nombres sont amis si la somme des diviseurs de l'un vaut l'autre.",
        code: "def somme_div(n):\n    return sum([i for i in range(1,n) if n%i==0])\n\ndef sont_amis(a, b):\n    return somme_div(a) == b and somme_div(b) == a",
        validation: { type: "function", tests: ["assert sont_amis(220, 284) == True"] }
    },
    {
        titre: "Cryptage César",
        consigne: "Décalez chaque lettre d'un mot de +1 (a->b, b->c...).",
        code: "def cesar(mot):\n    res = ''\n    for c in mot:\n        res += chr(ord(c) + 1)\n    return res",
        validation: { type: "function", tests: ["assert cesar('abc') == 'bcd'"] }
    },
    {
        titre: "Matrice Identité",
        consigne: "Générez une liste de listes représentant une matrice identité de taille n.",
        code: "def identite(n):\n    return [[1 if i==j else 0 for j in range(n)] for i in range(n)]",
        validation: { type: "function", tests: ["assert identite(2) == [[1,0],[0,1]]"] }
    },
    {
        titre: "Le Boss Final",
        consigne: "Vérifiez si une grille de Sudoku 9x9 est valide (juste les lignes).",
        code: "def verif_lignes(grille):\n    for ligne in grille:\n        if len(set(ligne)) != 9: return False\n    return True",
        validation: { type: "function", tests: ["assert verif_lignes([[1,2,3,4,5,6,7,8,9]]*9) == True"] }
    }
];