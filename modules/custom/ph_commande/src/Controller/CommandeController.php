<?php
namespace Drupal\ph_commande\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\node\Entity\Node;

/**
 * A command controller.
 */
class CommandeController extends ControllerBase {

  /**
   * Accepts an order from pharmacy.
   */
  public function accept($nid) {
    $node=Node::load($nid);
    $current_user_id =\Drupal::currentUser()->id();
    $grossite_id=$node->get('field_grossiste')->getValue()[0]['target_id'];
    if ($current_user_id==$grossite_id){
      if ($node->get("field_etat_commande")->getValue()[0]['value']==1){
        $node->set('field_etat_commande',2);
        $node->save();
        \Drupal::messenger()->addStatus('Commande accepée');
      }else{
        \Drupal::messenger()->addError("Cette commande n'est plus valable.");
      }
    }else{
      \Drupal::messenger()->addError("Cette commande n'est pas assignée à vous.");
    }

    $responce = new \Symfony\Component\HttpFoundation\RedirectResponse('/mon-profil');
    $responce->send();
  }


  /**
   * Refuses an order from pharmacy.
   */
  public function refuse($nid) {
    $node=Node::load($nid);
    $current_user_id =\Drupal::currentUser()->id();
    $grossite_id=$node->get('field_grossiste')->getValue()[0]['target_id'];
    if ($current_user_id==$grossite_id){
      if ($node->get("field_etat_commande")->getValue()[0]['value']==1){
        $node->set('field_etat_commande',3);
        $node->save();
        \Drupal::messenger()->addStatus('Commande refusée');
      }else{
        \Drupal::messenger()->addError("Cette commande n'est plus valable.");
      }
    }else{
      \Drupal::messenger()->addError("Cette commande n'est pas assignée à vous.");
    }

    $responce = new \Symfony\Component\HttpFoundation\RedirectResponse('/mon-profil');
    $responce->send();
  }
}
