import homeal from '../img/mockuphomeal.svg'
import comfy from '../img/mockupcomfy.svg'
import github from '../img/mockupgithub.svg'
import cerisiers from '../img/mockupcerisiers.svg'

export const projects = [
  {
    nom: "homeal",
    desc: `Ce site web a été réalisé grâce à une API web qui permet de récupérer une liste de recette. Le concept est de proposer une liste de recettes consultable à tout moment mais aussi de pouvoir commander et se faire livrer les ingrédients nécessaires à domicile.
Le site web est un prototype d’exposition.`,
    mockup: homeal,
    link: "https://homeal.netlify.app",
  },
  {
    nom: "comfy sloth",
    desc: `Ce site web a été réalisé grâce à une API web qui permet de récupérer une liste de différents produits pour meubler votre logement. Chaque produit est proposé avec différentes couleurs et avec un stock limité. Il est possible d’ajouter des éléments au panier et de procéder au paiement.
Le site web est un prototype d’exposition.`,
    mockup: comfy,
    link: "https://tonymascate-comfy-store.netlify.app",
  },
  {
    nom: "github user",
    desc: `Ce site web a pour but de rechercher un utilisateur de Github via l’API du site. Une fois l’utilisateur trouvé, on peut consulter différentes informations le concernant comme les langages de programmations utilisés, le nombre d’abonnés, le nombe de projets...`,
    mockup: github,
    link: "https://tonymascate-search-github-user.netlify.app",
  },
  {
    nom: "sous les cerisiers",
    desc: `Ce site web a été réalisé pour une professionnelle en hypnothérapie. Il s’agit d’un site vitrine pour exposer sa profession, ses tarifs, des informations sur l’hypnose thérapeutique. Il y a également un formulaire de contact pour prendre des rendez-vous. Celui-ci a été réalisé suite à la mise en place d’un cahier des charges avec la cliente.`,
    mockup: cerisiers,
    link: "https://hypnosesouslescerisiers.fr",
  },
];
