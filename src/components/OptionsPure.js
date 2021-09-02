let pure = {
    default: {
        id : 1,
        name : "A110 Pure",
        price : 54700,
        color: "Opaque Glacier White paint",
        img: "/pure.png",
        description:"The Alpine A110 Pure is the version most faithful to the spirit of the legendary sedan that won the Monte Carlo Rally in 1973.",
        rims : "standard",
        saddlery : "Black leather and Dinamica bucket seats",
        equipments : {
            media : {
                category:"Media",
                perso: {
                    audio_standard : {
                        id : 3,
                        name : "Standard Sound System",
                        price : 0,
                        img : "configurateur/equipements/categories/media et navigation/audio-standard.jpg"
                    },
                }
            },
            comfort : {
                category:"Comfort",
                perso: {
                    mirror : {
                        id : 5,
                        name : "Electrochromic interior mirror and cruise control",
                        price : 0,
                        img : "configurateur/equipements/categories/confort/retro-int-electrochrome.jpg"
                    },
                    speed : {
                        id : 6,
                        name : "speed limiter",
                        price : 0,
                        img : "configurateur/equipements/categories/confort/regul-limit-vitesse.jpg"
                    },
                }
            },
            security : {
                category:"Security",
                perso: {
                    emergency : {
                        id :11,
                        name : "Emergency braking assistance",
                        price : 0,
                        img : "configurateur/equipements/categories/securite/aide-freinage-durgence.jpg"
                    },
                }
            },
            exterior_customization : {
                category:"Exterior customization",
                perso: {
                    grey : {
                        id : 14,
                        name : "Grey Anthracite brake calipers",
                        price : 0,
                        img : "configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg"
                    },
                }
            },
            interior_customization : {
                category:"Interior customization",
                perso: {
    
                    Harmonie_carbon_mat : {
                        id : 19,
                        name : "Harmonie carbon mat",
                        price : 0,
                        img : "configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg"
                    },
                }
            },
            driving : {
                category:"Driving",
                perso: {
                }
            },
            design : {
                category:"Design",
                perso: {
                }
            }
        },
        accessories : {

        },
    },
    
    color: {
        white: {
            name : "Opaque Glacier White paint",
            price: 0,
            img: "configurateur/couleurs/selection/blanc.jpg",
            rims: {
                1:{
                    img: "../../AlpineCars/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg",
                    name: "serac",
                    prix: 1000
                },
                2:{
                    img : "../../AlpineCars/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg",
                    name: "standard",
                    prix:0
                }
            }
        },
        black: {
            name : "Deep Black Metallic Tint",
            price: 840,
            img : "configurateur/couleurs/selection/noir.jpg",
            rims: {
                1:{
                    img: "../../AlpineCars/configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg",
                    name: "serac",
                    prix: 1000
                } ,
                2:{
                    img: "../../AlpineCars/configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg",
                    name: "standard",
                    prix:0
                }
            }
        },
        blue: {
            name : "Alpine Blue Special Tint",
            price: 1800,
            img : "configurateur/couleurs/selection/bleu.jpg",
            rims: {
                1:{
                    img :"../../AlpineCars/configurateur/jantes/vues/couleur-bleu_jante-serac (3).jpg",
                    name: "serac",
                    prix: 1000
                } ,
                2:{
                    img: "../../AlpineCars/configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg",
                    name: "standard",
                    prix:0
                }
            }
        },
    },
    rims : {
        standard : {
            name : "standard",
            price: 0,
            color : {
                
                white :{ 
                    name: "white",
                    img : "configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg"
                },
                black :{
                    name: "black",
                    img : "configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg"
                },
                blue :{
                    name: "blue",
                    img : "configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg"
                }
            }
        },
        serac : {
           name : "serac",
           price: 1000,
           color : {
                white :{
                    name: "white",
                    img : "configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg"
                },
                black :{
                    name: "black",
                    img : "configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg"
                },
                blue :{
                    name: "blue",
                    img : "configurateur/jantes/vues/couleur-bleu_jante-serac (3).jpg"
                }
           }
        },
    },

    saddlery: {

        dinamica: {
            name : "Black leather and Dinamica bucket seats",
            price: 0,
            img: "configurateur/interieurs/vues/cuir-noir_dinamica-1.jpg"

        },
        perforated: {
            name : "Comfort seats in black perforated leather",
            price: 800,
            img: "configurateur/interieurs/vues/cuir-noir_perfore-1.jpg"
        }

    },

    equipments : {
        design :{
            category:"Design",
            perso: {
                packH : {
                    id : 1,
                    name : "Pack heritage",
                    price : 180,
                    img : "configurateur/equipements/categories/design/pack-heritage.jpg"
                },
                
                footrest : {
                    id : 2,
                    name : "Aluminum passenger footrest",
                    price : 96,
                    img : "configurateur/equipements/categories/design/repose-pied-alu.jpg"
                }
            }
        },

        media : {
            category:"Media",
            perso: {
                audio_standard : {
                    id : 3,
                    name : "Standard Sound System",
                    price : 0,
                    img : "configurateur/equipements/categories/media et navigation/audio-standard.jpg"
                },
                audio : {
                    id : 3,
                    name : "Focal Sound System",
                    price : 600,
                    img : "configurateur/equipements/categories/media et navigation/audio-focal.jpg"
                },
                audioPremium : {
                    id : 3,
                    name : "Premium Focal Sound System",
                    price : 1200,
                    img : "configurateur/equipements/categories/media et navigation/audio-premium.jpg"
                },
                telemetrics : {
                    id : 4,
                    name : "Alpine Telemetrics",
                    price : 204,
                    img : "configurateur/equipements/categories/media et navigation/alpine-metrics.jpg"
                    
                }
            }
        },

        comfort : {
            category:"Comfort",
            perso: {
                mirror : {
                    id : 5,
                    name : "Electrochromic interior mirror and cruise control",
                    price : 0,
                    img : "configurateur/equipements/categories/confort/retro-int-electrochrome.jpg"
                },
                speed : {
                    id : 6,
                    name : "speed limiter",
                    price : 0,
                    img : "configurateur/equipements/categories/confort/regul-limit-vitesse.jpg"
                },
                foldingEx : {
                    id : 7,
                    name : "Electric folding heated exterior mirrors",
                    price : 504,
                    img : "configurateur/equipements/categories/confort/retro-ext-chaffant.jpg"
                },
                storage: {
                    id : 8,
                    name : "Pack Storage",
                    price : 504,
                    img : "configurateur/equipements/categories/confort/pack-rangement.jpg"
                },
            }
        },

        driving : {
            category:"Driving",
            perso: {
                parkingBack : {
                    id : 9,
                    name : "Back parking assistance",
                    price : 420,
                    img : "configurateur/equipements/categories/conduite/aide-stationnement-ar.jpg"
                },
                parkingFrontBack: {
                    id : 9,
                    name : "Front & back parking assistance",
                    price : 750,
                    img : "configurateur/equipements/categories/conduite/aide-stationnement-av-ar.jpg"
                },
                parkingFrontBackVideo: {
                    id : 9,
                    name : "Front and back parking assistance and rear view camera",
                    price : 1200,
                    img : "configurateur/equipements/categories/conduite/camera-recul.jpg"
                },
                exhaust : {
                    id :10,
                    name : "Active Sport exhaust system",
                    price : 1500,
                    img : "configurateur/equipements/categories/conduite/echappement-sport.jpg"
                }
            }
        },

        security : {
            category:"Security",
            perso: {
                emergency : {
                    id :11,
                    name : "Emergency braking assistance",
                    price : 0,
                    img : "configurateur/equipements/categories/securite/aide-freinage-durgence.jpg"
                },
                airbags : {
                    id : 12,
                    name : "Driver and passenger front airbags",
                    price : 0,
                    img : "configurateur/equipements/categories/securite/airbag.jpg"
                },
                brake : {
                    id : 13,
                    name : "hight-Perf 320mm braking system",
                    price : 1000,
                    img : "configurateur/equipements/categories/securite/freinage-haute-perf.jpg"
                },
            }
        },
        
        exterior_customization : {
            category:"Exterior customization",
            perso: {
                grey : {
                    id : 14,
                    name : "Grey Anthracite brake calipers",
                    price : 0,
                    img : "configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg"
                },
                blue : {
                    id : 14,
                    name : "Blue brake calipers",
                    price : 384,
                    img : "configurateur/equipements/categories/personnalisation exterieure/etrier-bleu.jpg"
                },
                logo : {
                    id : 15,
                    name : "Alpine logo on front fenders",
                    price : 120,
                    img : "configurateur/equipements/categories/personnalisation exterieure/logo-alpine.jpg"
                },
            }
        },

        interior_customization : {
            category:"Interior customization",
            perso: {

                Harmonie_carbon_mat : {
                    id : 19,
                    name : "Harmonie carbon mat",
                    price : 0,
                    img : "configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg"
                },
                aluminium : {
                    id : 20,
                    name : "Aluminum crankset",
                    price : 120,
                    img : "configurateur/equipements/categories/personnalisation interieure/pedal-alu.jpg"
                },
                logo : {
                    id : 21,
                    name : "Logo in the center of the steering wheel in Alpine Blue",
                    price : 84,
                    img : "configurateur/equipements/categories/personnalisation interieure/logo-volant.jpg"
                },
                heated : {
                    id : 22,
                    name : "heated seats",
                    price : 400,
                    img : "configurateur/equipements/categories/personnalisation interieure/siege-chauffant.jpg"
                }
            }
        },
    },

    accessories : {

        transport_protection : {
            extinguisher : {
                id : 1,
                name : "Fire extinguisher 1kg with pressure gauge",
                price : 22,
                img : "configurateur/accessoires/transport et protection/extincteur.jpg"
            },
            chain : {
                id : 2,
                name : "Premium Grip Snow Chains",
                price : 336,
                img : "configurateur/accessoires/transport et protection/chaaine-neige.jpg"
            },
            alarme : {
                id : 3,
                name : "Alarm",
                price : 543,
                img : "configurateur/accessoires/transport et protection/alarme.jpg"
            },
            protection : {
                id : 4,
                name : "OBD plug protection",
                price : 99,
                img : "configurateur/accessoires/transport et protection/protection-obd.jpg"
            },
            safety : {
                id : 5,
                name : "Safety kit",
                price : 20,
                img : "configurateur/accessoires/transport et protection/kit-securite.jpg"
            },
            fix : {
                id : 6,
                name : "Fire extinguisher attachment",
                price : 72,
                img : "configurateur/accessoires/transport et protection/fixation-extincteur.jpg"
            }
        },

        multimedia : {
            camera : {
                id : 7,
                name : "Sport camera holder",
                price : 89,
                img : "configurateur/accessoires/multimedia/support-camera.jpg"
            },
            phone : {
                id : 8,
                name : "Magnetic smartphone holder - Dashboard mounting",
                price : 21,
                img : "configurateur/accessoires/multimedia/support-smartphone.jpg"
            }
        },

        inside : {
            carpet : {
                id : 9,
                name : "Trunk carpet",
                price : 83,
                img : "configurateur/accessoires/interieur/tapis-coffre.jpg"
            },
            storage : {
                id : 10,
                name : "Storage net - Horizontal",
                price : 59,
                img : "configurateur/accessoires/interieur/filet-rangement.jpg"
            }
        },

        outside : {
            cabochons : {
                id : 11,
                name : "Alpine Cabochons - Metallic",
                price : 24,
                img : "configurateur/accessoires/exterieur/cabochons-metal.jpg"
            },
            cover : {
                id : 12,
                name : "Alpine protective cover",
                price : 216,
                img : "configurateur/accessoires/exterieur/housse.jpg"
            },
            locks : {
                id : 13,
                name : "Rim locks - Black",
                price : 51,
                img : "configurateur/accessoires/exterieur/antivol-jantes.jpg"
            }
        },

        garage : {
            battery : {
                id : 14,
                name : "Battery charger",
                price : 240,
                img : "configurateur/accessoires/garage/chargeur-batterie.jpg"
            },
            storage : {
                id : 15,
                name : "Alpine Tool Kit",
                price : 398,
                img : "configurateur/accessoires/garage/kit-outils.jpg"
            }
        },
    }
}

export default pure;