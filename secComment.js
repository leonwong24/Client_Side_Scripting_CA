<script>

  function rtnSecScore(section){
    var secScore = 0;
    for(var i = 0; i < answerArray[section-1].length; i++){
      secScore+=answerArray[section-1][i];
    }

    return secScore;
  }

  function rtnSecComment(sec,score){
    var comment ="";
    switch(sec){
      case 1:
        if(score >=4 && score <= 9){
          comment = "The face to face training session will be a great opportunity for you to get guidance on progressing the universability of your organisation";
        }

        else if(score >= 10 && score <= 15 ){
          comment = "With a little more thought you will see more opportunities for increasing the universability of your services";
        }

        else{
          comment = "Well done you are clearly being proactive in considering making your services more universal";
        }

        break;

      case 2:
        if(score >= 5 && score <= 11){
			comment="The face to face training session will be a great opportunity for you to gain some perspective of the benefits of universability to your organisation and its members";
		}
		else if(score >= 12 && score <= 19){
			comment ="You have some sense of the benefits of a universal organisation";
		}
		else{
			comment="You have a very high level of appreciation of the mutual benefits for all stakeholders in an inclusive organisation";
		}
		
		break;
		
	  case 3:
		if(score >= 2 && score <= 5){
			comment = "The face to face session has great scope to convince you of the feasibility of promoting inclusion - just keep your mind open to the possibility"; 
		}
		else{
			comment ="You can see an inclusive future for your organisation and its members, the challenge is now to ensure that your decisions and resource allocations make this happen";
		}
		
		break;
	
	   case 4:
		 if(score >= 0 && score <= 10){
			 comment = "The face to face training session will only be of value to progressing your universability if you are willing to challenge your belief system about access to fitness services being a fundamental ";
		 }
		 else if(score >= 20 && score < 30){
			 comment = "While there is some openness to equity in your organisation the commitment is not yet wholly embraced by all. Belief systems within the organisation may be confused and possibly conflicting. It would be desirable to promote dialogue amongst your stakeholders around the topic of inclusion";
		 }
		 
		 else{
			 comment = "Your organisation’s value system is an inclusive one. Your challenge will be to safeguard this and promote this philosophy within the wider fitness sector";
		 }
		 
		 break;
		 
	   case 5:
		 if(score >= 0 && score < 10){
			 comment = "Universability is not something with which you have yet engaged, so the face to face training session will be an opportunity for significant learning in this respect";
		 }
		 
		 else if(score >= 10 && score < 20){
			 comment = "Your policies are confused and possibly conflicting. Some guidance will be needed to bring greater coherency to your efforts to date";
		 }
		 
		 else if(score >= 20 && score <= 30){
			 comment = "Your journey of making organisational policies inclusive has started well and this may be the catalyst for enhanced universability – if you are open to progressive change";
		 }
		 
		 else{
			 comment = "Your intentions are very sound in respect of inclusion and you have the potential to be a high achiever in this respect";
		 }
		 
		 break;
		  
		  
	   case 6:
		 if(score == 0){
			 comment ="You have great scope for learning during the face to face training session, once you have an open mind to the possibilities that an inclusive approach can offer";
		 }
		 
		 else if(score >= 10 && score <= 20){
			 comment ="You have made a positive start upon which your organisation can build sound relationships with people with disabilities. Unit three will offer you more ideas in respect of forging alliances with people with disabilities";
		 }
		 
		 else{
			 comment ="You are already a potential resource for people with disabilities in your community, as your networks are an essential element in the UFIT approach";
		 }
		 
		 break;
		
		
	   case 7:
		 if(score == 0){
			 comment ="Your organisation has yet to learn the power of dialogue as a means of providing desirable fitness services to all members of the community";
		 }
		 else{
			 comment ="As a listening organisation you have important information that can guide your journey towards universability. Your challenge is to interpret what is being said and to translate it into inclusive actions";
		 }
		 
		 break;
		 
	   case 8:
		 if(score == 0){
			 comment ="You have great scope for learning during the face to face training session, once you have an open mind to the possibilities that an inclusive approach can offer"; 
		 }
		 else if(score >= 10 && score <= 20){
			 comment ="You have made a positive start – you can use the questions here to reflect on how you can make more progress in this respect";
		 }
		 else{
			 comment ="You have the potential to be a role model of provision in the fitness sector. Programming is the basic unit of service delivery – where this is inclusive, your relevance to the wider community is enhanced"
		 }
		 
		 break;
		 
	   case 9:
		 if(score == 0 ){
			 comment ="Universability is not something with which you have engaged so the face to face training session will be an opportunity for significant learning in this respect";
		 }
		 
		 else if(score == 10){
			 comment ="Depending on the strength of influence of those with some perspective on inclusion, you may have scope to drive improvements from within. Consider the scope for repositioning those with training and knowledge in the area of inclusion to optimise their influence";
		 }
		 
		 else if(score >= 20 && score <= 30){
			 comment = "There is some scope within your organisation to promote universability principles and broaden your organisation’s relevance in the wider community ";
		 }
		 
		 else{
			 comment = "You have invested in your organisation’s most important asset. Your potential to offer inclusive services is vast. The challenge is to make sure that you optimally deploy this wisdom to make all aspects of your service provision truly inclusive";
		 }
		 
		 break;
	}
  }
	




</script>
