import './informationcard.css';

type CardData = {
  icon: React.ReactNode;
  title: string;
  information: number;
  identifier: string;
};

type InformationCardProps = {
  data: CardData;
};

const InformationCard = ({ data }: InformationCardProps) => {
  return (
    <>
    <div className={`card-info-container id-${data.identifier}`}>
        <div className="card-logo">{data.icon}</div>
        <p className="card-title">{data.title}</p>
        <p className="card-record">{data.information}</p>
    </div>
    </>
  )
}

export default InformationCard;