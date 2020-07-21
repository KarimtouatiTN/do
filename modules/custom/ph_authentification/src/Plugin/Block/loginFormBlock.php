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
 * Provides a login form Block.
 *
 * @Block(
 *  id = "login_form_block",
 *  admin_label = @Translation("login form Block"),
 * )
 */
class loginFormBlock extends BlockBase
{

  public function build()
  {
    $form = \Drupal::formBuilder()->getForm(\Drupal\user\Form\UserLoginForm::class);
    return $form;
    // TODO: Implement build() method.
  }


}
