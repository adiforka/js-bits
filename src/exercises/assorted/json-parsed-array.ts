// storing JSON-sourced family members in a memberNames array
const data = `{
    "name": "Vincenzo",
    "children": [
      {
        "name": "Stephan",
        "children": [
          { "name": "Giddy", "children": [] },
          { "name": "Marty", "children": [] }
        ]
      },
      {
        "name": "Charlie",
      }
    ]
  }`;
  
  const parsedFamily = JSON.parse(data);
  type FamilyMember = { name: string; children: any[] };
  
  function getFamily(
    member: FamilyMember,
    memberNames: Array<string> = []   
  ) {
      memberNames.push(member.name)
      // will work no matter if an object has a children property or not
    if (!member.children || member.children.length === 0) {
      return memberNames;
    }
  
    member.children.forEach(child => {
      getFamily(child, memberNames);
    });
  
    return memberNames;
  }
  
  const memberNames = getFamily(parsedFamily);
  console.log(memberNames);
  