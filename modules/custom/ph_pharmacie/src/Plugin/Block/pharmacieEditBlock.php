<?php
/**
 * Created by PhpStorm.
 * User: Mariem
 * Date: 29/01/2019
 * Time: 09:27
 */

namespace Drupal\ph_pharmacie\Plugin\Block;

//use Drupal\Console\Bootstrap\Drupal;
use Drupal\Core\Block\BlockBase;
use Drupal\node\Entity\Node;
use Drupal\profile\Entity\Profile;
use Drupal\user\Entity\User;

/**
 * Provides a pharmacie edit form Block.
 *
 * @Block(
 *  id = "pharmacie_edit_block",
 *  admin_label = @Translation("pharmacie edit form Block"),
 * )
 */
class pharmacieEditBlock extends BlockBase
{

  public function build()
  {
    $user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
    $current_path = \Drupal::request()->getPathInfo();

    $storage = \Drupal::entityTypeManager()->getStorage('profile');
    $profile = $storage->loadByUser($user, 'pharmacie');
    $form = \Drupal::service('entity.form_builder')->getForm($profile);
    if ($profile) {
      $form['revision_information']['#access'] = false;
      return $form;
    }

    // TODO: Implement build() method.
  }


}
