<?php
/**
 * Created by PhpStorm.
 * User: Mariem
 * Date: 29/01/2019
 * Time: 09:27
 */

namespace Drupal\ph_grossiste\Plugin\Block;

//use Drupal\Console\Bootstrap\Drupal;
use Drupal\Core\Block\BlockBase;
use Drupal\node\Entity\Node;
use Drupal\profile\Entity\Profile;
use Drupal\user\Entity\User;

/**
 * Provides a grossite edit form Block.
 *
 * @Block(
 *  id = "grossiste_edit_block",
 *  admin_label = @Translation("grossite edit form Block"),
 * )
 */
class grossisteEditBlock extends BlockBase
{

  public function build()
  {
    $user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
    $current_path = \Drupal::request()->getPathInfo();

    $storage = \Drupal::entityTypeManager()->getStorage('profile');
    $profile = $storage->loadByUser($user, 'grossiste');
    $form = \Drupal::service('entity.form_builder')->getForm($profile);
    if ($profile) {
      $form['revision_information']['#access'] = false;
      return $form;
    }

    // TODO: Implement build() method.
  }


}
