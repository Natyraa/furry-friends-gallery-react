import GoldenRetriever1 from './images/goldenretriever1.jpg';
import GoldenRetriever2 from './images/goldenretriever2.jpg';
import GoldenRetriever3 from './images/goldenretriever3.jpg';
import GoldenRetriever4 from './images/goldenretriever4.jpeg';
import GermanShepherd1 from './images/germanshepherd1.jpg';
import GermanShepherd2 from './images/germanshepherd2.jpg';
import GermanShepherd3 from './images/germanshepherd3.jpg';
import GermanShepherd4 from './images/germanshepherd4.jpeg';
import Husky1 from './images/husky1.jpeg';
import Husky2 from './images/husky2.jpg';
import Husky3 from './images/husky3.jpeg';
import Husky4 from './images/husky4.jpg';
import Collie1 from './images/collie1.jpg';
import Collie2 from './images/collie2.jpg';
import Collie3 from './images/collie3.jpg';
import Collie4 from './images/collie4.jpg'
import Belg1 from './images/belg1.jpeg';
import Belg2 from './images/belg2.jpg';
import Belg3 from './images/belg3.jpeg';
import Belg4 from './images/belg4.jpg'
import Corgi1 from "./images/corgi1.jpeg";
import Corgi2 from './images/corgi2.jpeg';
import Corgi3 from './images/corgi3.jpg';
import Corgi4 from './images/corgi4.jpg'
import Bichon1 from './images/bichon1.jpeg';
import Bichon2 from './images/bichon2.avif';
import Bichon3 from './images/bichon3.jpg';
import Poodle1 from './images/poodle1.jpeg';
import Poodle2 from './images/poodle2.jpeg';
import Poodle3 from './images/poodle3.jpg'
 
 const dogsData = [
  {
    id: 0,
    name: "Golden Retriever",
    description: "Golden Retrievers are such wonderful dogs! They're known for their friendly disposition, intelligence, and loyalty. Originally bred as hunting dogs, they're now beloved family pets and are often used as therapy and assistance dogs due to their gentle nature and willingness to please. Their beautiful golden coats and warm brown eyes make them instantly recognizable and utterly adorable. They're great companions for families, singles, and everyone in between.",
    images: [GoldenRetriever1 , GoldenRetriever2 , GoldenRetriever3 , GoldenRetriever4 ],

  },
  {
    id: 1,
    name: "German Shepherd",
    description: "Originally bred as herding dogs, German Shepherds are known for their exceptional intelligence, trainability, and versatility. They excel in a wide range of roles, including police and military work, search and rescue operations, therapy and assistance work, and as loyal family companions. These dogs require regular exercise, mental stimulation, and consistent training to thrive. With the right care and environment, German Shepherds make wonderful companions for individuals and families who appreciate their intelligence, loyalty, and versatile abilities.",
    images: [GermanShepherd1 , GermanShepherd2 , GermanShepherd3 , GermanShepherd4],

  },
  {
    id: 2,
    name: "Siberian Husky",
    description: "The Siberian Husky is a medium-sized working dog breed that originated in northeastern Siberia, Russia. They are recognizable by their distinctive wolf-like appearance, erect triangular ears, and striking almond-shaped eyes, which can be blue, brown, or a combination of both. Siberian Huskies are known for their high energy levels, agility, and endurance. They were originally bred by the Chukchi people of Siberia to pull sleds over long distances, and they have retained their strong working instincts to this day. As such, they require plenty of exercise and mental stimulation to keep them happy and healthy.",
    images: [Husky1 , Husky2 , Husky3 , Husky4],

  },
  {
    id: 3,
    name: "Border Collie",
    description: "The Border Collie is a highly intelligent, agile, and hardworking herding dog breed known for its remarkable herding instincts and incredible work ethic . One of the most remarkable traits of the Border Collie is its intelligence and trainability. They are widely regarded as one of the most intelligent dog breeds and excel in various canine sports and activities, including obedience, agility, herding trials, and flyball. Their keen ability to learn and problem-solve makes them highly adaptable and versatile working dogsssss.",
    images:[Collie1 , Collie2 , Collie3 , Collie4 ],

  },
  {
    id: 4,
    name: "Belgian Malinois",
    description: "Belgian Malinois is a breed of dog that's known for its intelligence, energy, and loyalty. Originally bred for herding, they're also often used as police and military working dogs, as well as in search and rescue missions. They're medium-sized, with a short coat that's typically fawn-colored with a black mask, although they can also be mahogany or tan. Malinois are highly active and require plenty of physical and mental stimulation to keep them happy and healthy. They're not recommended for inexperienced dog owners due to their high energy levels and need for training and socialization.",
    images:[Belg1 , Belg2 , Belg3 , Belg4],

  },
  {
    id: 5,
    name: "Corgis",
    description: "Corgis are an adorable breed of dog known for their distinctive appearance, including short legs, a long body, and large ears. There are two main breeds of corgis: the Pembroke Welsh Corgi and the Cardigan Welsh Corgi. Pembroke Welsh Corgis are more common and are known for their docked tails, while Cardigan Welsh Corgis have long tails. Both breeds are intelligent, affectionate, and make great companions for families and individuals alike. Corgis were originally bred for herding cattle, so they have a strong instinct to work and may try to herd people or other animals.",
    images:[Corgi1 , Corgi2 , Corgi3 , Corgi4],

  },
  {
    id: 6,
    name: "Bichon Frise",
    description: "The Bichon Frise is a small, fluffy, and cheerful breed of dog known for its playful and affectionate nature. They have a distinctive white coat that is soft and curly, often resembling a powder puff. Originally bred as companion dogs, Bichon Frises thrive on human interaction and are known for their friendly disposition and love of being around people. They're typically good with children and other pets, making them excellent family pets.",
    images:[Bichon1 , Bichon2 ,Bichon3],

  },
  {
    id: 7,
    name: "Toy Poodle",
    description: "Toy Poodles are a small-sized variety of the Poodle breed, known for their intelligence, elegance, and hypoallergenic coat. They're characterized by their curly, dense, and often tightly curled fur, which requires regular grooming to prevent matting. Toy Poodles come in a variety of colors including white, black, apricot, and silver. Despite their small size, Toy Poodles are exceptionally intelligent and trainable dogs. They excel in obedience training and are often used in dog sports such as agility and obedience trials. They're also known for their alertness and make excellent watchdogs, often barking to alert their owners of strangers or unusual sounds.",
    images:[Poodle1 , Poodle2 , Poodle3],

  },
]

export default dogsData