import React from "react";
import { useParams } from "react-router-dom";
import { getMember } from "../../service/apiService";
import { MyContext } from "../../myContext";
import { Member } from "../../common";
import { DetailPage } from "./detail.component";

export const DetailContainer: React.FC = () => {
  const { id } = useParams();
  const { companyName } = React.useContext(MyContext);
  const [member, setMember] = React.useState<Member>({
    avatar_url: "",
    id: "",
    login: ""
  });

  React.useEffect(() => {
    getMember(id).then(
      json => {
        setMember(json);
      },
      error => {
        alert(
          `Se ha producido el siguientet error en la llamada a la API: ${error.message}`
        );
        console.error(error);
      }
    );
  }, []);

  return <DetailPage id={id} companyName={companyName} member={member} />;
};
