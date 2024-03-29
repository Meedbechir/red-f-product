import logo from "../assets/icons/logo.svg";
import SidebarComponent from "./SidebarComponent";
import { menu } from "./Utils";
import { AccountCircle } from "@mui/icons-material";

function SidebarComp() {
  return (
    <div className="vh-100 sidebar py-2">
      <div className="m-2 pb-2 ps-1" id="logo">
        <img src={logo} alt="icon" />
        <span className="brand-name fs-5 fw-bold mx-2">RED PRODUCT</span>
      </div>
      <h6 className="mx-3">Principal</h6>
      <div className="linkSidebar">
        {menu.map((elem, index) => (
          <SidebarComponent {...elem} key={index} />
        ))}
      </div>
      <div style={{ height: "80%" }} className="d-flex justify-content-center ">
        <div
          className="d-flex align-items-center contentOnline pt-5"
          style={{ width: "100%", height: "20%", marginTop: "90%" }}
        >
          <div className="ps-3">
            <AccountCircle style={{ fontSize: "2.8rem" }} />
          </div>

          <div className="mx-2 pt-2">
            <p
              style={{ fontWeight: "800", fontSize: "11px" }}
              className="p-0 m-0 name"
            >
              Meed Bechiir
            </p>
            <div className="d-flex align-items-center py-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarComp;
