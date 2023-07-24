// import { CURRENTLINE, PURPLE, YELLOW, FOREGROUND, COMMENT } from './colors'

// export const ConfirmDelete = (contactId, contactFullname) => {
// 	confirmAlert({
// 		customUI: ({ onClose }) => {
// 			return (
// 				<div
// 					dir="rtl"
// 					style={{
// 						backgroundColor: CURRENTLINE,
// 						border: `1px solid ${PURPLE}`,
// 						borderRadius: "1em",
// 					}}
// 					className="p-4"
// 				>
// 					<h1 style={{ color: YELLOW }}>پاک کردن مخاطب</h1>
// 					<p style={{ color: FOREGROUND }}>
// 						مطمئنی که میخوای مخاطب {contactFullname} رو پاک کنی ؟
// 					</p>
// 					<button
// 						onClick={() => {
// 							removeContact(contactId);
// 							onClose();
// 						}}
// 						className="btn mx-2"
// 						style={{ backgroundColor: PURPLE }}
// 					>
// 						مطمئن هستم
// 					</button>
// 					<button
// 						onClick={onClose}
// 						className="btn"
// 						style={{ backgroundColor: COMMENT }}
// 					>
// 						انصراف
// 					</button>
// 				</div>
// 			);
// 		},
// 	});
// };