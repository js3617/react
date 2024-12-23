const SuccessModalStyled = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0)",
        zIndex: 10,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    content: {
        width: "348px",
        minWidth: "240px",
        height: "105px",
        zIndex: 150,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        border: "1px solid #03458E",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        backgroundColor: "#018BD0",
        color: "#FFFFFF",
        fontWeight: "700",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto"
    }
};

const CreateModalStyled = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0)",
        zIndex: 10,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    content: {
        width: "348px",
        minWidth: "240px",
        height: "105px",
        zIndex: 150,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        border: "1px solid #03458E",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        backgroundColor: "#018BD0",
        color: "#FFFFFF",
        fontWeight: "700",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto"
    }
};

export {SuccessModalStyled, CreateModalStyled};
