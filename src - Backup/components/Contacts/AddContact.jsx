import { Link } from "react-router-dom";

import Spinner from "../Spinner";
import { COMMENT, GREEN, PURPLE } from "../../helpers/Colors"

const AddContact = ({
  loading,
  setContactInfo,
  contact,
  groups,
  createContactForm: createContactForm
}) => {
  return (<>
    {loading ? (
      <Spinner />
    ) : (
      <section className="p-3">
        <img
          src={require("../../assets/man-taking-note.png")}
          height="400px"
          style={{
            position: "absolute",
            zIndex: "-1",
            top: "130px",
            left: "100px",
            opacity: "50%",
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col">
              <p
                className="h4 fw-bold text-cneter"
                style={{ color: GREEN }}>
                ساخت مخاطب جدید
              </p>
            </div>
          </div>
        </div>
        <hr style={{ backgroundColor: GREEN }} />
        <div className="row mt-5">
          <div className="col-md-4">
            <form onSubmit={createContactForm}>
              <div className="mb-2">
                <input
                  name="fullname"
                  type="text"
                  value={contact.fullname}
                  onChange={setContactInfo}
                  className="form-control"
                  placeholder="نام و نام خانوادگی"
                  required={true}
                />
              </div>
              <div className="mb-2">
                <input
                  name="photo"
                  type="text"
                  value={contact.photo}
                  onChange={setContactInfo}
                  className="form-control"
                  required={true}
                  placeholder="آدرس تصویر"
                />
              </div>
              <div className="mb-2">
                <input
                  name="mobile"
                  type="number"
                  value={contact.mobile}
                  onChange={setContactInfo}
                  className="form-control"
                  required={true}
                  placeholder="شماره موبایل"
                />
              </div>
              <div className="mb-2">
                <input
                  name="email"
                  type="email"
                  value={contact.emial}
                  onChange={setContactInfo}
                  className="form-control"
                  required={true}
                  placeholder="آدرس ایمیل"
                />
              </div>
              <div className="mb-2">
                <input
                  name="job"
                  type="text"
                  value={contact.job}
                  onChange={setContactInfo}
                  className="form-control"
                  required={true}
                  placeholder="شغل"
                />
              </div>
              <div className="mb-2">
                <select
                  name="group"
                  value={contact.group}
                  onChange={setContactInfo}
                  required={true}
                  className="form-control"
                >
                  <option value="">انتخاب گروه</option>
                  {groups.length > 0 && groups.map((group) => (
                    <option key={group.id} value={group.id}>
                      {group.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mx-2">
                <input
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: PURPLE }}
                  value="ساخت مخاطب"
                />
                <Link
                  to="/contacts"
                  className="btn mx-2"
                  style={{ backgroundColor: COMMENT }}
                >
                  انصراف
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    )}
  </>)
}
export default AddContact;