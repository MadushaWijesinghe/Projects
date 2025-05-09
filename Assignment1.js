// Madusha Wijesinghe M23W0114

const students = [
    {ID:2023001, Grade:"A", Firstname:"Ann", Lastname:"Fernandz"},
    {ID:2023002, Grade:"B", Firstname:"Barbera", Lastname:"Johnson"},
    {ID:2023014, Grade:"C", Firstname:"Ann", Lastname:"Perera"},
    {ID:2023024, Grade:"C", Firstname:"Raji", Lastname:"Bhakshi"},
    {ID:2023019, Grade:"A", Firstname:"Mihiri", Lastname:"Perera"},
    {ID:2023011, Grade:"B", Firstname:"Dil", Lastname:"Karunarathne"},
    {ID:2023007, Grade:"B", Firstname:"Kalpani", Lastname:"Nandasena"},
    {ID:2023021, Grade:"A", Firstname:"Sita", Lastname:"Kumal"},
    {ID:2023006, Grade:"C", Firstname:"Dahal", Lastname:"Ujwal"},
    {ID:2023015, Grade:"C", Firstname:"Nuwan", Lastname:"Pieris"}];

   // Sort by ID
   let sortedByID = [...students];
   for (let i = 0; i < sortedByID.length - 1; i++) {
       for (let j = i + 1; j < sortedByID.length; j++) {
           if (sortedByID[i].ID > sortedByID[j].ID) {
               let temp = sortedByID[i];
               sortedByID[i] = sortedByID[j];
               sortedByID[j] = temp;
           }
       }
   }
   console.log("Sorted by ID:", sortedByID);

   // Madusha Wijesinghe M23W0114

   // Sort by Grade
   let sortedByGrade = [...students];
   for (let i = 0; i < sortedByGrade.length - 1; i++) {
       for (let j = i + 1; j < sortedByGrade.length; j++) {
           if (sortedByGrade[i].Grade > sortedByGrade[j].Grade) {
               let temp = sortedByGrade[i];
               sortedByGrade[i] = sortedByGrade[j];
               sortedByGrade[j] = temp;
           }
       }
   }
   console.log("Sorted by Grade:", sortedByGrade);

   // Sort by First Name
   let sortedByFirstName = [...students];
   for (let i = 0; i < sortedByFirstName.length - 1; i++) {
       for (let j = i + 1; j < sortedByFirstName.length; j++) {
           if (sortedByFirstName[i].Firstname.localeCompare(sortedByFirstName[j].Firstname) > 0) {
               let temp = sortedByFirstName[i];
               sortedByFirstName[i] = sortedByFirstName[j];
               sortedByFirstName[j] = temp;
           }
       }
   }
   console.log("Sorted by First Name:", sortedByFirstName);


// Madusha Wijesinghe M23W0114

   // Sort by Last Name
   let sortedByLastName = [...students];
   for (let i = 0; i < sortedByLastName.length - 1; i++) {
       for (let j = i + 1; j < sortedByLastName.length; j++) {
           if (sortedByLastName[i].Lastname.localeCompare(sortedByLastName[j].Lastname) > 0) {
               let temp = sortedByLastName[i];
               sortedByLastName[i] = sortedByLastName[j];
               sortedByLastName[j] = temp;
           }
       }
   }
   console.log("Sorted by Last Name:", sortedByLastName);