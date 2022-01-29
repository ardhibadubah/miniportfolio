import { Card } from 'react-bootstrap';

const SkillCard = (props) => {
  return (
    <>
      <Card style={{ width: '15rem' }}>
        <div className='display-1 text-center py-5'>{props.logo}</div>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default SkillCard;
