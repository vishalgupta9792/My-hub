// export const UserDetails = (name, isOnline, hideOffline, isPremium, role)  => {
//     if (hideOffline && !isOnline) {
//         return null;
//     } 
//     let roleBadge = null;
//     if (role ==="admin"){
//         roleBadge = <span>🔑Admin</span>
//     } 
// } else if (role === "moderator") {
//     roleBadge = <span>🛡️Moderator</span>
// } else if (role === "vip") {
//     roleBadge = <span>💎VIP</span>
// }
// return (
//     <div>
//         <h3>{name} {isPremium && <span>⭐</span>}
//         {isPremium && <span>⭐</span>}
//         {roleBadge}
//         </h3>
//         <span>{isOnline ? " 🟢 Online" : " 🔴 Offline"}</span>
//         <p>{isOnline ? "Available for chat" : "Not Available for chat"}</p>
//         <isOnline ? (
//             <button>Send Message</button>
//         ) : (
//             <button disabled>Send Message</button>      
//         )
//     </div>