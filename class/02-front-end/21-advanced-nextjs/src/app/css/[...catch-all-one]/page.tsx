export default function CatchAllOnePage() {
  return <h1>Catch All One Page</h1>;
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// localhost:3000/css/something ✅
// localhost:3000/css/something/something-again ✅
// localhost:3000/css/something/something-again/10 ✅
// localhost:3000/css/something/something-again/10/2024 ✅

// localhost:3000/css/css-grid ❌
// localhost:3000/css/flex-box ❌

// localhost:3000/css/css-grid/something ✅
// localhost:3000/css/flex-box/2024 ✅
