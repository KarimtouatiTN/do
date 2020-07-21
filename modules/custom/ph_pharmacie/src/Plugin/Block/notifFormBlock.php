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
use Drupal\Core\Form\FormStateInterface;
use Drupal\node\Entity\Node;
use Drupal\profile\Entity\Profile;
use Drupal\user\Entity\User;

/**
 * Provides a Notif hidden form Block.
 *
 * @Block(
 *  id = "notif_hidden_form_block",
 *  admin_label = @Translation("Notif hidden form Block"),
 * )
 */
class notifFormBlock extends BlockBase
{

  public function build()
  {
    $form = \Drupal::formBuilder()->getForm('Drupal\ph_pharmacie\Form\NotifHiddenForm');

      return $form;
  }
}
