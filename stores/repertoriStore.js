export const useRepertoriStore = defineStore("repertoriStore", () => {
  const songs = ref([
    {
      id: 1,
      title: "Quan tot s'enlaira",
      lyrics: [
        "Vaig, estar temptant la sort",
        "Mesurant les paraules",
        "Vaig flotant entre mig dels records",
        "",
        "I flotant, buscant el paradís",
        "Retallant les distàncies",
        "Que em transporten a un món indecís",
        "Però jo mai, mai",
        "Mai, mai",
        "Seré feliç",
        "Com ho he estat aquesta nit"
      ]
    },
    {
      id: 2,
      title: "Correllengua",
      lyrics: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        "Ex ea commodo consequat."
      ]
    },
    {
      id: 3,
      title: "Més enllà",
      lyrics: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        "Ex ea commodo consequat."
      ]
    }
  ])

  return {
    songs,
  };
});
