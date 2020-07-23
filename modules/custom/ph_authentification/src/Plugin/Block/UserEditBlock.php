<?php
/**
 * Created by PhpStorm.
 * User: Mariem
 * Date: 29/01/2019
 * Time: 09:27
 */

namespace Drupal\ph_authentification\Plugin\Block;

//use Drupal\Console\Bootstrap\Drupal;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormBuilder;
use Drupal\node\Entity\Node;
use Drupal\profile\Entity\Profile;
use Drupal\user\Entity\User;

/**
 * Provides a user edit form Block.
 *
 * @Block(
 *  id = "user_edit_form_block",
 *  admin_label = @Translation("user edit form Block"),
 * )
 */
class UserEditBlock extends BlockBase
{

  public function build()
  {
    $user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
    $form = \Drupal::service('entity.form_builder')->getForm($user);
    return $form;
    // TODO: Implement build() method.
  }


}
