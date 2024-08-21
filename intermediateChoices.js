export const choices = {
    magicLevel: {
        none: {
            hook: "I don't want to use Magic", 
            options: ["Rogue", "Monk", "Barbarian", "Fighter"],
            details: {
                combat: {
                    defense: {
                        avoidDamage: {
                            hook: "I want to be able to avoid being hit",
                            options: ["Fighter", "Rogue", "Monk"]
                        },
                        absorbDamage: {
                            hook: "I want to be able to absorb lots of damage",
                            options: ["Barbarian"]
                        }
                    },
                    offense: {
                        burstDamage: {
                            hook: "I want to be able to do a large amount of damage in a single blow",
                            options: ["Rogue"]
                        },
                        repeatDamage: {
                            hook: "I want to be able to hit one or more opponents over and over, accruing large amounts of damage in the process",
                            options: ["Monk"]
                        },
                        consistentDamange: {
                            hook: "I want to always be able to deal damage consistently every turn, no matter how long the adventure goes",
                            options: ["Fighter", "Barbarian"]
                        }
                    }
                },
                utility: {
                    physicality: {
                        hook: "I want to be good at moving, breaking and throwing things",
                        options: ["Barbarian", "Fighter"]
                    },
                    fineSkills: {
                        hook: "I want to be good at more specific skills like lockpicking, sneaking, or diplomacy",
                        options: ["Rogue"]
                    }
                }
            }
        },
        some: {
            hook: "I want to use some magic", 
            options: ["Bard", "Paladin", "Ranger", "Cleric", "Fighter", "Druid"],
            details: {
                combat: {
                    defense: {
                        avoidDamage: {
                            hook: "I want to be able to avoid being hit",
                            options: ["Fighter", "Cleric", "Ranger", "Bard", "Paladin"]
                        },
                        absorbDamage: {
                            hook: "I want to be able to absorb lots of damage",
                            options: ["Druid"]
                        }, 
                        squishy: {
                            hook: "I don't mind being less durable in exchange for other features/capabilities",
                            options: ["Bard", "Druid"]
                        },
                        counterDamage: {
                            hook: "I like the idea of being to counter damage with magic by healing or buffing myself and my allies",
                            options: ["Bard", "Cleric", "Druid", "Paladin"]
                        }
                    },
                    offense: {
                        burstDamage: {
                            hook: "I want to be able to do a large amount of damage in a single blow or spell",
                            options: ["Paladin", "Cleric"]
                        },
                        consistentDamange: {
                            hook: "I want to always be able to deal damage consistently every turn, no matter how long the adventure goes",
                            options: ["Fighter", "Paladin", "Ranger", "Cleric"]
                        },
                        buffDamage: {
                            hook: "I want to use magic to help myself and allies deal more damage", 
                            options: ["Bard", "Cleric", "Druid"]
                        }
                    }
                },
                utility: {
                    physicality: {
                        hook: "I want to be good at moving, breaking and throwing things",
                        options: ["Fighter", "Paladin", "Cleric"]
                    },
                    specificSkills: {
                        hook: "I want to be extra good at a certain group of skills like perceiving my surroundings, religious topics, dealing with animals and nature, or social interactions",
                        options: ["Paladin", "Ranger", "Druid", "Cleric"]
                    },
                    versatility: {
                        hook: "I want to have a variety of skills that I am very good at",
                        options: ["Bard"]
                    }
                },
                magic: {
                    support: {
                        hook: "I want to be able to use magic to support my adventuring group by buffing, healing and guiding in a variety of ways", 
                        options: ["Bard", "Druid"]
                    },
                    offense: {
                        hook: "I want to use my magic to deal excessive amounts of damage in combat",
                        options: ["Paladin"]
                    },
                    healing: {
                        hook: "I want to be a dedicated healer that keeps the entire group alive",
                        options: ['Cleric']
                    },
                    versatility: {
                        hook: 'I want my magic to be useful for a variety of things inside and outside of combat', 
                        options: ["Bard", "Druid"]
                    }
                }
            }
        },
        primarily: {
            hook: "I want to be primarily a magic user", 
            options: ["Bard", "Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"],
            details: {
                combat: {
                    defense: {
                        avoidDamage: {
                            hook: "I want to have some defensive capabilities",
                            options: ["Cleric", "Bard", "Warlock"]
                        },
                        squishy: {
                            hook: "I accept that I won't be very durable in exchange for wielding more powerful magic",
                            options: ["Wizard", "Sorcerer", "Warlock", "Druid"]
                        },
                        counterDamage: {
                            hook: "I like the idea of being to counter damage with magic by healing or buffing myself and my allies",
                            options: ["Bard", "Cleric", "Druid"]
                        }
                    },
                    offense: {
                        burstDamage: {
                            hook: "I want to have a variety of offensive spells for every situation, at the cost of becoming less effective once I run out of magic.",
                            options: ["Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"]
                        },
                        buffDamage: {
                            hook: "I want to use magic to help myself and allies deal more damage", 
                            options: ["Bard", "Cleric", "Druid"]
                        }
                    }
                },
                utility: {
                    physicality: {
                        hook: "I want to be good at moving, breaking and throwing things",
                        options: ["Cleric"]
                    },
                    specificSkills: {
                        hook: "I want to be extra good at certain kinds of skills like perceiving my surroundings, religious topics, dealing with animals and nature, or social interactions",
                        options: ["Bard", "Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"]
                    },
                    versatility: {
                        hook: "I want to have a variety of skills that I am very good at",
                        options: ["Bard"]
                    }
                },
                magic: {
                    support: {
                        hook: "I want to be able to use magic to support my adventuring group by buffing, healing and guiding in a variety of ways", 
                        options: ["Bard", "Cleric", "Druid", ]
                    },
                    offense: {
                        hook: "I want to use my magic to deal excessive amounts of damage in combat",
                        options: ["Sorcerer", "Warlock", "Wizard"]
                    },
                    healing: {
                        hook: "I want to be a dedicated healer that keeps the entire group alive",
                        options: ['Cleric']
                    },
                    versatility: {
                        hook: 'I want my magic to be useful for a variety of things inside and outside of combat', 
                        options: ["Bard", "Druid", "Sorcerer", "Warlock", "Wizard"]
                    }
                }
            }
        }
    }
}
