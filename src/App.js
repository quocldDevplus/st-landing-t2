import FE02Typical from "~/components/FE02Typical/FE02Typical";
import Fe07_stsoftware from "~/components/FE07_STSOFTWARE/Fe07_stsoftware";
import Header from "~/components/HeaderFake/Header";
import {Outlet} from "react-router-dom";

const App =() => {
    return (
            <div className="App">
           <Header/>
                <Outlet/>
            </div>
    );
}

export default App;
