<?php
/**
 * Created by PhpStorm.
 * User: Mariem
 * Date: 29/01/2019
 * Time: 09:27
 */

namespace Drupal\ph_commande\Plugin\Block;

//use Drupal\Console\Bootstrap\Drupal;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormBuilder;
use Drupal\node\Entity\Node;
use Drupal\profile\Entity\Profile;
use Drupal\user\Entity\User;

/**
 * Provides a commande edit form Block.
 *
 * @Block(
 *  id = "commande_edit_form_block",
 *  admin_label = @Translation("commande edit form Block"),
 * )
 */
class CommandeEditBlock extends BlockBase
{

  public function build()
  {
    $current_path = \Drupal::service("path.current")->getPath();
    $parametre = explode("/", $current_path)[3];
    $commande = Node::load($parametre);
    $current_user_id = \Drupal::currentUser()->id();
    $grossite_id = $commande->get('field_grossiste')->getValue()[0]['target_id'];
//    die(var_dump($commande->get("field_etat_commande")->getValue()[0]['value']));
    if ($current_user_id == $grossite_id) {
      if ($commande->get("field_etat_commande")->getValue()[0]['value'] == 1) {
        $form = \Drupal::service('entity.form_builder')->getForm($commande);
        $form['revision_information']['#access'] = false;

        return $form;
      } else {
        \Drupal::messenger()->addError("Cette commande n'est plus valable.");
        $responce = new \Symfony\Component\HttpFoundation\RedirectResponse('/');
        $responce->send();
        return null;

      }
    } else {
      \Drupal::messenger()->addError("Cette commande n'est pas assignée à vous.");
      $responce = new \Symfony\Component\HttpFoundation\RedirectResponse('/');
      $responce->send();
      return null;
    }
    // TODO: Implement build() method.


  }
}
