export default function GrandParent() {
  const familyProfile = {
    grandParent: "Alfin",
    parent: "Syatori",
    children: "Nahla",
    grandChildren: "Keysha",
  };

  return (
    <div className="p-5 grand-parent border">
      <p>Grand Parent: {familyProfile.grandParent}</p>
      <Parent
        parentName={familyProfile.parent}
        childrenName={familyProfile.children}
        grandChildrenName={familyProfile.grandChildren}
      />
    </div>
  );
}

function Parent(props: {
  parentName: string;
  childrenName: string;
  grandChildrenName: string;
}) {
  return (
    <div className="p-5 border parent">
      <p>Parent: {props.parentName}</p>
      <Children
        childrenName={props.childrenName}
        grandChildrenName={props.grandChildrenName}
      />
    </div>
  );
}

function Children(props: { childrenName: string; grandChildrenName: string }) {
  return (
    <div className="p-5 border children">
      <p>Children: {props.childrenName}</p>
      <GrandChildren grandChildrenName={props.grandChildrenName} />
    </div>
  );
}

function GrandChildren(props: { grandChildrenName: string }) {
  return (
    <div className="p-5 border grand-children">
      <p>Grand Children: {props.grandChildrenName}</p>
    </div>
  );
}
